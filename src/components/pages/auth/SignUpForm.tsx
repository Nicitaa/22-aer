import React, { useState } from "react"
import { Checkbox, Input } from "../../ui"
import { AuthForm } from "."
import useEmailExistsQuery from "~/hooks/useEmailExistsQuery"
import { validatePasswordMessage, validateRepeatPasswordMessage } from "~/utils/auth"
import { useFormValidation } from "~/hooks/useFormValidation"

function SignUpForm() {
  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  const [rememberMe, setRememberMe] = useState(false)

  //checkForEmail triggers the query to run in the below hook.
  const [checkForEmail, setCheckForEmail] = useState(false)

  const emailInput = { email, checkForEmail, setCheckForEmail }
  const passwordInput = { value: password, validationMessage: validatePasswordMessage(password) }
  const repeatPasswordInput = {
    value: repeatPassword,
    validationMessage: validateRepeatPasswordMessage(password, repeatPassword),
  }
  const { setUseValidation, inputStates } = useFormValidation([emailInput, passwordInput, repeatPasswordInput])
  console.log(inputStates)
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
    <Input value={email} type="email" id="email" placeholder="Email" onChange={handleEmailChange} key="Email" />,
    <Input
      id="password"
      type="password"
      placeholder="Password"
      value={password}
      onChange={handlePasswordChange}
      key="Password"
    />,
    <Input
      id="repeatPassword"
      type="password"
      placeholder="Repeat Password"
      value={repeatPassword}
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
