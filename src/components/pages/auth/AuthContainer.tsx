import React, { ReactNode } from "react"
import { ClientSafeProvider, LiteralUnion, signIn } from "next-auth/react"
import { BuiltInProviderType } from "next-auth/providers"
import { Button } from "~/components/ui"
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai"
import { useRouter } from "next/router"

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
  const router = useRouter()
  //because the query parameters are usually an array of strings, and you need to extract the actual string value you want to use.
  const callbackUrl = Array.isArray(router.query.callbackUrl) ? router.query.callbackUrl[0] : router.query.callbackUrl
  console.log(callbackUrl)
  return (
    <div
      className="flex text-md flex-col items-center w-[456px] max-w-[90vw] mx-auto px-4 py-2 rounded-[12px]
  tablet:px-6 tablet:py-4 laptop:px-10 laptop:py-6 space-y-4 bg-secondary ">
      <h1 className="text-md font-bold text-primary">{title}</h1>
      {children}
      <p className="font-bold">or</p>
      {Object.values(providers).map((provider, i) => (
        <Button
          variant="continue-with"
          key={i}
          onClick={() => {
            void signIn(provider.id, { callbackUrl })
          }}>
          Continue with {provider.name}
          {getProviderIcon(provider)}
        </Button>
      ))}
      {customContent}
    </div>
  )
}
