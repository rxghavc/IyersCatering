import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, message } = req.body;
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email HTML content (updated: no gradient, no background, centered text, logo added)
  const html = `
    <div style="font-family: 'Segoe UI', 'Arial', sans-serif; padding: 32px 0;">
      <div style="max-width: 480px; margin: 0 auto; background: #fff; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); border: 1px solid #f3e2b7;">
        <div style="padding: 24px 0 12px 0; border-radius: 16px 16px 0 0; text-align: center;">
          <img src='cid:iyerslogo' alt='Iyers Catering Logo' style='height: 56px; margin-bottom: 10px; display: block; margin-left: auto; margin-right: auto;' />
          <h2 style="margin: 0; color: #b48800; letter-spacing: 1px; font-size: 1.6rem; text-align: center;">Iyers Catering – New Contact Form Submission</h2>
        </div>
        <div style="padding: 24px 32px 16px 32px; text-align: center;">
          <p style="margin: 0 0 12px 0;"><span style="color: #b48800; font-weight: 600;">Name:</span> <span style="color: #222;">${firstName} ${lastName}</span></p>
          <p style="margin: 0 0 12px 0;"><span style="color: #b48800; font-weight: 600;">Email:</span> <span style="color: #222;">${email}</span></p>
          <hr style="border: none; border-top: 1px solid #f3e2b7; margin: 18px 0;">
          <p style="margin: 0 0 8px 0; color: #b48800; font-weight: 600;">Message:</p>
          <div style="background: #fffbe9; color: #333; padding: 18px; border-radius: 8px; border: 1px solid #f3e2b7; font-size: 1.05rem; line-height: 1.6; min-height: 48px; display: inline-block; text-align: left;">${message.replace(/\n/g, '<br>')}</div>
        </div>
        <div style="background: #fffbe9; border-radius: 0 0 16px 16px; padding: 10px 0; text-align: center; color: #b48800; font-size: 0.95rem; letter-spacing: 0.5px; border-top: 1px solid #f3e2b7;">
          <span>Thank you for reaching out to Iyers Catering!</span>
        </div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'Iyers Catering Contact Form Submission',
      html,
      replyTo: email,
      attachments: [
        {
          filename: 'iyerslogo.jpg',
          path: './src/assets/images/iyerslogo.jpg',
          cid: 'iyerslogo',
        },
      ],
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
