import React, { ReactElement } from "react"
import { Navbar } from "./Navbar"

type Props = { children: ReactElement }
function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 z-[-40] h-screen bg-img bg-cover bg-center bg-fixed"></div>
      <div className="font-primary text-primary text-md">{children}</div>
    </>
  )
}
export default Layout
