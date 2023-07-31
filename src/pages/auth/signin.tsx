import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { getProviders } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../server/auth"
import { SignInForm } from "~/components"
import Link from "next/link"
import AuthContainer from "~/components/auth/AuthContainer"

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const customContent = (
    <p>
      New to Aer?{" "}
      <span className="text-cta">
        <Link href="./signup">Register</Link>
      </span>
    </p>
  )

  return (
    <>
      <AuthContainer providers={providers} title="Login" customContent={customContent}>
        <SignInForm />
      </AuthContainer>
    </>
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
    props: { providers: providers ?? [] }
  }
}
