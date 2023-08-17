import { useEffect, useState } from "react"

export interface inputValidationProps {
  value: string
  validationMessage: string
  enabled?: boolean
  name?: string
}
function useInputValidation({ value, validationMessage, enabled }: inputValidationProps) {
  const [error, setError] = useState("")
  useEffect(() => {
    if (!enabled) return
    setError(validationMessage)
  }, [value])
  return { error, setError }
}

export default useInputValidation
