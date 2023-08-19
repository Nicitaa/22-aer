import React, { useEffect, useState } from "react"
import { Checkbox, Input } from "../../ui"
import { AuthForm } from "."
import useEmailExistsQuery from "~/hooks/useEmailExistsQuery"
import {
  validateEmail,
  validatePassword,
  validatePasswordMessage,
  validateRepeatPassword,
  validateRepeatPasswordMessage,
} from "~/utils/auth"
import useInputValidation from "~/hooks/useInputValidation"
import { api } from "~/utils/api"
import { useFormValidation } from "~/hooks/useFormValidation"

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
  const handleSubmit = async () => {
    setEnableValidation(true)
    if (validateInputs()) {
      const response = await createUserMutation.mutateAsync({ email, password })
      console.log("this is response: " + response)
      if (response) {
        emailValidationData.setErrorMessage(response)
      } else {
        //user mutated. redirect
        console.log("User Created")
      }
    }
  }
  const [enableValidation, setEnableValidation] = useState(false)

  const { emailValidationData, passwordValidationData, repeatPasswordValidationData } = useFormValidation({
    email,
    password,
    repeatPassword,
    enableValidation,
  })
  console.log(repeatPasswordValidationData.errorMessage)

  const createUserMutation = api.credentials.createUser.useMutation({})
  const validateInputs = () => {
    return validateEmail(email) && validatePassword(password) && validateRepeatPassword(password, repeatPassword)
  }
  //useEffect used to submit form when the email is finished checking but make sure to validate others
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
