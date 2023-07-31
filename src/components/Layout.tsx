import React from "react"
import {Navbar} from "./Navbar"
import {AnimatePresence, motion} from "framer-motion"
import useMain from "~/hooks/useMain"
import {useRouter} from "next/router"

function Layout({children}: {children: React.ReactNode}) {
  const router = useRouter()
  const main = useMain()
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 z-[-40] h-screen bg-img bg-cover bg-center bg-fixed"></div>
      <AnimatePresence>
        {router.pathname === "/"
          ? main.isOpen && <main className="font-primary text-primary text-md">{children}</main>
          : main.isOpen && (
              <motion.main
                className="font-primary text-primary text-md"
                animate={{opacity: [0, 1], y: ["100%", "0%"]}}
                exit={{opacity: [1, 0], y: ["0%", "100%"]}}
                transition={{ease: "circIn", duration: 0.3}}>
                {children}
              </motion.main>
            )}
      </AnimatePresence>
    </>
  )
}
export default Layout
