import type { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

// Expect these env vars to be set in Vercel or locally (.env)
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || process.env.RECIPIENT_EMAIL;
const SENDER_EMAIL = process.env.SENDGRID_SENDER || process.env.FROM_EMAIL || process.env.SENDER_EMAIL;

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  if (!SENDGRID_API_KEY) {
    return res.status(500).send('SendGrid API key not configured');
  }
  if (!RECIPIENT_EMAIL) {
    return res.status(500).send('Recipient email not configured');
  }
  if (!SENDER_EMAIL) {
    return res.status(500).send('Sender email not configured');
  }

  try {
    const { name, company, email, topic, message } = req.body || {};

    if (!name || !company || !email || !topic || !message) {
      return res.status(400).send('Missing required fields');
    }

    const subject = `New contact form: ${topic} — ${company}`;
    const text = `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`;

    const msg = {
      to: RECIPIENT_EMAIL,
      from: SENDER_EMAIL,
      subject,
      text,
      html: `<pre style="white-space:pre-wrap">${text}</pre>`,
    };

    await sgMail.send(msg as any);

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('send-email error', err?.message || err);
    return res.status(500).send('Failed to send message');
  }
}
