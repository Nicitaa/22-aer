import React, { useState } from "react"
import styles from "./auth.module.css"
import Link from "next/link"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { useForm } from "react-hook-form"

interface SignInFormData {
  email: string
  password: string
}

function SignInForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ defaultValues: { email: "", password: "" } })
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const onSubmit = (data: SignInFormData) => {
    console.log("form submitted")
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
      <div>
        <label htmlFor="email" className="visually-hidden">
          Email
        </label>
        <input
          id="email"
          {...register("email", {
            required: { value: true, message: "Email is required" },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Must be a valid email"
            }
          })}
          placeholder="Email"
          type="email"
          className={styles.formInput}
        />

        {errors.email && <p className="text-xs text-cta-danger mt-1">{errors.email.message}</p>}
      </div>

      <div className="flex relative items-center w-full">
        <label htmlFor="password" className="visually-hidden">
          Password
        </label>

        <input
          id="password"
          {...register("password", {
            required: { value: true, message: "Password is required" },
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long"
            }
          })}
          placeholder="Password"
          type={`${showPassword ? "text" : "password"}`}
          className={styles.formInput}
        />

        <button
          type="button"
          className="absolute right-4"
          onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
        >
          {showPassword ? (
            <AiFillEye className="w-8 h-8 text-secondary" />
          ) : (
            <AiFillEyeInvisible className="w-8 h-8 text-secondary" />
          )}
        </button>
      </div>
      {errors.password && <p className="text-xs text-cta-danger mt-1">{errors.password.message}</p>}
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
