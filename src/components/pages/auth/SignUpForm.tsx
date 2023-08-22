import React, { useState } from "react"
import { Checkbox, Input } from "../../ui"
import { AuthForm } from "."
import { validateEmail, validatePassword, validateRepeatPassword } from "~/utils/auth"
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
  const handleSubmit = () => {
    createUserMutation
      .mutateAsync({ email, password })
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }
  const [enableValidation, setEnableValidation] = useState(false)

  const { emailValidationData } = useFormValidation({
    email,
    password,
    repeatPassword,
    enableValidation,
  })

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
