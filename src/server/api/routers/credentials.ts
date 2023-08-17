import { z } from "zod"
import { createTRPCRouter, publicProcedure, protectedProcedure } from "~/server/api/trpc"

// Define a validation schema for the input parameter
const emailExistsInput = z.object({
  email: z.string().email(),
})

// Define a validation schema for the output result
//const emailExistsOutput = z.boolean()

export const credentialsRouter = createTRPCRouter({
  getEmailExists: publicProcedure.input(emailExistsInput).query(async ({ input, ctx }) => {
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
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany()
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!"
  }),
})
/*

import { z } from "zod"
import { createTRPCRouter, publicProcedure, protectedProcedure } from "~/server/api/trpc"
// Define a validation schema for the input parameter
const emailExistsInput = z.object({
  email: z.string().email(),
})

// Define a validation schema for the output result
const emailExistsOutput = z.boolean()

export const credentialsRouter = createTRPCRouter({
  getEmailExists: publicProcedure.query(opts => {
    // Validate the input using the input schema
    const validatedInput = emailExistsInput.parse(opts.input)

    return {
      input: validatedInput,
      result: opts.ctx.prisma.user
        .findUnique({
          where: { email: validatedInput.email },
        })
        .then(user => !!user), // Convert to boolean
      output: emailExistsOutput, // Validate the output using zod
    }
  }),
})
*/
