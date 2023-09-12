import { z } from "zod"

export const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})
export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})
export const recoverAccountSchema = z.object({
  email: z.string().email(),
})
function validateEmail(email: string): string[] {
  const errors: string[] = []
  // Check if the email is empty
  if (!email) {
    errors.push("Email address is required.")
  }

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
  if (!emailRegex.test(email)) {
    errors.push("Invalid email address format.")
  }
  return errors
}
function validatePassword(password: string): string[] {
  const errors: string[] = []

  // Check if the password is empty
  if (!password) {
    errors.push("Password is required.")
  }

  // Check password length
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long.")
  }

  // Check for an uppercase, lower case, and a number/digit.

  const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/
  if (!passwordRegex.test(password)) {
    errors.push("Password requires a number, lowercase letter, uppercase letter, and must be atleast 8 characters long")
  }
  return errors
}
function validateRepeatPassword(password: string, repeatPassword: string): string[] {
  const errors: string[] = []
  // Check if the password and repeatPassword are empty
  if (!password || !repeatPassword) {
    errors.push("Both password and repeat password are required.")
  }
  // Check if the passwords match
  if (password !== repeatPassword) {
    errors.push("Passwords do not match.")
  }
  return errors
}
export { validateEmail, validatePassword, validateRepeatPassword }
