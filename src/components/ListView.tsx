/* eslint-disable @next/next/no-img-element */
import React from "react"
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
  return (
    <div className="scrollbar md:grid-cols-2 grid max-h-[750px] grid-cols-1 gap-12 overflow-y-scroll">
      <section className=" grid gap-y-12 justify-items-center ">
        {products.map((product) => {
          const { id, preview, title, subTitle, price } = product
          return (
            <article key={id} className="relative flex flex-col laptop:gap-10 w-full gap-6 px-4 tablet:flex-row  ">
              <Image className="tablet:w-[55%]" src={preview ?? ""} alt="Placeholder Image" width={600} height={480} />

              <div className="font-primary text-white tablet:w-[35%] tablet:relative">
                <h4 className="mb-2 font-bold capitalize text-lg">{title}</h4>
                <h5 className="mb-3 font-primary font-bold text-sm text-cta">${(price / 100).toFixed(2)}</h5>
                <p className="mb-4 max-w-lg">{subTitle.substring(0, 150)}...</p>
                <Link
                  href={`/product?id=${id}`}
                  className=" bg-cta px-2 py-1 text-xs absolute tablet:w-20 w-[90%]  text-center right-auto tablet:bottom-0 tablet:right-0"
                >
                  Details
                </Link>
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default ListView
