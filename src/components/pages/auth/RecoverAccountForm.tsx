import React, { useState } from "react"
import { Input } from "../../ui"
import AuthForm from "./AuthForm"

function RecoverAccountForm() {
  const [email, setEmail] = useState("")
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const inputs = [
    <Input
      id="email"
      type="email"
      placeholder="Email"
      value={email}
      label="Email"
      labelHidden={true}
      onChange={handleEmailChange}
      key="Email"
    />,
    <button type="submit" className="p-4 w-full bg-cta rounded-lg text-md" key="submit">
      Send Email
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

export default RecoverAccountForm
