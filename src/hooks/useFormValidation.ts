import { useState } from "react"
import useInputValidation, { type inputValidationProps } from "./useInputValidation"
import useEmailExistsQuery, { emailValidationProps } from "./useEmailExistsQuery"

type FormProps = inputValidationProps | emailValidationProps

function useFormValidation(inputs: FormProps[]) {
  //trigger real time validation
  const [useValidation, setUseValidation] = useState(false)

  const inputStates = inputs.map(input => {
    if ("email" in input) {
      return useEmailExistsQuery({ ...input, enabled: useValidation })
    } else {
      return useInputValidation({ ...input, enabled: useValidation })
    }
    //useInputValidation({ ...input, enabled: useValidation })
  })
  return { inputStates, useValidation, setUseValidation }
}

export { useFormValidation }
