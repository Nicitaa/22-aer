import React from "react"
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { getProviders } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../server/auth"
import Link from "next/link"
import RecoverAccountForm from "~/components/pages/auth/RecoverAccountForm"
import { AuthContainer } from "~/components/pages/auth/"

//eslint-disable-next-line @typescript-eslint/no-unused-vars
function RecoverAccount({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const customContent = (
    <p>
      Remember password?&nbsp;
      <span className="text-cta">
        <Link href="./signin">Login</Link>
      </span>
    </p>
  )

  return (
    <>
      <AuthContainer providers={providers} title="Recover Account" customContent={customContent}>
        <RecoverAccountForm />
      </AuthContainer>
    </>
  )
}

export default RecoverAccount

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
