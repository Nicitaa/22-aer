import React, { ReactNode } from "react"
import ProviderButton from "./ProviderButton"
import { ClientSafeProvider, LiteralUnion } from "next-auth/react"
import { BuiltInProviderType } from "next-auth/providers"

interface AuthContainerProps {
  children: ReactNode
  title: string
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | never[]
  customContent?: ReactNode
}

export default function AuthContainer({ children, title, customContent, providers }: AuthContainerProps) {
  return (
    <div
      className="flex text-md flex-col items-center w-[456px] max-w-[90vw] mx-auto px-4 py-2 rounded-[12px]
  tablet:px-6 tablet:py-4 laptop:px-10 laptop:py-6 space-y-4 bg-secondary "
    >
      <h1 className="text-md font-bold text-primary">{title}</h1>
      {children}
      <p className="font-bold">or</p>
      {Object.values(providers).map((provider) => (
        <ProviderButton provider={provider} key={provider.id} />
      ))}
      {customContent}
    </div>
  )
}
