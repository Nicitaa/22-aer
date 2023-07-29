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
      {inputs.map((input): any => {
        return <div>{input}</div>
      })}
    </form>
  )
}
