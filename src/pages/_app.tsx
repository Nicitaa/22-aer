import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { type AppType } from "next/app"
import { api } from "~/utils/api"
import "~/styles/globals.css"
import { Navbar } from "~/components"

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <div className="relative overflow-hidden min-h-screen bg-img bg-cover bg-center text-primary">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}

export default api.withTRPC(MyApp)
