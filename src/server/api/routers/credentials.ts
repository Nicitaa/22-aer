import { TRPCError } from "@trpc/server"
import { hash } from "argon2"
import { createTRPCRouter, publicProcedure, protectedProcedure } from "~/server/api/trpc"
import { recoverAccountSchema, signUpSchema, validateEmail, validatePassword } from "~/utils/auth"
import { sendRecoveryEmail, sendVerificationEmail } from "~/utils/email"
import { generateAndSaveRecoveryToken, generateAndSaveVerificationToken } from "~/utils/serverAuth"

// Define a validation schema for the output result
//const emailExistsOutput = z.boolean()

export const credentialsRouter = createTRPCRouter({
  /*   getEmailExists: publicProcedure.input(emailExistsInput).query(async ({ input, ctx }) => {
    input = { ...input, email: input.email.toLowerCase() }

    // Validate the input using the input schema
    const validatedInput = emailExistsInput.parse(input)

    // Check if email already exists in the database
    const existingUser = await ctx.prisma.user.findUnique({
      where: { email: validatedInput.email },
    })

    // Return a boolean indicating whether the email exists
    return !!existingUser
  }),
 */ createUser: publicProcedure.input(signUpSchema).mutation(async ({ input, ctx }) => {
    const { email, password } = input
    //check if email exists in db
    const exists = await ctx.prisma.user.findUnique({
      where: { email },
    })

    if (exists) {
      throw new TRPCError({
        code: "CONFLICT",
        message: "User already exists.",
      })
    }
    const hashedPassword = await hash(password)
    const result = await ctx.prisma.user.create({
      data: { email, password: hashedPassword },
    })
    //if result is good, do the email verification stuff
    // Generate and save a unique verification token
    const verificationToken = await generateAndSaveVerificationToken(ctx, result.id)
    // Construct the verification link
    const verificationLink = `${
      process.env.NEXTAUTH_URL as string
    }/api/auth/verify?verificationToken=${encodeURIComponent(verificationToken)}`
    // Send verification email
    await sendVerificationEmail({ email, verificationLink })

    return { status: 201, message: "Account created successfully", result: result.email }
  }),
  authorizeUserLogin: publicProcedure.input(signUpSchema).mutation(async ({ input, ctx }) => {
    input = { ...input, email: input.email.toLowerCase() }
    const washedInput = signUpSchema.parse(input)
    if (!validateEmail(washedInput.email) || !validatePassword(washedInput.password)) {
      return "Error, the field information is not valid."
    }
    //check if email exists in db
    const existingUser = await ctx.prisma.user.findUnique({
      where: { email: washedInput.email },
    })
    if (!existingUser) {
      return "Incorrect credentials"
    }
    if (existingUser.password === washedInput.password) {
      return "User Authorized"
    } else {
      return "Incorrect credentials."
    }
  }),
  recoverPassword: publicProcedure.input(recoverAccountSchema).mutation(async ({ input, ctx }) => {
    const washedInput = recoverAccountSchema.parse(input)
    if (!validateEmail(washedInput.email)) {
      return "Error, the email information is not valid."
    }
    // Generate a new recovery token and associate it with the user
    const user = await ctx.prisma.user.findUnique({
      where: { email: washedInput.email },
    })
    if (!user) {
      return "User not found."
    }
    if (!user.emailVerified) {
      return "Email not verified."
    }

    const recoveryToken = await generateAndSaveRecoveryToken(ctx, user.id)
    const recoveryLink = `${process.env.NEXTAUTH_URL as string}/auth/change-password?recoveryToken=${encodeURIComponent(
      recoveryToken
    )}`

    sendRecoveryEmail({ email: washedInput.email, recoveryLink })
    return { status: 201, message: "Token created successfully", result: recoveryToken }
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany()
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!"
  }),
})

