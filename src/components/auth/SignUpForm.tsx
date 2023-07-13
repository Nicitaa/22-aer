import Link from "next/link"
import React, { useState } from "react"
import styles from "./auth.module.css"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { useForm } from "react-hook-form"

interface SignUpFormData {
  email: string
  password: string
  repeatPassword: string
}

function SignUpForm({}) {
  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)

  const [rememberMe, setRememberMe] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch
  } = useForm({ defaultValues: { email: "", password: "", repeatPassword: "" } })
  const password = watch("password")
  const repeatPassword = watch("repeatPassword")

  const onSubmit = (data: SignUpFormData) => {
    console.log("form submitted")
    console.log(data)
  }
  const validatePasswordMatch = (value: "") => {
    if (value !== password) {
      return "Passwords do not match"
    }
    return true
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
      <div className="flex relative items-center w-full">
        <label htmlFor="repeatPassword" className="visually-hidden">
          Repeat Password
        </label>

        <input
          id="repeatPassword"
          {...register("repeatPassword", {
            required: { value: true, message: "Repeat Password is required" },
            validate: (value) => value === password || "Passwords do not match"
          })}
          placeholder="Repeat Password"
          type={`${showRepeatPassword ? "text" : "password"}`}
          className={styles.formInput}
        />

        <button
          type="button"
          className="absolute right-4"
          onClick={() => setShowRepeatPassword((prevShowPassword) => !prevShowPassword)}
        >
          {showPassword ? (
            <AiFillEye className="w-8 h-8 text-secondary" />
          ) : (
            <AiFillEyeInvisible className="w-8 h-8 text-secondary" />
          )}
        </button>
      </div>
      {errors.repeatPassword && <p className="text-xs text-cta-danger mt-1">{errors.repeatPassword.message}</p>}

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

  {
    /*(
    <form action="#" className="w-full space-y-4">
      <label htmlFor="sign-up-email"></label>
      <input
        type="text"
        id="sign-up-email"
        placeholder="Email or Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.formInput}
      />
      <div className="flex relative items-center">
        <label htmlFor="sign-up-password"></label>
        <input
          type={`${showPassword ? "text" : "password"}`}
          id="sign-up-password"
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
          {showPassword ? (
            <AiFillEye className="w-8 h-8 text-secondary" />
          ) : (
            <AiFillEyeInvisible className="w-8 h-8 text-secondary" />
          )}
        </button>
      </div>
      <div className="flex relative items-center">
        <label htmlFor="sign-up-repeatPassword"></label>
        <input
          type={`${showRepeatPassword ? "text" : "password"}`}
          id="sign-up-repeatPassword"
          placeholder="Repeat Password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          className={styles.formInput}
        />
        <button
          type="button"
          className="absolute right-4"
          onClick={() => setShowRepeatPassword((prevShowPassword) => !prevShowPassword)}
        >
          {showRepeatPassword ? (
            <AiFillEye className="w-8 h-8 text-secondary" />
          ) : (
            <AiFillEyeInvisible className="w-8 h-8 text-secondary" />
          )}
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-row-reverse gap-1 items-center ">
          <label htmlFor="sign-up-rememberMe" className="text-xs">
            Remember Me
          </label>
          <input
            type="checkbox"
            id="sign-up-rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe((prevValue) => !prevValue)}
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
  )*/
  }
}

export default SignUpForm
