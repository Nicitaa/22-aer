// utils/email.ts (or any appropriate file)

import sgMail from "@sendgrid/mail"
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

interface SendVerificationEmailParams {
  email: string
  verificationLink: string
}
interface SendRecoveryEmailParams {
  email: string
  recoveryLink: string
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
export function sendRecoveryEmail({ email, recoveryLink }: SendRecoveryEmailParams) {
  const msg = {
    to: email,
    from: "arifmassih6@gmail.com", // Change this to your sender email
    subject: "Recover Your Account",
    html: `<p>Click the following link to recover your account:</p>
           <a href="${recoveryLink}">${recoveryLink}</a>`,
  }

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent")
    })
    .catch(error => {
      console.error(error)
    })
}
