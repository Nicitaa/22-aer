//please separate your imports - react/next - dependencies - hooks/components
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { getProviders } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import Link from "next/link"

import { AiOutlineGoogle } from 'react-icons/ai'

import { authOptions } from "../../server/auth"
import { SignInForm } from "~/components"
import { Button } from "~/components/ui"

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div
      className="flex text-md flex-col items-center w-[456px] max-w-[80vw] mx-auto px-4 py-2 rounded-[12px]
     tablet:px-6 tablet:py-4 laptop:px-10 laptop:py-6 space-y-4 bg-secondary ">
      <h1 className="text-md font-bold text-primary">Login</h1>
      <SignInForm />
      <p className="font-bold">or</p>
      <Button variant='continue-with'>
        Continue with Google
        <AiOutlineGoogle className="text-primary-foreground" size={42} />
      </Button>
      {/* {Object.values(providers).map(provider => (
        <ProviderButton provider={provider} key={provider.id} />
      ))} */}
      <p>
        New to Aer?{" "}
        <span className="text-cta">
          <Link href="./signup">Register</Link>
        </span>
      </p>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } }
  }

  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] },
  }
}
