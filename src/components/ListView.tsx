import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "./ui/Button"
type Product = {
  id: string
  preview: string
  title: string
  subTitle: string
  price: number
  imagesUrl: string[]
}

const ListView = ({ products }: { products: Product[] }) => {
  const componentRef = useRef<HTMLDivElement>(null)
  const [componentWidth, setComponentWidth] = useState<number>(0)
  useEffect(() => {
    const initialWidth = componentRef.current?.offsetWidth
    setComponentWidth(initialWidth || 0)
  }, [])
  return (
    <div ref={componentRef} className="scrollbar max-h-[750px] overflow-y-scroll">
      <section className=" grid gap-y-12 justify-items-center ">
        {products.map((product) => {
          const { id, preview, title, subTitle, price } = product
          return (
            <article
              key={id}
              className="relative flex flex-col laptop:gap-6 w-full gap-6 tablet:px-8 tablet:flex-row  "
            >
              <Image className="tablet:w-[55%]" src={preview ?? ""} alt="Placeholder Image" width={600} height={480} />

              <div className="font-primary text-white tablet:w-[35%] tablet:relative">
                <h4 className="font-bold capitalize text-lg">{title}</h4>
                {componentWidth > 700 ? (
                  <h5 className="font-primary font-bold text-md text-cta">${(price / 100).toFixed(2)}</h5>
                ) : (
                  <></>
                )}
                <p className="max-w-lg text-md">{subTitle.substring(0, 150)}...</p>
                {componentWidth > 700 ? (
                  <Button
                    href={`/product?id=${id}`}
                    className="absolute right-0"
                  >
                    Details
                  </Button>
                ) : (
                  <div className="w-full flex gap-8 mt-4">
                    <Button href={`/product?id=${id}`} className="w-1/2 text-center">
                      Buy ${(price / 100).toFixed(2)}
                    </Button>
                    <Button href={`/product?id=${id}`} className="w-1/2 text-center">
                      Details
                    </Button>
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default ListView
