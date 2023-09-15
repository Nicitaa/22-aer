import React, { useState } from "react"
import { Button, Input } from "../../ui"
import AuthForm from "./AuthForm"
import { api } from "~/utils/api"

function RecoverAccountForm() {
  const [email, setEmail] = useState("")
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const recoverPasswordMutation = api.credentials.recoverPassword.useMutation({})

  const handleSubmit = async () => {
    try {
      const result = await recoverPasswordMutation.mutateAsync({ email })
      console.log(result)
    } catch (error) {
      console.log(error)
    }
    return null
  }
  const inputs = [
    <Input id="email" type="email" placeholder="Email" value={email} onChange={handleEmailChange} key="Email" />,
    <Button type="submit" className="w-full" key="submit">
      Send Email
    </Button>,
  ]
  return (
    <AuthForm
      inputs={inputs}
      onSubmit={() => {
        void handleSubmit()
      }}
    />
  )
}

export default RecoverAccountForm
