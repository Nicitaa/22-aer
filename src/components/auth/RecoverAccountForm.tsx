import React, { useState } from "react"
import AuthForm from "./AuthForm"
import { EmailInput } from "../ui/inputs"

function RecoverAccountForm() {
  const [email, setEmail] = useState("")
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const inputs = [
    <EmailInput
      id="email"
      placeholder="Email"
      value={email}
      label="Email"
      labelHidden={true}
      handleChange={handleEmailChange}
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
