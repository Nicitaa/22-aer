import React, { useState } from "react"
import { Button, Checkbox, Input } from "../../ui"
import { AuthForm } from "."
import { api } from "~/utils/api"
import { signIn } from "next-auth/react"

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
      .then(res => {
        console.log(res)
        if (res.status === 201) {
          signIn("credentials", { email, password, callbackUrl: "/auth/register-success" })
            .then(res => console.log(res))
            .catch(error => console.error(error))
        }
      })
      .catch(error => {
        console.error(error)
      })
  }


  const createUserMutation = api.credentials.createUser.useMutation({})
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
    <Button type="submit" className="w-full" key="submit">
    Register
  </Button>,
]
  return (
    <AuthForm
      inputs={inputs}
      onSubmit={() => {
        handleSubmit()
      }}
    />
  )
}

export default SignUpForm
