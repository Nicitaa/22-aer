import Link from "next/link"
import { AiOutlineMenuFold } from "react-icons/ai"
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMainText, useSlider3D } from "~/hooks";
import { Button } from "./ui/Button";

export function Navbar() {

  const [isHamburgerMenu, setHamburgerMenu] = useState<boolean>(false)
  const slider3D = useSlider3D()
  const mainText = useMainText()

  function showHamburgerMenu() {
    slider3D.onClose()
    mainText.onClose()
    setHamburgerMenu(true)
  }

  function hideHamburgerMenu() {
    setHamburgerMenu(false)
    mainText.onOpen()
    slider3D.onOpen()
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
        <motion.nav
          className="text-primary flex justify-between items-center px-4 py-2
     tablet:px-8 tablet:py-4
     laptop:px-12 laptop:py-6"
          initial={{ y: 0 }}
          exit={{ y: -400 }}>

          {/* LOGO */}
          <h1 className="font-primary text-lg font-bold">Aer</h1>



          {/* Nav-links */}
          <ul className="hidden laptop:flex justify-between gap-x-8 text-center">
            {navLinks.map(navLink => (
              <li className="relative" key={navLink.href}>
                <Link className={twMerge(`before:absolute before:bottom-[-4px] before:w-full before:content-['']
                 before:invisible before:opacity-0 before:translate-y-[0px]
           before:border-b-[3px] before:border-solid before:border-cta before:rounded-md before:transition-all
            before:duration-300 before:pointer-events-none
            ${router.pathname == navLink.href ? `before:visible before:opacity-100`
                    : `hover:before:visible hover:before:opacity-100 before:translate-y-[10px] hover:before:translate-y-[0px]`}`)}
                  href={navLink.href}>{navLink.label}</Link>
              </li>
            ))}
          </ul>



          {/* Hamburger menu */}
          <motion.div animate={{ rotate: isHamburgerMenu ? 90 : 270 }}>
            <AiOutlineMenuFold className='flex laptop:hidden font-bold' size={48}
              onClick={() => isHamburgerMenu ? hideHamburgerMenu() : showHamburgerMenu()} />
          </motion.div>


        </motion.nav>
      </AnimatePresence>

      <AnimatePresence>
        {isHamburgerMenu &&
          <motion.div className="absolute left-1/2 flex flex-col gap-y-8 text-center z-[99]"
            initial={{ y: '-150%', x: '-50%' }}
            animate={{ y: '50%', x: '-50%' }}
            exit={{ y: '-150%', x: '-50%' }}>
            <ul>
              {navLinks.map(navLink => (
                <li className="relative" key={navLink.href}>
                  <Button className={twMerge(`text-lg text-primary mb-4 before:absolute before:bottom-[-4px] before:w-full
                   before:content-[''] before:invisible before:opacity-0 before:translate-y-[0px]
           before:border-b-[3px] before:border-solid before:border-cta before:rounded-md before:transition-all
            before:duration-300 before:pointer-events-none
            ${router.pathname == navLink.href ? `text-cta laptop:before:visible before:opacity-100`
                      : `hover:before:visible hover:before:opacity-100 before:translate-y-[10px] hover:before:translate-y-[0px]`}`)}
                    href={navLink.href}>{navLink.label}</Button>
                </li>
              ))}
            </ul>
          </motion.div>}
      </AnimatePresence>
    </>
  )
}
