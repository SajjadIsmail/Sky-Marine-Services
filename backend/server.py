from fastapi import FastAPI, APIRouter, BackgroundTasks, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone
import smtplib
from email.message import EmailMessage


# Configure logging FIRST (before anything else)
logging.basicConfig(
    level=logging.DEBUG,  # Changed to DEBUG for detailed logs
    format='%(asctime)s - %(name)s - %(levelname)s - [%(filename)s:%(lineno)d] - %(message)s'
)
logger = logging.getLogger(__name__)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

logger.info("=" * 80)
logger.info("APPLICATION STARTING - Sky Marine Services Backend")
logger.info("=" * 80)

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
logger.info("MongoDB connection initialized: %s", mongo_url)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


# Contact models
class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    phone: str | None = None
    subject: str
    message: str


def _send_email_smtp(msg: ContactMessage) -> None:
    """Send an email via SMTP using environment configuration.

    Required env:
      SMTP_SERVER, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD,
      SMTP_FROM_EMAIL, SMTP_FROM_NAME (optional), EMAIL_ENABLED=true
      CONTACT_TO (optional; defaults to SMTP_FROM_EMAIL)
    """
    logger.info("=" * 80)
    logger.info("STARTING EMAIL SEND PROCESS")
    logger.info("=" * 80)
    logger.debug("Contact message: Name=%s, Email=%s, Subject=%s", msg.name, msg.email, msg.subject)
    
    # Step 1: Check if email is enabled
    enabled = str(os.environ.get("EMAIL_ENABLED", "false")).lower() == "true"
    logger.info("Step 1: Checking EMAIL_ENABLED flag... Value: %s", enabled)
    if not enabled:
        logger.warning("EMAIL_ENABLED is false; skipping email send!")
        return

    # Step 2: Load SMTP configuration
    logger.info("Step 2: Loading SMTP configuration from environment variables...")
    smtp_host = os.environ.get("SMTP_SERVER") or os.environ.get("SMTP_HOST")
    smtp_port = int(os.environ.get("SMTP_PORT", "587"))
    smtp_user = os.environ.get("SMTP_USERNAME") or os.environ.get("SMTP_USER")
    smtp_pass = os.environ.get("SMTP_PASSWORD")
    from_email = os.environ.get("SMTP_FROM_EMAIL") or smtp_user
    from_name = os.environ.get("SMTP_FROM_NAME", "Sky Marine Contact")
    to_email = os.environ.get("CONTACT_TO") or from_email

    logger.info("  - SMTP_HOST: %s", smtp_host)
    logger.info("  - SMTP_PORT: %s", smtp_port)
    logger.info("  - SMTP_USER: %s", smtp_user)
    logger.info("  - SMTP_PASSWORD: %s", "***" if smtp_pass else "NOT SET")
    logger.info("  - FROM_EMAIL: %s", from_email)
    logger.info("  - FROM_NAME: %s", from_name)
    logger.info("  - TO_EMAIL: %s", to_email)

    # Step 3: Validate configuration
    logger.info("Step 3: Validating SMTP configuration...")
    if not all([smtp_host, smtp_user, smtp_pass, from_email]):
        missing = []
        if not smtp_host: missing.append("SMTP_SERVER/SMTP_HOST")
        if not smtp_user: missing.append("SMTP_USERNAME/SMTP_USER")
        if not smtp_pass: missing.append("SMTP_PASSWORD")
        if not from_email: missing.append("SMTP_FROM_EMAIL")
        error_msg = f"Missing SMTP configuration: {', '.join(missing)}"
        logger.error(error_msg)
        raise RuntimeError(error_msg)
    logger.info("  ✓ All required SMTP configuration present")

    # Step 4: Build email message
    logger.info("Step 4: Building email message...")
    email = EmailMessage()
    email["From"] = f"{msg.name} <{from_email}>"
    email["To"] = to_email
    email["Subject"] = msg.subject
    email["Reply-To"] = msg.email

    received_at = datetime.now(timezone.utc).isoformat()
    body_lines = [
        "Contact Details:",
        f"- Name: {msg.name}",
        f"- Email: {msg.email}",
        f"- Phone: {msg.phone or '-'}",
        "",
        "Message:",
        msg.message,
        "",
        ]
    email.set_content("\n".join(body_lines))
    logger.info("  ✓ Email message constructed")
    logger.debug("  Email body preview (first 200 chars): %s", "\n".join(body_lines)[:200])

    # Step 5: Connect to SMTP server
    logger.info("Step 5: Connecting to SMTP server %s:%s...", smtp_host, smtp_port)
    try:
        with smtplib.SMTP(smtp_host, smtp_port, timeout=30) as server:
            logger.info("  ✓ Connected to SMTP server")
            
            # Step 6: Start TLS
            logger.info("Step 6: Initiating STARTTLS...")
            try:
                server.set_debuglevel(1)  # Enable SMTP debug output
                server.ehlo()
                logger.debug("  - EHLO completed")
                server.starttls()
                logger.info("  ✓ STARTTLS successful")
                server.ehlo()
                logger.debug("  - Second EHLO completed")
            except smtplib.SMTPException as e:
                logger.warning("  ⚠ SMTP STARTTLS not available: %s. Proceeding without TLS.", e)
            
            # Step 7: Authenticate
            logger.info("Step 7: Authenticating with SMTP server...")
            try:
                server.login(smtp_user, smtp_pass)
                logger.info("  ✓ Authentication successful")
            except smtplib.SMTPAuthenticationError as e:
                logger.error("  ✗ Authentication failed: %s", e)
                raise
            except Exception as e:
                logger.error("  ✗ Login error: %s", e)
                raise
            
            # Step 8: Send message
            logger.info("Step 8: Sending email message...")
            try:
                server.send_message(email)
                logger.info("  ✓ Email sent successfully")
            except Exception as e:
                logger.error("  ✗ Send failed: %s", e)
                raise
            
        logger.info("=" * 80)
        logger.info("EMAIL SENT SUCCESSFULLY to %s", to_email)
        logger.info("=" * 80)
        
    except smtplib.SMTPAuthenticationError as e:
        logger.error("SMTP Authentication Failed!")
        logger.error("  Error code: %s", e.smtp_code)
        logger.error("  Error message: %s", e.smtp_error)
        logger.exception("Full authentication error details:")
        raise
    except smtplib.SMTPException as e:
        logger.error("SMTP Error occurred!")
        logger.exception("SMTP exception details:")
        raise
    except ConnectionError as e:
        logger.error("Connection Error - Could not reach SMTP server!")
        logger.exception("Connection error details:")
        raise
    except Exception as e:
        logger.error("Unexpected error during email send!")
        logger.exception("Full error details:")
        raise

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


