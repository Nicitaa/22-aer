import Link from "next/link"
import React, { useState } from "react"
import { FaEye } from "react-icons/fa"
import { Input, SimpleCheckbox } from "../ui"
import { Button } from "../ui/Button"
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa"
import AuthForm from "./AuthForm"

function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)

  const [rememberMe, setRememberMe] = useState(false)
  const inputs = [
    <Input type="email" label="Email" labelHidden={true} id="email" placeholder="Email" />,
    <Input
      type={`${showPassword ? "text" : "password"}`}
      id="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      label="Password"
      labelHidden={true}
    />,
    <Input
      type={`${showRepeatPassword ? "text" : "password"}`}
      id="repeatPassword"
      placeholder="Repeat Password"
      value={repeatPassword}
      onChange={(e) => setRepeatPassword(e.target.value)}
      label="Repeat Password"
      labelHidden={true}
    />,
    <div className="flex justify-start">
      <SimpleCheckbox
        label="Remember Me"
        labelReverse={true}
        checkboxValue={rememberMe}
        setCheckboxValue={setRememberMe}
      />
    </div>,
    <button type="submit" className="p-4 w-full bg-cta rounded-lg text-md">
      Register
    </button>
  ]
  return <AuthForm inputs={inputs} onSubmit={() => {}} />
}

export default SignUpForm
