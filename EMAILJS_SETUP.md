# EmailJS Setup Guide

Follow these steps to configure EmailJS for your portfolio contact form:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email
5. Copy the **Service ID** (something like `service_nl5r6zo`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

**Template Name:** portfolio_contact

**Subject:** � New Portfolio Contact from {{from_name}}

**Content:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>New Message</title>
  </head>
  <body
    style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; color: #1f2937;"
  >
    <table
      role="presentation"
      width="100%"
      cellspacing="0"
      cellpadding="0"
      border="0"
    >
      <tr>
        <td align="center" style="padding: 40px 20px;">
          <!-- Card Container -->
          <table
            role="presentation"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            border="0"
            style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; border-top: 4px solid #8b5cf6;"
          >
            <tr>
              <td style="padding: 32px;">
                <!-- Header -->
                <h1
                  style="margin: 0 0 24px 0; font-size: 20px; font-weight: 700; color: #111827;"
                >
                  New Portfolio Message
                </h1>

                <!-- Sender Info Row -->
                <div style="margin-bottom: 24px;">
                  <p
                    style="margin: 0; font-size: 14px; color: #6b7280; font-weight: 500;"
                  >
                    From
                  </p>
                  <p
                    style="margin: 4px 0 0 0; font-size: 16px; font-weight: 600; color: #1f2937;"
                  >
                    {{from_name}}
                    <span
                      style="color: #9ca3af; font-weight: 400; font-size: 14px; margin-left: 8px;"
                      >&lt;{{from_email}}&gt;</span
                    >
                  </p>
                </div>

                <!-- Message Content -->
                <div
                  style="background-color: #f9fafb; border-radius: 8px; padding: 20px; margin-bottom: 32px; border: 1px solid #f3f4f6;"
                >
                  <p
                    style="margin: 0; font-size: 15px; line-height: 1.6; color: #374151; white-space: pre-wrap;"
                  >
                    {{message}}
                  </p>
                </div>

                <!-- Action Button -->
                <table
                  role="presentation"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                >
                  <tr>
                    <td>
                      <a
                        href="mailto:{{from_email}}"
                        style="display: inline-block; background-color: #1f2937; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; padding: 12px 24px; border-radius: 6px; transition: background-color 0.2s;"
                      >
                        Reply via Email
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Footer -->
          <p
            style="text-align: center; margin-top: 24px; font-size: 12px; color: #9ca3af;"
          >
            © 2026 Catalino Gabriel Villahermosa
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
```

4. Save the template and copy the **Template ID** (something like `template_48kcawr`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (something like a long string)
3. Copy this key
   Vv4kPQZXiRlf2f22D

## Step 5: Update Your Code

Open `src/sections/Contact.tsx` and replace these placeholders:

```typescript
await emailjs.send(
  "YOUR_SERVICE_ID", // Replace with your Service ID
  "YOUR_TEMPLATE_ID", // Replace with your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_name: "Catalino Gabriel Villahermosa",
  },
  "YOUR_PUBLIC_KEY", // Replace with your Public Key
);
```

## Step 6: Test

1. Save your changes
2. Run your portfolio locally
3. Fill out the contact form and submit
4. Check your email - you should receive the message!

## Important Notes

- ✅ Works on hosted sites (Vercel, Netlify, etc.)
- ✅ Free tier: 200 emails/month
- ✅ No backend needed
- ⚠️ Keep your Public Key in the code (it's meant to be public)
- ⚠️ Never share your Private Key

## Troubleshooting

If emails aren't sending:

1. Check browser console for errors
2. Verify all IDs are correct
3. Make sure your email service is connected
4. Check EmailJS dashboard for usage/errors
