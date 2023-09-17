// pages/api/verify.ts

import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "~/server/db"

const verifyHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { verificationToken } = req.query
  console.log(verificationToken)
  if (!verificationToken || typeof verificationToken !== "string") {
    return res.status(400).json({ message: "Invalid token" })
  }

  try {
    // Check if the verification token exists in the database
    const dbVerificationToken = await prisma.verificationToken.findFirst({
      where: { token: verificationToken, expires: { gte: new Date() } }, // Check for expiration
    })

    if (!verificationToken) {
      return res.status(404).json({ message: "Verification token not found" })
    }

    // Update the user's email verification status
    await prisma.user.update({
      where: { id: dbVerificationToken?.id },
      data: { emailVerified: new Date() },
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Internal server error" })
  }
}

export default verifyHandler
