//please separate your imports - react/next - dependencies - hooks/components
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { getProviders } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import Link from "next/link"
import AuthContainer from "~/components/pages/auth/AuthContainer"

import { authOptions } from "../../server/auth"
import { SignInForm } from "~/components"

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const footerHelp = (
    <p>
      New to Aer?&nbsp;
      <span className="text-cta">
        <Link href="./signup">Register</Link>
      </span>
    </p>
  )

  return (
    <>
      <AuthContainer providers={providers} title="Login" footerHelp={footerHelp}>
        <SignInForm />
      </AuthContainer>
    </>
  )}
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
