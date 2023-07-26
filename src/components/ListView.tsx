import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
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
    <div
      ref={componentRef}
      className="scrollbar md:grid-cols-2 grid max-h-[750px] grid-cols-1 gap-12 overflow-y-scroll"
    >
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
                  <Link
                    href={`/product?id=${id}`}
                    className=" bg-cta px-2 py-1 text-xs absolute tablet:w-20 w-full  text-center right-auto tablet:bottom-0 tablet:right-0"
                  >
                    Details
                  </Link>
                ) : (
                  <div className="w-full flex gap-8 mt-4">
                    <Link
                      href={`/product?id=${id}`}
                      className=" bg-cta px-2 py-1 text-md font-bold flex-grow  text-center rounded-md "
                    >
                      Buy ${(price / 100).toFixed(2)}
                    </Link>
                    <Link
                      href={`/product?id=${id}`}
                      className=" bg-cta px-2 py-1 text-md font-bold flex-grow  text-center rounded-md "
                    >
                      Details
                    </Link>
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
