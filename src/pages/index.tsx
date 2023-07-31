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
              <div className="-translate-y-full w-full flex flex-col-reverse laptop:flex-row items-center gap-y-4 px-4 tablet:px-8 laptop:px-12">
                <SliderCounter
                  className="w-full laptop:ml-[10%]"
                  array={topSales}
                  progressfillClassname="h-[3px] bg-cta"
                  subTitleClassName="font-secondary text-sm text-primary-dark"
                  titleClassName="font-bold"
                  progressbarClassName="w-full laptop:w-[400px] bg-secondary border-secondary"
                />
                <div className="w-full max-h-[60vh]">
                  <h1 className="text-lg font-bold laptop:w-[85%] laptop:ml-auto">
                    The best <br /> bag behind you
                  </h1>
                  <p className="hidden font-secondary text-sm text-primary-dark tablet:flex tablet:flex-col laptop:w-[85%] laptop:ml-auto">
                    Have questions how we did something? - ask us
                    <br />
                    As junior developers we provide low prices for now - its your chance!
                    <br />
                    <Link className="text-cta" href="https://t.me/icpcedu" target="_blank">
                      t.me/icpcedu
                    </Link>
                  </p>
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
