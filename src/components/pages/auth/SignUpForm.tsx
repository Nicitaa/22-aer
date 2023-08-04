import Link from "next/link"
import React, { useState } from "react"
import { Checkbox, Input } from "../../ui"

function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  const [rememberMe, setRememberMe] = useState(false)

  return (
    <form action="#" className="w-full space-y-4">
      <Input
        type="email"
        id="sign-up-email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        type='password'
        id="sign-up-password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Input
        type='password'
        id="sign-up-repeatPassword"
        placeholder="Repeat Password"
        value={repeatPassword}
        onChange={e => setRepeatPassword(e.target.value)}
      />
      <div className="flex justify-between items-center">
        <div className="flex flex-row-reverse gap-1 items-center ">
          <Checkbox
            id="sign-up-rememberMe"
            label="Remember me"
            isChecked={rememberMe}
            onChange={() => setRememberMe(prevValue => !prevValue)}
          />
        </div>
        <Link href={"./recover"} className="text-cta">
          Forgot Password?
        </Link>
      </div>
      <button type="submit" className="p-4 w-full bg-cta rounded-lg text-md">
        Register Now
      </button>
    </form>
  )
}

export default SignUpForm
