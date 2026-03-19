import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, company, phone, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required.",
      });
    }

    const safeName = String(name).trim();
    const safeEmail = String(email).trim();
    const safeCompany = String(company || "").trim();
    const safePhone = String(phone || "").trim();
    const safeMessage = String(message).trim();

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({
        error: "Missing RESEND_API_KEY environment variable.",
      });
    }

    if (!toEmail || !fromEmail) {
      return res.status(500).json({
        error: "Missing CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL environment variable.",
      });
    }

    const subject = `New Spencer Softwares inquiry from ${safeName}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin-bottom: 16px;">New Contact Form Submission</h2>

        <table style="border-collapse: collapse; width: 100%; max-width: 700px;">
          <tr>
            <td style="padding: 8px; font-weight: 700; width: 160px;">Full Name</td>
            <td style="padding: 8px;">${escapeHtml(safeName)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: 700;">Email</td>
            <td style="padding: 8px;">${escapeHtml(safeEmail)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: 700;">Company</td>
            <td style="padding: 8px;">${escapeHtml(safeCompany || "Not provided")}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: 700;">Phone</td>
            <td style="padding: 8px;">${escapeHtml(safePhone || "Not provided")}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: 700; vertical-align: top;">Message</td>
            <td style="padding: 8px; white-space: pre-wrap;">${escapeHtml(safeMessage)}</td>
          </tr>
        </table>
      </div>
    `;

    const text = `
New Contact Form Submission

Full Name: ${safeName}
Email: ${safeEmail}
Company: ${safeCompany || "Not provided"}
Phone: ${safePhone || "Not provided"}

Message:
${safeMessage}
    `.trim();

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      reply_to: safeEmail,
      subject,
      html,
      text,
    });

    if (error) {
      return res.status(500).json({
        error: "Email could not be sent.",
        details: error,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (err) {
    return res.status(500).json({
      error: "Unexpected server error.",
      details: err?.message || "Unknown error",
    });
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}