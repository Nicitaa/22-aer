import React, { useState } from "react"

import styles from "./auth.module.css"
import { useForm } from "react-hook-form"
interface RecoverFormData {
  email: string
}

function RecoverAccountForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ defaultValues: { email: "" } })
  const onSubmit = (data: RecoverFormData) => {
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
      <button type="submit" className="p-4 w-full bg-cta rounded-lg text-md">
        Login
      </button>
    </form>
  )
}

export default RecoverAccountForm