@api_router.post("/contact")
async def submit_contact(message: ContactMessage, background: BackgroundTasks):
    """Accept contact form submissions and send via SMTP in the background."""
    logger.info("📧 Received contact form submission from: %s (%s)", message.name, message.email)
    logger.debug("Contact details: Name=%s, Email=%s, Phone=%s, Subject=%s", 
                 message.name, message.email, message.phone, message.subject)
    
    try:
        # Schedule email send to avoid blocking response
        logger.info("Adding email send task to background queue...")
        background.add_task(_send_email_smtp, message)
        logger.info("✓ Email task queued successfully - returning 200 OK to client")
        return {"ok": True}
    except Exception as e:
        logger.error("✗ Failed to queue contact email task!")
        logger.exception("Queue error details:")
        raise HTTPException(status_code=500, detail=str(e))

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    logger.info("🚀 Application startup complete")
    logger.info("API available at: /api")
    logger.info("Contact endpoint: /api/contact")
    # Log email configuration status
    email_enabled = str(os.environ.get("EMAIL_ENABLED", "false")).lower() == "true"
    logger.info("Email sending: %s", "ENABLED" if email_enabled else "DISABLED")
    if email_enabled:
        smtp_host = os.environ.get("SMTP_SERVER") or os.environ.get("SMTP_HOST")
        smtp_port = os.environ.get("SMTP_PORT", "587")
        contact_to = os.environ.get("CONTACT_TO", "NOT SET")
        logger.info("  SMTP Server: %s:%s", smtp_host, smtp_port)
        logger.info("  Recipient: %s", contact_to)

@app.on_event("shutdown")
async def shutdown_db_client():
    logger.info("Shutting down application...")
    client.close()
    logger.info("MongoDB connection closed")