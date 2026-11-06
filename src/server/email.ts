import nodemailer from "nodemailer";
import type { QuoteValues } from "@/lib/quote-schema";

export type EmailSendResult = {
  success: boolean;
  configured: boolean;
  messageId?: string;
  error?: string;
};

/**
 * Reads server-side SMTP configuration from process.env.
 * These secrets are NEVER exposed to client code.
 */
function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || (user ? `"Siirtamo Siivouspalvelut" <${user}>` : undefined);
  const to = process.env.NOTIFICATION_EMAIL || "info@siirtamo.fi";

  const isConfigured = Boolean(host && user && pass);

  return {
    host,
    port,
    secure,
    user,
    pass,
    from,
    to,
    isConfigured,
  };
}

/**
 * Creates a nodemailer transporter if SMTP credentials are provided.
 */
function createTransporter() {
  const config = getSmtpConfig();
  if (!config.isConfigured) return null;

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    // Useful for cPanel servers with self-signed or Let's Encrypt certificates
    tls: {
      rejectUnauthorized: process.env.SMTP_ALLOW_INVALID_CERTS !== "true",
    },
  });
}

/**
 * Formats a clean HTML notification email for the business owner.
 */
function formatNotificationHtml(data: QuoteValues, serviceTitle: string, submissionId?: string) {
  const now = new Date().toLocaleString("fi-FI", { timeZone: "Europe/Helsinki" });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Uusi tarjouspyyntö</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f6f2; color: #202b28; margin: 0; padding: 24px; line-height: 1.6; }
    .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e4de; box-shadow: 0 4px 12px rgba(0,0,0,0.04); }
    .header { background: #235d46; color: #ffffff; padding: 28px 32px; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 700; }
    .header p { margin: 6px 0 0; font-size: 14px; opacity: 0.9; }
    .body { padding: 32px; }
    .badge { display: inline-block; background: #eaf3ee; color: #235d46; font-size: 13px; font-weight: 700; padding: 4px 10px; border-radius: 20px; margin-bottom: 20px; }
    .table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    .table td { padding: 12px 14px; border-bottom: 1px solid #f0eee8; font-size: 14px; }
    .table td.label { width: 35%; font-weight: 600; color: #586360; background: #faf9f6; }
    .table td.value { width: 65%; color: #1c2624; font-weight: 500; }
    .details-box { margin-top: 24px; padding: 16px; background: #faf9f6; border-radius: 8px; border-left: 4px solid #235d46; font-size: 14px; }
    .footer { padding: 20px 32px; background: #faf9f6; border-top: 1px solid #f0eee8; font-size: 12px; color: #788380; text-align: center; }
    a { color: #235d46; text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Uusi tarjouspyyntö verkkosivuilta</h1>
      <p>Siirtamo Siivouspalvelut &bull; Vastaanotettu: ${now}</p>
    </div>
    <div class="body">
      <div class="badge">Palvelu: ${serviceTitle}</div>
      <table class="table">
        <tr>
          <td class="label">Asiakkaan nimi:</td>
          <td class="value"><strong>${data.name}</strong></td>
        </tr>
        <tr>
          <td class="label">Sähköposti:</td>
          <td class="value"><a href="mailto:${data.email}">${data.email}</a></td>
        </tr>
        <tr>
          <td class="label">Puhelinnumero:</td>
          <td class="value">${data.phone ? `<a href="tel:${data.phone}">${data.phone}</a>` : "Ei ilmoitettu"}</td>
        </tr>
        <tr>
          <td class="label">Kohteen sijainti:</td>
          <td class="value">${data.location}</td>
        </tr>
        <tr>
          <td class="label">Kohteen tyyppi:</td>
          <td class="value">${data.propertyType || "Ei määritelty"}</td>
        </tr>
        <tr>
          <td class="label">Siivouksen ajankohta:</td>
          <td class="value">${data.preferredDate || "Ei toivetta"}</td>
        </tr>
        <tr>
          <td class="label">Toistuvuus:</td>
          <td class="value">${data.frequency || "Ei toivetta"}</td>
        </tr>
        ${submissionId ? `<tr><td class="label">Tietokantatunnus (ID):</td><td class="value" style="font-family: monospace; font-size: 12px;">${submissionId}</td></tr>` : ""}
      </table>

      ${
        data.details
          ? `
      <div class="details-box">
        <strong>Asiakkaan lisätiedot ja toiveet:</strong><br />
        <p style="margin: 8px 0 0; white-space: pre-wrap;">${data.details}</p>
      </div>`
          : ""
      }
    </div>
    <div class="footer">
      Tämä viesti lähetettiin automaattisesti verkkosivujen tarjouspyyntölomakkeelta osoitteeseen info@siirtamo.fi.<br />
      Voit vastata suoraan tähän sähköpostiin ottaaksesi yhteyttä asiakkaaseen.
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Formats a plaintext fallback notification email.
 */
function formatNotificationText(data: QuoteValues, serviceTitle: string, submissionId?: string) {
  return `
UUSI TARJOUSPYYNTÖ - SIIRTAMO SIIVOUSPALVELUT
===============================================

Palvelu: ${serviceTitle}
Asiakkaan nimi: ${data.name}
Sähköposti: ${data.email}
Puhelin: ${data.phone || "Ei ilmoitettu"}
Sijainti: ${data.location}
Kohteen tyyppi: ${data.propertyType || "Ei määritelty"}
Toivottu ajankohta: ${data.preferredDate || "Ei toivetta"}
Toistuvuus: ${data.frequency || "Ei toivetta"}
${submissionId ? `Tietokanta ID: ${submissionId}\n` : ""}
Lisätiedot:
${data.details || "Ei lisätietoja"}

===============================================
Voit vastata tähän sähköpostiin vastataksesi asiakkaalle (${data.email}).
  `.trim();
}

/**
 * Sends a notification email to info@siirtamo.fi using server-side SMTP.
 * Returns detailed status so caller can handle errors gracefully.
 */
export async function sendQuoteNotification(
  data: QuoteValues,
  serviceTitle: string,
  submissionId?: string
): Promise<EmailSendResult> {
  const config = getSmtpConfig();

  if (!config.isConfigured) {
    console.warn(
      `[Email Service] SMTP is not yet configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in server environment variables to enable delivery to ${config.to}.`
    );
    return {
      success: false,
      configured: false,
      error: "SMTP-palvelinta ei ole vielä konfiguroitu ympäristömuuttujiin.",
    };
  }

  try {
    const transporter = createTransporter();
    if (!transporter) {
      return {
        success: false,
        configured: false,
        error: "Sähköpostipalvelinta ei voitu alustaa.",
      };
    }

    const info = await transporter.sendMail({
      from: config.from,
      to: config.to,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `Uusi tarjouspyyntö: ${serviceTitle} - ${data.name}`,
      text: formatNotificationText(data, serviceTitle, submissionId),
      html: formatNotificationHtml(data, serviceTitle, submissionId),
    });

    console.log(`[Email Service] Notification sent successfully! MessageId: ${info.messageId}`);
    return {
      success: true,
      configured: true,
      messageId: info.messageId,
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error(`[Email Service] Failed to send email to ${config.to}:`, errorMsg);
    return {
      success: false,
      configured: true,
      error: errorMsg,
    };
  }
}
