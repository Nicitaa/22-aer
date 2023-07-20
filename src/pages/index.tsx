import { Container, Slider, SliderCounter } from "~/components"
import Link from "next/link"
import { topSales } from "../constant/topSales"

export default function Home() {

  return (
    <>
      <main className="mt-12 laptop:mt-0 text-center laptop:text-start">
        <Container className="absolute top-1/2 -translate-y-full flex flex-col-reverse laptop:flex-row items-center gap-y-4">
          <SliderCounter className="w-full laptop:ml-[10%]" array={topSales} />
          <div className="w-full max-h-[60vh]">
            <h1 className="text-lg font-bold laptop:w-[85%] laptop:ml-auto">
              The best <br /> bag behind you
            </h1>
            <p className="hidden font-secondary text-sm text-primary-dark tablet:flex tablet:flex-col laptop:w-[85%] laptop:ml-auto">
              Have questions how we did something? - ask us<br />
              As junior developers we provide low prices for now - its your chance!
              <br /><Link className="text-cta" href="https://t.me/icpcedu" target="_blank">t.me/icpcedu</Link>
            </p>
          </div>
        </Container>

        <div className="absolute bottom-0">
          <Slider className="bg-secondary
    flex flex-col justify-center mt-auto"
            label="Top sales" labelClassName="font-bold" array={topSales} />
        </div>
      </main>
    </>
  )
}

