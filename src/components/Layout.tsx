import React from "react"
import { Navbar } from "./Navbar"
import { motion } from "framer-motion"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 z-[-40] h-screen bg-img bg-cover bg-center bg-fixed"></div>
      <main className="font-primary text-primary text-md">{children}</main>
    </>
  )
}
export default Layout
