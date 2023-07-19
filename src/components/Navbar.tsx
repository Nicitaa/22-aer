import Link from "next/link"
import { HiMenu } from "react-icons/hi"
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {

  const [isHamburgerMenu, setHamburgerMenu] = useState<boolean>(false)
  const [isNavbar, setNavbar] = useState<boolean>(false)

  function showHamburgerMenu() {
    setNavbar(false)
    setHamburgerMenu(true)
  }
  //logic for hiding Slider and sliderCounter

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
      href: '/login'
    },
  ]

  const router = useRouter();

  return (
    <>
      <AnimatePresence>
        {isNavbar &&
          <motion.nav
            className="text-primary flex justify-between items-center px-4 py-2
     tablet:px-8 tablet:py-4
     laptop:px-12 laptop:py-6"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}>

            {/* LOGO */}
            <h1 className="font-primary text-lg font-bold">Aer</h1>



            {/* Nav-links */}
            <ul className="hidden laptop:flex justify-between gap-x-8 text-center">
              {navLinks.map(navLink => (
                <li className="relative" key={navLink.href}>
                  <Link className={twMerge(`before:absolute before:bottom-[-4px] before:w-full before:content-[''] before:invisible before:opacity-0 before:translate-y-[0px]
           before:border-b-[3px] before:border-solid before:border-cta before:rounded-md before:transition-all before:duration-300 before:pointer-events-none
            ${router.pathname == navLink.href ? `before:visible before:opacity-100`
                      : `hover:before:visible hover:before:opacity-100 before:translate-y-[10px] hover:before:translate-y-[0px]`}`)} href={navLink.href}>{navLink.label}</Link>
                </li>
              ))}
            </ul>




            {/* Hamburger menu */}
            <HiMenu className="flex laptop:hidden font-bold" size={48} onClick={() => showHamburgerMenu()} />


          </motion.nav>}
      </AnimatePresence>

      {isHamburgerMenu &&
        <AnimatePresence>
          <motion.div className="flex flex-col items-center gap-y-8"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}>
            <ul>
              {navLinks.map(navLink => (
                <li className="relative" key={navLink.href}>
                  <Link className={twMerge(`before:absolute before:bottom-[-4px] before:w-full before:content-[''] before:invisible before:opacity-0 before:translate-y-[0px]
           before:border-b-[3px] before:border-solid before:border-cta before:rounded-md before:transition-all before:duration-300 before:pointer-events-none
            ${router.pathname == navLink.href ? `before:visible before:opacity-100`
                      : `hover:before:visible hover:before:opacity-100 before:translate-y-[10px] hover:before:translate-y-[0px]`}`)} href={navLink.href}>{navLink.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>}
    </>
  )
}
