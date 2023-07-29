import React from "react"
import Image from "next/image"
import Link from "next/link"
import { priceFormatter } from "~/utils/priceFormatter"
type Product = {
  id: string
  preview: string
  title: string
  subTitle: string
  price: number
  imagesUrl: string[]
}
const GridView = ({ products }: { products: Product[] }) => {
  return (
    <section className="scrollbar grid max-h-[750px] grid-cols-1 gap-4 overflow-y-scroll tablet:grid-cols-2 laptop:grid-cols-3">
      {products.map((product, index) => (
        <section key={index} className="group relative mx-4 mb-8 overflow-hidden rounded-t-2xl">
          <Link href={`product?id=${product.id}`}>
            <Image
              className=" duration-300 group-hover:scale-125"
              src={product.preview ?? ""}
              alt="Placeholder Image"
              width={1280}
              height={720}
              layout="intrinsic"
              objectFit="cover"
              objectPosition="center"
            />
          </Link>
          <div className="font-primary absolute bottom-0 flex w-full justify-between bg-gray-800 bg-opacity-50  px-1 text-[14px] capitalize text-white tablet:text-xs laptop:text-md ">
            <span>{product.title}</span>
            <span className="text-cta">{priceFormatter(product.price)}</span>
          </div>
        </section>
      ))}
    </section>
  )
}

export default GridView
