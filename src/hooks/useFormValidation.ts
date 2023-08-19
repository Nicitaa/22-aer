import { useEffect, useState } from "react"
import useInputValidation, { inputValidationProps } from "./useInputValidation"
import useEmailExistsQuery, { emailValidationProps } from "./useEmailExistsQuery"
import { validateEmailMessage, validatePasswordMessage, validateRepeatPasswordMessage } from "~/utils/auth"
type UseEmailExistsQueryReturnType = ReturnType<typeof useEmailExistsQuery>
type UseInputValidationReturnType = ReturnType<typeof useInputValidation>

interface FormProps {
  email: string
  password: string
  repeatPassword?: string
  enableValidation: boolean
}
function useFormValidation({ email, password, repeatPassword, enableValidation }: FormProps) {
  const emailValidationData = useInputValidation({
    value: email,
    enabled: enableValidation,
    validationMessage: validateEmailMessage(email),
  })
  //trigger real time validation
  const passwordValidationData = useInputValidation({
    value: password,
    enabled: enableValidation,
    validationMessage: validatePasswordMessage(password),
  })
  repeatPassword = repeatPassword || password
  const repeatPasswordValidationData = useInputValidation({
    value: repeatPassword,
    enabled: enableValidation,
    validationMessage: validateRepeatPasswordMessage(password, repeatPassword),
  })
  return { emailValidationData, passwordValidationData, repeatPasswordValidationData }
}
export { useFormValidation }
