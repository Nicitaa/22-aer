import React, { useState } from "react"
import styles from "./auth.module.css"
import { useForm, SubmitHandler } from "react-hook-form"

interface RecoverFormData {
  email: string
}

const RecoverAccountForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm<RecoverFormData>({ defaultValues: { email: "" } })

  const onSubmit: SubmitHandler<RecoverFormData> = (data) => {
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
      <button type="submit" className="p-4 w-full bg-cta rounded-lg text-md">
        Login
      </button>
    </form>
  )
}

export default RecoverAccountForm
