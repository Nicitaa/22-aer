import { signIn, signOut, useSession } from "next-auth/react"
import { api } from "~/utils/api"

function AuthShowcase() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" })

  const { data: sessionData } = useSession()

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  )

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl text-blue-400">{hello.data ? hello.data.greeting : "Loading tRPC query..."}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-2xl text-center text-red-400">
          {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
          {secretMessage && <span> - {secretMessage}</span>}
        </p>
        <button
          className="rounded-full bg-blue-400 px-10 py-3 font-semibold text-red-400 no-underline transition hover:bg-blue-700"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </button>
      </div>
    </>
  )
}
