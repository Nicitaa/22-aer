import { Container, Slider, SliderCounter } from "~/components"
import { topSales } from '../constant/topSales'
import Link from "next/link"

export default function Home() {

  return (
    <>
      <div className="text-center">
        <Container className="flex flex-col items-center text-start">
          <SliderCounter className="text-center" slidesLength={topSales.length} />
          <div className="w-full text-center laptop:w-[75%] laptop:pl-32 laptop:pr-12">
            <h1 className="text-lg font-bold">
              The best <br /> bag behind you
            </h1>
            <p className="font-secondary text-sm text-primary-dark">
              Have questions how we did something? - ask us<br />
              As junior developers we provide low prices for now - its your chance!
              <br /><Link className="text-cta" href="https://t.me/icpcedu" target="_blank">t.me/icpcedu</Link>
            </p>
          </div>
        </Container>

        <Slider className="relative bg-secondary
    flex flex-col justify-center mt-auto
    tablet:pb-4 tablet:pt-12
    laptop:pb-8 laptop:py-16 overflow-hidden" />
      </div>
    </ >
  )
}

