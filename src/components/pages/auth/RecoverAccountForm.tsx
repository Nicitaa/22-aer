import React, { useState } from "react"
import { Input } from "../../ui"

function RecoverAccountForm() {
  const [email, setEmail] = useState("")

  return (
    <div className="w-full space-y-4">
      <form action="#">
        <label htmlFor="remember-email"></label>
        <Input
          type="email"
          id="remember-email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </form>
      <button type="submit" className="p-4 w-full bg-cta rounded-lg text-md">
        Submit
      </button>
    </div>
  )
}

export default RecoverAccountForm
