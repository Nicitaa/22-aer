// utils/email.ts (or any appropriate file)

import sgMail from "@sendgrid/mail"
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

interface SendVerificationEmailParams {
  email: string
  verificationLink: string
}

export async function sendVerificationEmail({ email, verificationLink }: SendVerificationEmailParams) {
  const msg = {
    to: email,
    from: "arifmassih6@gmail.com", // Change this to your sender email
    subject: "Verify Your Email",
    html: `<p>Click the following link to verify your email:</p>
           <a href="${verificationLink}">${verificationLink}</a>`,
  }

  try {
    await sgMail.send(msg).then(response => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
    })
    console.log("Verification email sent")
  } catch (error) {
    console.error("Error sending verification email:", error)
  }
}
