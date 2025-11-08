// Provider-agnostic contact form sender
// Supports three modes without needing your own backend:
// - webhook: POSTs JSON to a webhook URL (e.g., Zapier/Make custom webhook)
// - formspree: POSTs to a Formspree endpoint
// - mailto (fallback): Opens user's email client with prefilled subject/body

const PROVIDER = process.env.REACT_APP_CONTACT_PROVIDER; // 'webhook' | 'formspree' | 'google-forms' | 'backend'
const API_URL = process.env.REACT_APP_API_URL; // when using backend provider, e.g. http://127.0.0.1:8000/api
const WEBHOOK_URL = process.env.REACT_APP_WEBHOOK_URL;
const FORMSPREE_ENDPOINT = process.env.REACT_APP_FORMSPREE_ENDPOINT; // e.g. https://formspree.io/f/xxxxxxx
// Google Forms
const GOOGLE_FORM_ACTION = process.env.REACT_APP_GOOGLE_FORM_ACTION; // e.g. https://docs.google.com/forms/d/e/<id>/formResponse
const GOOGLE_FORM_NAME_ENTRY = process.env.REACT_APP_GOOGLE_FORM_NAME_ENTRY; // e.g. entry.123456789
const GOOGLE_FORM_EMAIL_ENTRY = process.env.REACT_APP_GOOGLE_FORM_EMAIL_ENTRY;
const GOOGLE_FORM_PHONE_ENTRY = process.env.REACT_APP_GOOGLE_FORM_PHONE_ENTRY;
const GOOGLE_FORM_SUBJECT_ENTRY = process.env.REACT_APP_GOOGLE_FORM_SUBJECT_ENTRY;
const GOOGLE_FORM_MESSAGE_ENTRY = process.env.REACT_APP_GOOGLE_FORM_MESSAGE_ENTRY;

/**
 * Minimal validation for required fields
 */
function validate(details) {
  const errors = [];
  if (!details.name?.trim()) errors.push('Full name is required');
  if (!details.email?.includes('@')) errors.push('Valid email is required');
  if (!details.subject?.trim()) errors.push('Subject is required');
  if (!details.message?.trim()) errors.push('Message is required');
  return errors;
}

function buildMailto(details) {
  const to = process.env.REACT_APP_CONTACT_FALLBACK_EMAIL || 'skymarineservicestuty@gmail.com';
  const subject = encodeURIComponent(`[Contact] ${details.subject || 'New Inquiry'}`);
  const body = encodeURIComponent(
    `Name: ${details.name || ''}\n` +
    `Email: ${details.email || ''}\n` +
    `Phone: ${details.phone || ''}\n` +
    `\nMessage:\n${details.message || ''}`
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

async function sendViaWebhook(details) {
  if (!WEBHOOK_URL) throw new Error('Missing REACT_APP_WEBHOOK_URL');
  const res = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'contact_message',
      timestamp: new Date().toISOString(),
      payload: details,
    }),
  });
  if (!res.ok) {
    throw new Error(`Webhook error: ${res.status}`);
  }
}

async function sendViaFormspree(details) {
  if (!FORMSPREE_ENDPOINT) throw new Error('Missing REACT_APP_FORMSPREE_ENDPOINT');
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(details),
  });
  if (!res.ok) {
    // Attempt to parse error for better message
    let msg = `Formspree error: ${res.status}`;
    try {
      const data = await res.json();
      if (data?.errors?.length) msg = data.errors.map(e => e.message).join(', ');
    } catch {}
    throw new Error(msg);
  }
}

async function sendViaBackend(details) {
  if (!API_URL) throw new Error('Missing REACT_APP_API_URL');
  
  const url = `${API_URL.replace(/\/$/, '')}/contact`;
  console.log('[Contact] Sending to backend:', url);
  console.log('[Contact] Payload:', details);
  
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(details),
  });
  
  console.log('[Contact] Response status:', res.status);
  
  if (!res.ok) {
    let msg = `Backend error: ${res.status}`;
    try {
      const data = await res.json();
      console.error('[Contact] Error response:', data);
      if (data?.detail) msg = data.detail;
    } catch {}
    throw new Error(msg);
  }
  
  console.log('[Contact] Email sent successfully');
}

async function sendViaGoogleForms(details) {
  if (!GOOGLE_FORM_ACTION) throw new Error('Missing REACT_APP_GOOGLE_FORM_ACTION');
  const requiredMap = [
    ['name', GOOGLE_FORM_NAME_ENTRY],
    ['email', GOOGLE_FORM_EMAIL_ENTRY],
    ['subject', GOOGLE_FORM_SUBJECT_ENTRY],
    ['message', GOOGLE_FORM_MESSAGE_ENTRY],
  ];
  const missing = requiredMap.filter(([, key]) => !key).map(([field]) => field);
  if (missing.length) {
    throw new Error(`Google Forms mapping missing for: ${missing.join(', ')}`);
  }

  const fd = new FormData();
  // Map our fields to Google Form entry keys
  fd.append(GOOGLE_FORM_NAME_ENTRY, details.name || '');
  fd.append(GOOGLE_FORM_EMAIL_ENTRY, details.email || '');
  if (GOOGLE_FORM_PHONE_ENTRY && details.phone) fd.append(GOOGLE_FORM_PHONE_ENTRY, details.phone);
  fd.append(GOOGLE_FORM_SUBJECT_ENTRY, details.subject || '');
  fd.append(GOOGLE_FORM_MESSAGE_ENTRY, details.message || '');

  // Submit with no-cors; we can't read the response but submission will be recorded
  await fetch(GOOGLE_FORM_ACTION, { method: 'POST', mode: 'no-cors', body: fd });
}

/**
 * Send contact message using configured provider.
 * @param {{name:string,email:string,phone?:string,subject:string,message:string}} details
 */
export async function sendContactMessage(details) {
  const errors = validate(details);
  if (errors.length) {
    const err = new Error(errors[0]);
    err.causes = errors;
    throw err;
  }

  console.log('[Contact] Provider:', PROVIDER);
  console.log('[Contact] API_URL:', API_URL);

  // Route to configured provider
  if (PROVIDER === 'webhook') {
    return sendViaWebhook(details);
  }
  if (PROVIDER === 'formspree') {
    return sendViaFormspree(details);
  }
  if (PROVIDER === 'google-forms') {
    return sendViaGoogleForms(details);
  }
  if (PROVIDER === 'backend') {
    return sendViaBackend(details);
  }

  // No fallback - throw error if provider not configured
  throw new Error(`Contact provider "${PROVIDER}" not configured. Please set REACT_APP_CONTACT_PROVIDER environment variable.`);
}

export default { sendContactMessage };
