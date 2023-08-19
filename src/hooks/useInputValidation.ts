import { type Dispatch, type SetStateAction, useEffect, useState } from "react"
export interface inputValidationProps {
  value: string
  validationMessage: string
  enabled: boolean
}
function useInputValidation({ value, validationMessage, enabled }: inputValidationProps) {
  const [errorMessage, setErrorMessage] = useState("")
  useEffect(() => {
    if (!enabled) return
    setErrorMessage(validationMessage)
  }, [value, enabled])
  return { errorMessage, setErrorMessage }
}

export default useInputValidation
