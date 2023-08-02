import Link from "next/link"
import { useState } from "react"
import AuthForm from "./AuthForm"
import { CheckboxInput, EmailInput, PasswordInput } from "../ui/inputs"

function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const inputs = [
    <EmailInput
      label="Email"
      labelHidden={true}
      id="email"
      placeholder="Email"
      value={email}
      handleChange={handleEmailChange}
      key="Email"
    />,
    <PasswordInput
      labelHidden={true}
      label="Password"
      id="password"
      placeholder="Password"
      value={password}
      handleChange={handlePasswordChange}
      key="Password"
    />,
    <div className="flex justify-between items-center" key="Remember Me and Recover">
      <CheckboxInput label={"Remember Me"} isChecked={rememberMe} setIsChecked={setRememberMe} labelReverse={true} />
      <Link href={"./recover"} className="text-cta text-xs">
        Forgot Password?
      </Link>
    </div>,

    <button type="submit" className="p-4 w-full bg-cta rounded-lg text-md" key="submit">
      Login
    </button>,
  ]
  return (
    <AuthForm
      inputs={inputs}
      onSubmit={() => {
        return null
      }}
    />
  )
}

export default SignInForm
