import {ClientSafeProvider, signIn} from "next-auth/react"
import React from "react"
import {FaFacebook, FaGithub, FaGoogle} from "react-icons/fa"

export type Props = {
  provider: ClientSafeProvider
}

export function ProviderButton({provider}: Props) {
  const providerIcon =
    provider.id === "google" ? (
      <FaGoogle className="text-md" />
    ) : provider.id === "facebook" ? (
      <FaFacebook className="text-md" />
    ) : (
      <FaGithub className="text-md" />
    )

  const handleSignIn = () => {
    signIn(provider.id)
      .then(() => {
        // Handle successful sign-in
        console.log("Successfully signed in")
      })
      .catch(error => {
        // Handle sign-in error
        console.log("Sign-in error:", error)
      })
  }

  return (
    <div
      className="flex items-center w-full p-4 bg-primary text-black rounded-lg cursor-pointer"
      onClick={handleSignIn}>
      <div>{providerIcon}</div>

      <h3 className="flex grow justify-center text-xs tablet:text-sm laptop:text-md">Sign in with {provider.name}</h3>
    </div>
  )
}
