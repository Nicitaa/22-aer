import React, { useState } from "react"
import styles from "./auth.module.css"
import Link from "next/link"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { useForm, SubmitHandler } from "react-hook-form"

interface SignUpFormData {
  email: string
  password: string
  repeatPassword: string
}

const SignUpForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [passwordValue, setPasswordValue] = useState("")

  const {
    handleSubmit,
    register,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm<SignUpFormData>({ defaultValues: { email: "", password: "", repeatPassword: "" } })

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log("form submitted")
    console.log(data)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value
    // Manually set/clear error message for email field
    if (!emailValue) {
      setError("email", {
        type: "required",
        message: "Email is required"
      })
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
      setError("email", {
        type: "pattern",
        message: "Must be a valid email"
      })
    } else {
      clearErrors("email")
    }
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = event.target.value
    setPasswordValue(passwordValue) // Update the password value in state
    // Manually set/clear error message for password field
    if (!passwordValue) {
      setError("password", {
        type: "required",
        message: "Password is required"
      })
    } else if (passwordValue.length < 6) {
      setError("password", {
        type: "minLength",
        message: "Password must be at least 6 characters long"
      })
    } else {
      clearErrors("password")
    }
  }

  const handleRepeatPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const repeatPasswordValue = event.target.value
    // Manually set/clear error message for repeat password field
    if (!repeatPasswordValue) {
      setError("repeatPassword", {
        type: "required",
        message: "Repeat Password is required"
      })
    } else if (repeatPasswordValue !== passwordValue) {
      setError("repeatPassword", {
        type: "validate",
        message: "Passwords do not match"
      })
    } else {
      clearErrors("repeatPassword")
    }
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
          onChange={handleEmailChange}
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
          onChange={handlePasswordChange}
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
            required: { value: true, message: "Repeat Password is required" }
          })}
          placeholder="Repeat Password"
          type={`${showRepeatPassword ? "text" : "password"}`}
          className={styles.formInput}
          onChange={handleRepeatPasswordChange}
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
  )
}

export default SignUpForm
