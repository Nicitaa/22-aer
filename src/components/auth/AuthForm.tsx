import React, { ReactNode } from "react"

interface AuthFormProps {
  inputs: ReactNode[]
  onSubmit: () => void
}

export default function AuthForm({ inputs, onSubmit, ...props }: AuthFormProps) {
  return (
    <form
      onSubmit={() => {
        onSubmit()
      }}
      className="w-full space-y-4"
    >
      {inputs.map((input, index): ReactNode => {
        return <div key={index}>{input}</div>
      })}
    </form>
  )
}
