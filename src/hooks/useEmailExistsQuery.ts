import { type Dispatch, type SetStateAction, useEffect } from "react"
import { api } from "~/utils/api"
import { validateEmail, validateEmailMessage } from "~/utils/auth"
import useInputValidation from "./useInputValidation"
export interface emailValidationProps {
  email: string
  checkForEmail: boolean
  enabled?: boolean
  setCheckForEmail: Dispatch<SetStateAction<boolean>>
  name?: string
}
function useEmailExistsQuery({ email, checkForEmail, setCheckForEmail, enabled }: emailValidationProps) {
  const { error, setError } = useInputValidation({
    value: email,
    validationMessage: validateEmailMessage(email),
    enabled,
  })

  const { data: emailExistsData, status } = api.credentials.getEmailExists.useQuery(
    { email },
    { enabled: checkForEmail && validateEmail(email) }
  )
  useEffect(() => {
    //status === success means the check is completed.

    handleQueryUpdate(status)
  }, [status])
  // This function will be called when the query completes
  function handleQueryUpdate(status: string) {
    console.log("Query status:", status)
    if (status === "error" || status === "success") {
      setCheckForEmail(false)
      updateError()
    }
  }
  function updateError() {
    try {
      if (status === "success" && emailExistsData === true) {
        setError("This Email Already Exists!")
      }
    } catch (error) {
      console.error("An error occurred while checking email existence:", error)
      setError("An error occurred has occured. Please try again later")
    }
  }
  return { error }
}
export default useEmailExistsQuery
