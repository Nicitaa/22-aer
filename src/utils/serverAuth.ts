import { PrismaClient } from "@prisma/client"
import { hash } from "argon2"

export async function generateRandomHash(): Promise<string> {
  try {
    const randomBytes = await hash(Math.random().toString()) // Hash a random string
    return randomBytes
  } catch (error) {
    throw new Error("Failed to generate random hash")
  }
}

export async function generateAndSaveVerificationToken(ctx: { prisma: PrismaClient }, userId: string): Promise<string> {
  const verificationToken = await generateRandomHash() // Generate a random token

  // Save the verification token with an expiration date
  await ctx.prisma.verificationToken.create({
    data: {
      id: userId,
      token: verificationToken,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours expiration
    },
  })

  return verificationToken
}
export async function generateAndSaveRecoveryToken(ctx: { prisma: PrismaClient }, userId: string): Promise<string> {
  const recoveryToken = await generateRandomHash() // Generate a random token

  // Save the verification token with an expiration date
  await ctx.prisma.recoveryToken.create({
    data: {
      id: userId,
      token: recoveryToken,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours expiration
    },
  })

  return recoveryToken
}
