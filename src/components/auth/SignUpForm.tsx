import Link from "next/link"
import React, { useState } from "react"
import { FaEye } from "react-icons/fa"
import { Input } from "../ui"

function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)

  const [rememberMe, setRememberMe] = useState(false)

  return (
    <form action="#" className="w-full space-y-4">
      <label htmlFor="sign-up-email"></label>
      <Input
        type="text"
        id="sign-up-email"
        placeholder="Email or Username"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <div className="flex relative items-center">
        <label htmlFor="sign-up-password"></label>
        <Input
          type={`${showPassword ? "text" : "password"}`}
          id="sign-up-password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="absolute right-4"
          onClick={() => setShowPassword(prevShowPassword => !prevShowPassword)}>
          <FaEye className="w-8 h-8 text-secondary" />
        </button>
      </div>
      <div className="flex relative items-center">
        <label htmlFor="sign-up-repeatPassword"></label>
        <Input
          type={`${showRepeatPassword ? "text" : "password"}`}
          id="sign-up-repeatPassword"
          placeholder="Repeat Password"
          value={repeatPassword}
          onChange={e => setRepeatPassword(e.target.value)}
        />
        <button
          type="button"
          className="absolute right-4"
          onClick={() => setShowRepeatPassword(prevShowPassword => !prevShowPassword)}>
          <FaEye className="w-8 h-8 text-secondary" />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-row-reverse gap-1 items-center ">
          <label htmlFor="sign-up-rememberMe" className="text-xs">
            Remember Me
          </label>
          <Input
            type="checkbox"
            id="sign-up-rememberMe"
            checked={rememberMe}
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
