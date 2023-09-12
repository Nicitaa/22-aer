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
function validateEmail(email: string): string {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  if (!email) {
    return "Email is required"
  } else if (!emailRegex.test(email)) {
    return "Please enter a valid email address"
  }
  return ""
}
function validatePassword(password: string): string {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  if (!password) {
    return "Password is required"
  } else if (!passwordRegex.test(password)) {
    return "Password requires a number, lowercase letter, uppercase letter, and must be atleast 8 characters long"
  }
  return ""
}
function validateRepeatPassword(password: string, repeatPassword: string): string {
  if (!repeatPassword) {
    return "Repeat password is required"
  }
  else if (password !== repeatPassword) {
    return "The password and repeat password must be the same"
  }
  return ""
}
export {
  validateEmail,
  validatePassword,
  validateRepeatPassword,
}
