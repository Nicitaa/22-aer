import React, { useState } from "react"

import styles from "./auth.module.css"

function RecoverAccountForm() {
  const [email, setEmail] = useState("")

  return (
    <div className="w-full space-y-4">
      <form action="#">
        <label htmlFor="remember-email"></label>
        <input
          type="text"
          id="remember-email"
          placeholder="Email or Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.formInput}
        />
      </form>
      <button type="submit" className="p-4 w-full bg-cta rounded-lg text-md">
        Submit
      </button>
    </div>
  )
}

export default RecoverAccountForm
