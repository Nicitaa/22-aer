import React, { ReactNode } from "react"
import { ClientSafeProvider, LiteralUnion } from "next-auth/react"
import { BuiltInProviderType } from "next-auth/providers"
import { Button } from "~/components/ui"
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai"

interface AuthContainerProps {
  children: ReactNode
  title: string
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | never[]
  customContent?: ReactNode
}

export default function AuthContainer({ children, title, customContent, providers }: AuthContainerProps) {
  function getProviderIcon(provider: ClientSafeProvider) {
    const providerIcon =
      provider.id === "google" ? (
        <AiOutlineGoogle className="text-primary-foreground" size={42} />
      ) : provider.id === "facebook" ? (
        <AiOutlineFacebook className="text-primary-foreground" size={42} />
      ) : (
        <AiOutlineGithub className="text-primary-foreground" size={42} />
      )
    return providerIcon
  }

  return (
    <div
      className="flex text-md flex-col items-center w-[456px] max-w-[90vw] mx-auto px-4 py-2 rounded-[12px]
  tablet:px-6 tablet:py-4 laptop:px-10 laptop:py-6 space-y-4 bg-secondary ">
      <h1 className="text-md font-bold text-primary">{title}</h1>
      {children}
      <p className="font-bold">or</p>
      {Object.values(providers).map((provider, i) => (
        <Button variant="continue-with" key={i}>
          Continue with {provider.name}
          {getProviderIcon(provider)}
        </Button>
      ))}
      {customContent}
    </div>
  )
}
