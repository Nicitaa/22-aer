import Link from "next/link"
import { Checkbox, Input } from "../../ui"
import { useState } from "react"

function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  return (
    <form action="#" className="w-full space-y-4">
      <Input
        type="email"
        placeholder="Email or Username"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <div className="flex relative items-center">
        <Input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-row-reverse gap-1 items-center ">
          <Checkbox
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
        Login
      </button>
    </form>
  )
}

export default SignInForm
