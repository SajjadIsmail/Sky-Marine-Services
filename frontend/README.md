# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Contact form configuration

The Contact Us page is wired to send messages without needing your own backend. You can choose one of these free options:

1. Zero-config (mailto fallback)
	 - Do nothing. When a user submits the form, their email client opens with all details prefilled to `REACT_APP_CONTACT_FALLBACK_EMAIL` (default: `skymarineservicestuty@gmail.com`).
	 - Pros: No setup. Cons: Depends on the user's email client and their device.

2. Formspree (recommended: free, very easy)
	 - Create a form at https://formspree.io and copy your endpoint (e.g. `https://formspree.io/f/xxxxxxxx`).
	 - Create a `frontend/.env` file with:
		 - `REACT_APP_CONTACT_PROVIDER=formspree`
		 - `REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx`
	 - Restart the dev server.
	 - Submissions will appear in your Formspree dashboard and can be emailed to you.

3. Webhook to an automation tool (free tiers available)
	 - Create a webhook URL in Zapier/Make, or test with https://webhook.site.
	 - In `frontend/.env` set:
		 - `REACT_APP_CONTACT_PROVIDER=webhook`
		 - `REACT_APP_WEBHOOK_URL=<your webhook URL>`
	 - The app will POST JSON payloads like:
		 ```json
		 { "type": "contact_message", "timestamp": "2025-01-01T00:00:00.000Z", "payload": { "name": "...", "email": "...", "phone": "...", "subject": "...", "message": "..." } }
		 ```

4. Google Forms (free, very easy once set)
	 - Create a Google Form with fields for Name, Email, Phone (optional), Subject, Message.
	 - Click “Get pre-filled link”, enter example values, and click “Get link”. The generated URL contains `entry.<id>` keys for each field.
	 - Copy the form action URL (open the live form, then View Source and search for `formResponse`, or use the prefill link’s base path):
		 - `https://docs.google.com/forms/d/e/<FORM_ID>/formResponse`
	 - In `frontend/.env` set:
		 - `REACT_APP_CONTACT_PROVIDER=google-forms`
		 - `REACT_APP_GOOGLE_FORM_ACTION=https://docs.google.com/forms/d/e/<FORM_ID>/formResponse`
		 - Map your fields using entry IDs from the pre-filled link:
			 - `REACT_APP_GOOGLE_FORM_NAME_ENTRY=entry.xxxxxxxx`
			 - `REACT_APP_GOOGLE_FORM_EMAIL_ENTRY=entry.xxxxxxxx`
			 - `REACT_APP_GOOGLE_FORM_PHONE_ENTRY=entry.xxxxxxxx` (optional)
			 - `REACT_APP_GOOGLE_FORM_SUBJECT_ENTRY=entry.xxxxxxxx`
			 - `REACT_APP_GOOGLE_FORM_MESSAGE_ENTRY=entry.xxxxxxxx`
	 - Notes:
		 - The app submits via `fetch` with `no-cors` (we don’t read the response, but entries are recorded in the form).
		 - Responses can be linked to a Google Sheet from the Google Forms UI.

5. Backend SMTP (requires your backend)
	 - The backend already exposes `POST /api/contact` (FastAPI) to send emails via SMTP.
	 - Configure backend `.env`:
		 - `EMAIL_ENABLED=true`
		 - `SMTP_SERVER`, `SMTP_PORT`, `SMTP_USERNAME`, `SMTP_PASSWORD`
		 - `SMTP_FROM_EMAIL`, `SMTP_FROM_NAME`
		 - `CONTACT_TO` (optional; defaults to `SMTP_FROM_EMAIL`)
	 - On the frontend set:
		 - `REACT_APP_CONTACT_PROVIDER=backend`
		 - `REACT_APP_API_URL=http://127.0.0.1:8000/api`
	 - Deliverability tip: From uses your verified sender; we set `Reply-To` to the user’s email so you can reply directly.

Environment variables reference (see `.env.example`):

```
REACT_APP_CONTACT_PROVIDER=            # webhook | formspree (omit for mailto fallback)
REACT_APP_WEBHOOK_URL=                 # if PROVIDER=webhook
REACT_APP_FORMSPREE_ENDPOINT=          # if PROVIDER=formspree
REACT_APP_CONTACT_FALLBACK_EMAIL=      # used by mailto fallback
REACT_APP_GOOGLE_FORM_ACTION=          # if PROVIDER=google-forms
REACT_APP_GOOGLE_FORM_NAME_ENTRY=      # entry.xxxxxx for Name
REACT_APP_GOOGLE_FORM_EMAIL_ENTRY=     # entry.xxxxxx for Email
REACT_APP_GOOGLE_FORM_PHONE_ENTRY=     # entry.xxxxxx for Phone (optional)
REACT_APP_GOOGLE_FORM_SUBJECT_ENTRY=   # entry.xxxxxx for Subject
REACT_APP_GOOGLE_FORM_MESSAGE_ENTRY=   # entry.xxxxxx for Message
REACT_APP_API_URL=                     # if PROVIDER=backend, e.g. http://127.0.0.1:8000/api

## Run with Docker (recommended)

This repository ships with a docker-compose setup that runs:
- MongoDB
- FastAPI backend (Uvicorn)
- React frontend (built and served via Nginx), with `/api` proxied to the backend

Quick start:

1. Ensure `backend/.env` exists (copy from `.env.example` and fill SMTP creds if you want email sending). Compose will override `MONGO_URL` to point at the bundled `mongo` service.
2. From the project root (`Emergent-marine/`), run:

```powershell
docker compose up --build
```

3. Open the app at http://localhost:3000
	- The frontend is served by Nginx.
	- Calls to `/api/...` are proxied to the backend service.

To stop:

```powershell
docker compose down
```

```

Spam protection:
- A hidden honeypot field is included; for higher protection you can add reCAPTCHA v3 later.

