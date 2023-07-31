import { AiOutlineMenuFold } from "react-icons/ai"
import { useRouter } from "next/router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMainText, useSlider3D } from "~/hooks";
import { Button } from "./ui/Button";
import useMain from "~/hooks/useMain";

export function Navbar() {

  const [isHamburgerMenu, setHamburgerMenu] = useState<boolean>(false)
  const slider3D = useSlider3D()
  const mainText = useMainText()
  const main = useMain()

  function showHamburgerMenu() {
    router.pathname === '/'
      ? (slider3D.onClose(), mainText.onClose())
      : main.onClose()
    setHamburgerMenu(true)
  }

  function hideHamburgerMenu() {
    router.pathname === '/'
      ? (mainText.onOpen(), slider3D.onOpen())
      : (main.onOpen(), (mainText.onOpen(), slider3D.onOpen()))
    setHamburgerMenu(false)
    //loading gif
  }

  const navLinks = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Products',
      href: '/products'
    },
    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'Cart',
      href: '/cart'
    },
    {
      label: 'Login',
      href: '/auth/signin'
    },
  ]

  const router = useRouter();

  return (
    <>
      <AnimatePresence>
        <motion.nav
          className="text-primary flex justify-between items-center px-4 py-2
     tablet:px-8 tablet:py-4
     laptop:px-12 laptop:py-6">

          {/* LOGO */}
          <h1 className="font-primary text-lg font-bold">Aer</h1>



          {/* Nav-links */}
          <ul className="hidden laptop:flex justify-between gap-x-8 text-sm">
            {navLinks.map(navLink => (
              <li className="relative" key={navLink.href}>
                <Button variant='nav-link' active={`${router.pathname === navLink.href ? 'active' : 'inactive'}`}
                  href={navLink.href}>{navLink.label}</Button>
              </li>
            ))}
          </ul>


          {/* Hamburger menu */}
          <motion.div className="flex laptop:hidden" animate={{ rotate: isHamburgerMenu ? 90 : 270 }}>
            <AiOutlineMenuFold size={48}
              onClick={() => isHamburgerMenu ? hideHamburgerMenu() : showHamburgerMenu()} />
          </motion.div>


        </motion.nav>
      </AnimatePresence>

      <AnimatePresence>
        {isHamburgerMenu &&
          <motion.div className="absolute left-1/2 flex flex-col gap-y-8 text-center z-[99]"
            initial={{ y: '-150%', x: '-50%', opacity: -1 }}
            animate={{ y: '50%', x: '-50%', opacity: 1 }}
            exit={{ y: '-150%', x: '-50%', opacity: -1 }}
            transition={{ ease: 'circOut', duration: 0.3 }}>
            <ul>
              {navLinks.map(navLink => (
                <li className="relative" key={navLink.href}>
                  <Button
                    className="text-lg"
                    variant="nav-link"
                    active={`${router.pathname === navLink.href ? 'active' : 'inactive'}`}
                    onClick={() => {
                      router.push(navLink.href).then(() => {
                        hideHamburgerMenu()
                      })
                    }}>
                    {navLink.label}
                  </Button>
                </li>
              ))}
            </ul>
          </motion.div>}
      </AnimatePresence>
    </>
  )
}
