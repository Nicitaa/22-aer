import React, { useState } from "react"
import { Input } from "../ui"
import AuthForm from "./AuthForm"

function RecoverAccountForm() {
  const [email, setEmail] = useState("")
  const inputs = [
    <Input
      type="text"
      id="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      label="Email"
      labelHidden={true}
    />,
    <button type="submit" className="p-4 w-full bg-cta rounded-lg text-md">
      Send Email
    </button>
  ]
  return <AuthForm inputs={inputs} onSubmit={() => {}} />
}

export default RecoverAccountForm
