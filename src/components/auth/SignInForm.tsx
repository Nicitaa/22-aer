import React, { useState } from "react"
import styles from "./auth.module.css"
import Link from "next/link"
import { FaEye } from "react-icons/fa"
type Props = {
  providers: object
}

function SignInForm({ providers }: Props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  return (
    <form action="#" className="w-full space-y-4">
      <label htmlFor="sign-in-email"></label>
      <input
        type="text"
        id="sign-in-email"
        placeholder="Email or Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.formInput}
      />
      <div className="flex relative items-center">
        <label htmlFor="sign-in-password"></label>
        <input
          type={`${showPassword ? "text" : "password"}`}
          id="sign-in-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.formInput}
        />
        <button
          type="button"
          className="absolute right-4"
          onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
        >
          <FaEye className="w-8 h-8 text-secondary" />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-row-reverse gap-1 items-center ">
          <label htmlFor="sign-in-rememberMe" className="text-xs">
            Remember Me
          </label>
          <input
            type="checkbox"
            id="sign-in-rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe((prevValue) => !prevValue)}
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
