import { Slider3D, SliderCounter } from "~/components"
import Link from "next/link"
import { topSales } from "../constant/topSales"
import { AnimatePresence, motion } from "framer-motion"
import useMainText from "~/hooks/useMainText"
import useSlider3D from "~/hooks/useSlider3D"

export default function Home() {
  const slider3D = useSlider3D()
  const mainText = useMainText()

  return (
    <>
      <div className="absolute inset-0 top-[10vh] overflow-hidden text-center laptop:text-start">
        <AnimatePresence>
          {mainText.isOpen && (
            <motion.div
              className="absolute top-1/2 w-full"
              animate={{ x: ["-100%", "0%"] }}
              exit={{ x: ["0%", "-100%"] }}>
              <div
                className="main-counter mobile:-translate-y-full w-full
                flex flex-col-reverse laptop:flex-row items-center gap-y-4 px-4 tablet:px-8 laptop:px-12">
                <SliderCounter
                  className="w-full laptop:ml-[10%]"
                  array={topSales}
                  progressfillClassname="h-[3px] bg-cta"
                  subTitleClassName="font-secondary text-sm text-primary-foreground"
                  titleClassName="font-bold mb-2 tablet:mb-0"
                  progressbarClassName="w-full laptop:w-[400px] bg-secondary border-secondary"
                />
                <div className="w-full max-h-[60vh] pb-4 tablet:pb-0">
                  <h1 className="text-[clamp(2rem,1.8rem+1vw,3rem)] hidden main-text mobile:block font-bold laptop:w-[85%] laptop:ml-auto">
                    The best <br /> bag behind you
                  </h1>
                  <div className="hidden font-secondary text-xs text-primary-foreground tablet:flex tablet:flex-col laptop:w-[85%] laptop:ml-auto">
                    Have questions how we did something? - ask us
                    <br />
                    As junior developers we provide low prices for now - its your chance!
                    <div className="hidden laptop:flex flex-col items-center laptop:items-start">
                      <Link
                        className="relative w-fit
                        before:absolute before:right-0 before:w-[25%] before:content-['']
                        before:invisible before:opacity-0 before:translate-x-[0px] before:translate-y-[10px]
                        before:border-b-[4px] before:rotate-90 before:border-solid before:border-cta before:rounded-md before:transition-all
                        before:duration-300 before:pointer-events-none
                          hover:before:visible hover:before:opacity-100 hover:before:translate-x-[25px]
                            after:absolute after:right-0 after:w-[25%] after:content-['Nikita']
                        after:invisible after:opacity-0 after:translate-x-[0px] after:translate-y-[0px]
                        after:transition-all
                        after:duration-500 after:pointer-events-none
                          hover:after:visible hover:after:opacity-100 hover:after:translate-x-[43px]
                        text-cta"
                        href="https://t.me/nicitaacom"
                        target="_blank">
                        t.me/nicitaacom
                      </Link>
                      <Link
                        className="relative w-fit
                        before:absolute before:right-0 before:w-[20%] before:content-['']
                        before:invisible before:opacity-0 before:translate-x-[10px] before:translate-y-[10px]
                        before:border-b-[4px] before:rotate-90 before:border-solid before:border-cta before:rounded-md before:transition-all
                        before:duration-300 before:pointer-events-none
                          hover:before:visible hover:before:opacity-100 hover:before:translate-x-[25px]
                            after:absolute after:right-0 after:w-[25%] after:content-['Illia']
                        after:invisible after:opacity-0 after:translate-x-[0px] after:translate-y-[0px]
                        after:transition-all
                        after:duration-500 after:pointer-events-none
                          hover:after:visible hover:after:opacity-100 hover:after:translate-x-[53px]
                        text-cta"
                        href="https://github.com/ottakist"
                        target="_blank">
                        github.com/ottakist
                      </Link>
                      <Link
                        className="relative w-fit
                        before:absolute before:right-[-4px] before:w-[20%] before:content-['']
                        before:invisible before:opacity-0 before:translate-x-[0px] before:translate-y-[10px]
                        before:border-b-[4px] before:rotate-90 before:border-solid before:border-cta before:rounded-md before:transition-all
                        before:duration-300 before:pointer-events-none
                          hover:before:visible hover:before:opacity-100 hover:before:translate-x-[25px]
                            after:absolute after:right-0 after:w-[25%] after:content-['Ahmad']
                        after:invisible after:opacity-0 after:translate-x-[0px] after:translate-y-[0px]
                        after:transition-all
                        after:duration-500 after:pointer-events-none
                          hover:after:visible hover:after:opacity-100 hover:after:translate-x-[55px]
                        text-cta"
                        href="https://github.com/arifm6"
                        target="_blank">
                        github.com/arifm6
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {slider3D.isOpen && (
            <motion.div className="absolute bottom-0" animate={{ x: ["100%", "0%"] }} exit={{ x: ["0%", "100%"] }}>
              <Slider3D
                className="bg-secondary
    flex flex-col justify-center mt-auto"
                label="Top sales"
                labelClassName="font-bold"
                array={topSales}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
