import React, { useEffect, useState } from "react"
import { Checkbox, Input } from "../../ui"
import { AuthForm } from "."
import useEmailSignUpErrors from "~/hooks/useEmailSignUpErrors"

function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [errors, setErrors] = useState({ email: "", password: "", repeatPassword: "" })
  const [rememberMe, setRememberMe] = useState(false)

  //trigger real time validation
  const [useValidation, setUseValidation] = useState(false)
  //checkForEmail triggers the query to run in the below hook.
  const [checkForEmail, setCheckForEmail] = useState(false)
  //the useEmailSignUpErrors hook retrieves email errors on form submission.
  const { error: emailError } = useEmailSignUpErrors({ email, checkForEmail, setCheckForEmail })
  useEffect(() => {
    setErrors(prevErrors => {
      return { ...prevErrors, email: emailError }
    })
  }, [emailError])
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value)
  }

  const handleSubmit = () => {
    setCheckForEmail(true)
    setUseValidation(true)
  }
  const inputs = [
    <Input
      value={email}
      type="email"
      label="Email"
      labelHidden={true}
      id="email"
      placeholder="Email"
      onChange={handleEmailChange}
      key="Email"
    />,
    <Input
      id="password"
      type="password"
      placeholder="Password"
      value={password}
      onChange={handlePasswordChange}
      label="Password"
      labelHidden={true}
      key="Password"
    />,
    <Input
      id="repeatPassword"
      type="password"
      placeholder="Repeat Password"
      value={repeatPassword}
      label="Repeat Password"
      labelHidden={true}
      onChange={handleRepeatPasswordChange}
      key="Repeat Password"
    />,
    <div className="flex justify-start" key="Remember Me">
      <Checkbox
        label="Remember Me"
        isChecked={rememberMe}
        onChange={() => {
          setRememberMe(prevValue => !prevValue)
        }}
      />
    </div>,
    <button type="submit" className="p-4 w-full bg-cta rounded-lg text-md" key="submit">
      Register
    </button>,
  ]
  return <AuthForm inputs={inputs} onSubmit={handleSubmit} />
}

export default SignUpForm
