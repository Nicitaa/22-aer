import Link from "next/link"
import { Checkbox, Input } from "../../ui"
import { useState } from "react"
import { AuthForm } from "."
import { validateEmail, validatePassword } from "~/utils/auth"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"

function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const router = useRouter()
  //because the query parameters are usually an array of strings, and you need to extract the actual string value you want to use.
  const callbackUrl = Array.isArray(router.query.callbackUrl) ? router.query.callbackUrl[0] : router.query.callbackUrl

  const handleSubmit = () => {
    signIn("credentials", { email, password, callbackUrl: callbackUrl })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    return
  }
  const [enableValidation, setEnableValidation] = useState(false)

  const validateInputs = () => {
    return validateEmail(email) && validatePassword(password)
  }

  const inputs = [
    <Input type="email" id="email" placeholder="Email" value={email} onChange={handleEmailChange} key="Email" />,
    <Input
      type="password"
      id="password"
      placeholder="Password"
      value={password}
      onChange={handlePasswordChange}
      key="Password"
    />,
    <div className="flex justify-between items-center" key="Remember Me and Recover">
      <Checkbox
        label="Remember Me"
        isChecked={rememberMe}
        onChange={() => {
          setRememberMe(prevValue => !prevValue)
        }}
      />
      <Link href="./recover" className="text-cta text-xs">
        Forgot Password?
      </Link>
    </div>,

    <button type="submit" className="p-4 w-full bg-cta rounded-lg text-md" key="submit">
      Login
    </button>,
  ]
  return <AuthForm inputs={inputs} onSubmit={handleSubmit} />
}

export default SignInForm
