import Link from "next/link"
import { FaEye } from "react-icons/fa"
import { Input, SimpleCheckbox } from "../ui"
import { useState } from "react"
type Props = {}

function SignInForm({}: Props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  return (
    <form action="#" className="w-full space-y-4">
      <label htmlFor="sign-in-email"></label>
      <Input
        type="text"
        id="sign-in-email"
        placeholder="Email or Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex relative items-center">
        <label htmlFor="sign-in-password"></label>
        <Input
          type={`password`}
          id="sign-in-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-between items-center">
        <SimpleCheckbox
          label={"Remember Me"}
          checkboxValue={rememberMe}
          setCheckboxValue={setRememberMe}
          labelReverse={true}
        />
        <Link href={"./recover"} className="text-cta text-xs">
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
