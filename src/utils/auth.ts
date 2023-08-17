//returns true if email valid, false otherwise
function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  return emailRegex.test(email)
}
function validateEmailMessage(email: string): string {
  if (!validateEmail(email)) {
    return "Please enter a valid email address"
  }
  return ""
}
function validatePassword(password: string): boolean {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  return passwordRegex.test(password)
}
function validatePasswordMessage(password: string): string {
  if (password.length === 0) {
    return "Password is required"
  } else if (!validatePassword(password)) {
    return "Password requires a number, lowercase letter, uppercase letter, and must be atleast 8 characters long"
  }
  return ""
}
function validateRepeatPasswordMessage(password: string, repeatPassword: string): string {
  if (repeatPassword.length === 0) {
    return "Repeat password is required"
  }
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  if (!passwordRegex.test(repeatPassword)) {
    return "Repeat password requires a number, lowercase letter, uppercase letter, and must be atleast 8 characters long"
  } else if (password !== repeatPassword) {
    return "The password and repeat password must be the same"
  }
  return ""
}
export { validateEmail, validateEmailMessage, validatePassword, validatePasswordMessage, validateRepeatPasswordMessage }
