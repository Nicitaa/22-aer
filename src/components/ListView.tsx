import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "./ui/Button"
import { priceFormatter } from "~/utils/priceFormatter"
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
    <div ref={componentRef} className="scrollbar max-h-[75vh] overflow-y-scroll">
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
                {componentWidth > 1024 ? (
                  <h5 className="font-primary font-bold text-md text-cta">{priceFormatter(price)}</h5>
                ) : (
                  <></>
                )}
                <p className="max-w-lg text-md">{subTitle.substring(0, 150)}...</p>
                {componentWidth > 1024 ? (
                  <div className="w-full flex text-sm gap-3  mt-4">
                    <Button href={`/product?id=${id}`} className="w-1/2 text-center">
                      Buy {priceFormatter(price)}
                    </Button>
                    <Button href={`/product?id=${id}`} className="w-1/2 text-center">
                      Details
                    </Button>
                  </div>
                ) : (
                  <div className="w-full flex flex-col gap-3 mt-4">
                    <Button href={`/product?id=${id}`} className="w-full text-center">
                      Buy {priceFormatter(price)}
                    </Button>
                    <Button href={`/product?id=${id}`} className="w-full text-center">
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
