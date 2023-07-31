import React, { useState } from "react"
import { Input, SimpleCheckbox } from "../ui"
import AuthForm from "./AuthForm"

function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  const [rememberMe, setRememberMe] = useState(false)
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value)
  }

  const inputs = [
    <Input
      value={email}
      type="email"
      label="Email"
      labelHidden={true}
      id="email"
      placeholder="Email"
      handleChange={handleEmailChange}
      key="Email"
    />,
    <Input
      type="password"
      id="password"
      placeholder="Password"
      value={password}
      handleChange={handlePasswordChange}
      label="Password"
      labelHidden={true}
      key="Password"
    />,
    <Input
      type="password"
      id="repeatPassword"
      placeholder="Repeat Password"
      value={repeatPassword}
      label="Repeat Password"
      labelHidden={true}
      handleChange={handleRepeatPasswordChange}
      key="Repeat Password"
    />,
    <div className="flex justify-start" key="Remember Me">
      <SimpleCheckbox
        label="Remember Me"
        labelReverse={true}
        checkboxValue={rememberMe}
        setCheckboxValue={setRememberMe}
      />
    </div>,
    <button type="submit" className="p-4 w-full bg-cta rounded-lg text-md" key="submit">
      Register
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

export default SignUpForm
