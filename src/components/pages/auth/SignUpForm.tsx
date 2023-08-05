import Link from "next/link"
import React, { useState } from "react"
import { Checkbox, Input } from "../../ui"
import { Button } from "~/components/ui/Button"

function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  const [rememberMe, setRememberMe] = useState(false)

  return (
    <form action="#" className="w-full space-y-4">
      <Input
        placeholder="Email"
        type="email"
        id="sign-up-email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type='password'
        id="sign-up-password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Input
        placeholder="Repeat Password"
        type='password'
        id="sign-up-repeatPassword"
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
        <Button variant='link'>Forgot password</Button>
      </div>
      <Button className="w-full" variant='cta'>Register</Button>
    </form>
  )
}

export default SignUpForm
