import { signIn, signOut, useSession } from "next-auth/react"
import { api } from "~/utils/api"
import { Container, Slider, SliderCounter } from "~/components"

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" })

  return (
    <div>
      <div className="text-center w-full h-[90%] flex flex-col gap-2 justify-between">
        <Container>
          <h1 className="font-primary text-lg font-bold">
            The best <br /> bag behind you
          </h1>
          <p className="font-secondary text-sm text-primary-darker">
            We provide high quality for each bag. In our shop you can find bag that fits your needs - it can be
            colorfull / spacious / waterproof bag - what is yours? - you may create your own!
          </p>
        </Container>

        <Container>
          <SliderCounter />
        </Container>

        <Slider />
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl text-blue-400">{hello.data ? hello.data.greeting : "Loading tRPC query..."}</p>
        <AuthShowcase />
      </div>
    </div>
  )
}

function AuthShowcase() {
  const { data: sessionData } = useSession()

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  )

  return (
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
  )
}
