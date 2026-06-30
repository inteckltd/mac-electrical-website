import { NextRequest, NextResponse } from "next/server";
import * as postmark from "postmark";

export async function POST(request: NextRequest) {
  const token = process.env.POSTMARK_SERVER_API_TOKEN;
  const toEmail = process.env.POSTMARK_TO_EMAIL;
  const fromEmail = process.env.POSTMARK_FROM_EMAIL;

  if (!token || !toEmail || !fromEmail) {
    console.error("Postmark environment variables are not configured.");
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, email, phone, service, message } = body;

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { error: "Required fields are missing." },
      { status: 400 }
    );
  }

  const client = new postmark.ServerClient(token);

  const textBody = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    service ? `Service: ${service}` : null,
    ``,
    `Message:`,
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const htmlBody = `
    <table style="font-family:sans-serif;font-size:15px;color:#333;border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:8px 0"><strong>Name:</strong> ${firstName} ${lastName}</td></tr>
      <tr><td style="padding:8px 0"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></td></tr>
      ${phone ? `<tr><td style="padding:8px 0"><strong>Phone:</strong> ${phone}</td></tr>` : ""}
      ${service ? `<tr><td style="padding:8px 0"><strong>Service:</strong> ${service}</td></tr>` : ""}
      <tr><td style="padding:16px 0 8px"><strong>Message:</strong></td></tr>
      <tr><td style="padding:0 0 8px;white-space:pre-wrap">${message}</td></tr>
    </table>
  `;

  try {
    await client.sendEmail({
      From: fromEmail,
      To: toEmail,
      Subject: `New Enquiry from ${firstName} ${lastName}${service ? ` — ${service}` : ""}`,
      TextBody: textBody,
      HtmlBody: htmlBody,
      ReplyTo: email,
      MessageStream: "outbound",
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Postmark send error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
