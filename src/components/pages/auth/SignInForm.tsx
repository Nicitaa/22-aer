import { Checkbox, Input } from "../../ui"
import { useState } from "react"
import { Button } from "~/components/ui/Button"

function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  return (
    <form action="#" className="w-full space-y-4">
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <div className="flex relative items-center">
        <Input
          placeholder="Password"
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
      </div>
      <Button className="w-full" variant='cta'>Login</Button>
    </form>
  )
}

export default SignInForm
