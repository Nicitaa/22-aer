import Link from "next/link"
import { Input, SimpleCheckbox } from "../ui"
import { useState } from "react"
import AuthForm from "./AuthForm"

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
    <Input
      label="Email"
      labelHidden={true}
      type="email"
      id="email"
      placeholder="Email"
      value={email}
      handleChange={handleEmailChange}
      key="Email"
    />,
    <Input
      labelHidden={true}
      label="Password"
      type={`password`}
      id="password"
      placeholder="Password"
      value={password}
      handleChange={handlePasswordChange}
      key="Password"
    />,
    <div className="flex justify-between items-center" key="Remember Me and Recover">
      <SimpleCheckbox
        label={"Remember Me"}
        checkboxValue={rememberMe}
        setCheckboxValue={setRememberMe}
        labelReverse={true}
      />
      <Link href={"./recover"} className="text-cta text-xs">
        Forgot Password?
      </Link>
    </div>,

    <button type="submit" className="p-4 w-full bg-cta rounded-lg text-md" key="submit">
      Login
    </button>
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
