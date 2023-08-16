import { type Dispatch, useState, type SetStateAction, useEffect } from "react"
import { api } from "~/utils/api"
import { validateEmail } from "~/utils/auth"
interface emailSignupErrors {
  email: string
  checkForEmail: boolean
  setCheckForEmail: Dispatch<SetStateAction<boolean>>
}
function useEmailSignUpErrors({ email, checkForEmail, setCheckForEmail }: emailSignupErrors) {
  const [error, setError] = useState("")
  console.log(error)
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
  console.log("this is emailExistsData: " + emailExistsData)
  function updateError() {
    try {
      if (status === "success" && emailExistsData === true) {
        setError("This Email Already Exists!")
      } else if (status === "error" && !validateEmail(email)) {
        setError("Please enter a valid email address")
      }
    } catch (error) {
      console.error("An error occurred while checking email existence:", error)
      setError("An error occurred has occured. Please try again later")
    }
  }
  return { error }
}
export default useEmailSignUpErrors
