import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY as string);

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    const message: any = {
      to: params.to,
      from: params.from,
      subject: params.subject,
    };

    if (params.text) {
      message.text = params.text;
    }
    
    if (params.html) {
      message.html = params.html;
    }

    await mailService.send(message);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

// Contact form specific function
export async function sendContactFormEmail(
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<boolean> {
  // Create HTML version of the email
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #E597B2; border-bottom: 2px solid #E597B2; padding-bottom: 10px;">
        New Contact Form Message from The Salty Vibe
      </h2>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        
        <div style="margin-top: 20px;">
          <strong>Message:</strong>
          <div style="background-color: white; padding: 15px; border-left: 4px solid #E597B2; margin-top: 10px; white-space: pre-wrap;">${message}</div>
        </div>
      </div>
      
      <p style="font-size: 12px; color: #666; border-top: 1px solid #ddd; padding-top: 10px; margin-top: 30px;">
        This message was sent via the contact form on The Salty Vibe website.
      </p>
    </div>
  `;

  // Create plain text version
  const textContent = `
New Contact Form Message from The Salty Vibe

From: ${name} (${email})
Subject: ${subject}

Message:
${message}

---
This message was sent via the contact form on The Salty Vibe website.
  `;

  return sendEmail({
    to: 'hello@thesaltyvibe.com',
    from: 'hello@thesaltyvibe.com', // Must be your verified sender
    subject: `Contact Form: ${subject}`,
    text: textContent,
    html: htmlContent,
  });
}