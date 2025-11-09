# Sky Marine Services - Full Stack Application

## 🎯 Quick Start (Development)

### Prerequisites
- Python 3.10.11 (or higher)
- Node.js 20.x (or higher)
- MongoDB (optional for full functionality)

### 1. Backend Setup

```powershell
# Navigate to backend directory
cd backend

# Create .env file from example
Copy-Item .env.example .env

# Run the backend server
cd 'c:\MyFiles\Work\Personal\Sky Marine\Emergent-marine\backend'
$env:MONGO_URL='mongodb://localhost:27017'
$env:DB_NAME='emergent_db'
$env:CORS_ORIGINS='http://localhost:3000'
& "c:\MyFiles\Work\Personal\Sky Marine\Emergent-marine\.venv\Scripts\python.exe" -m uvicorn server:app --reload --host 127.0.0.1 --port 8000
```

### 2. Frontend Setup

```powershell
# Navigate to frontend directory
cd frontend

# Install dependencies (if not already installed)
npm install --legacy-peer-deps

# Run the frontend dev server
npm start
```

### 3. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://127.0.0.1:8000
- **API Documentation**: http://127.0.0.1:8000/docs

---

## ⚙️ Environment Configuration

### Backend (.env)

Create `.env` file in `backend/` directory from `.env.example`:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=emergent_db
CORS_ORIGINS=http://localhost:3000
```

### Frontend (.env) - Optional

Create `.env` file in `frontend/` directory if needed:

```env
REACT_APP_API_URL=http://127.0.0.1:8000/api
```

---

## 🚀 Current Application Status

### ✅ Backend Server
- Running on: http://127.0.0.1:8000
- API Endpoints:
  - `GET /api/` - Root endpoint
  - `POST /api/status` - Create status check
  - `GET /api/status` - Get all status checks
- Documentation: http://127.0.0.1:8000/docs

### ✅ Frontend Server
- Running on: http://localhost:3000
- Features:
  - Home page with hero carousel
  - Services showcase
  - About Us, Contact Us, Gallery
  - Online Verification
  - Service detail pages

---

## 🎨 Adding Custom Images

See `frontend/DOWNLOAD_IMAGES_MANUALLY.md` for detailed instructions.

**Quick Summary:**
- Download images from Unsplash, Pexels, or Pixabay
- Place in `frontend/public/images/` folders
- Currently using fallback images from Unsplash CDN

---

## 📁 Project Structure

```
Emergent-marine/
├── backend/
│   ├── server.py              # FastAPI application
│   ├── requirements.txt       # Python dependencies
│   ├── .env.example           # Example environment config
│   └── .env                   # Your environment variables
├── frontend/
│   ├── src/                   # React source code
│   ├── public/images/         # Image assets
│   ├── package.json           # Node dependencies
│   └── .env.example           # Example frontend config
└── .venv/                     # Python virtual environment
```

---

## 📝 Documentation

- **Image Setup**: `frontend/IMAGE_SETUP_SUMMARY.md`
- **Manual Image Download**: `frontend/DOWNLOAD_IMAGES_MANUALLY.md`
- **Image Sources**: `frontend/IMAGE_SOURCES.md`

---

**For detailed setup, troubleshooting, and production deployment, see the documentation files in the frontend folder.**
