//please organize imports
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { getProviders } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../server/auth"
import Link from "next/link"
import SignUpForm from "~/components/pages/auth/SignUpForm"

function Signup({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div
      className="flex flex-col items-center w-[456px] max-w-[80vw] mx-auto px-4 py-2 rounded-[12px] 
    tablet:px-6 tablet:py-4 laptop:px-10 laptop:py-6 space-y-4 bg-secondary ">
      <h1 className="text-md font-bold text-primary">Register</h1>
      <SignUpForm />
      <p className="font-bold">or</p>
      {/* {Object.values(providers).map(provider => (
      <ProviderButton provider={provider} key={provider.id} />
      {/* ))} */}
      <p>
        Already have an account?{" "}
        <span className="text-cta">
          <Link href="./signin">{""}Login</Link>
        </span>
      </p>
    </div>
  )
}

export default Signup

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
