import { useEffect } from "react"
import { api } from "~/utils/api"
import { validateEmail, validateEmailMessage } from "~/utils/auth"
import useInputValidation from "./useInputValidation"
export interface emailValidationProps {
  email: string
  enabled: boolean
}
function useEmailExistsQuery({ email, enabled }: emailValidationProps) {
  const { errorMessage, setErrorMessage } = useInputValidation({
    value: email,
    validationMessage: validateEmailMessage(email),
    enabled,
  })
  const { data: emailExistsData, isFetched } = api.credentials.getEmailExists.useQuery(
    { email },
    { enabled: enabled && validateEmail(email) }
  )
  useEffect(() => {
    //when the data is fetched, update error msg.
    if (emailExistsData) {
      setErrorMessage("The email already exists. Please try again.")
    }
  }, [email])
  return { setErrorMessage, emailExistsData, isFetched }
}
export default useEmailExistsQuery
