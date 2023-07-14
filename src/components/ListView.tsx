import React from "react"
import Image from "next/image"
import Link from "next/link"
type Product = {
  name: string
  price: number
  id: number
  description: string
  image: string[]
}
const ListView = ({ products }: { products: Product[] }) => {
  return (
    <div className="scrollbar md:grid-cols-2 grid max-h-[750px] grid-cols-1 gap-12 overflow-y-scroll">
      <section className=" grid gap-y-12">
        {products.map((product) => {
          const { id, name, price, description, image } = product
          return (
            <article
              key={id}
              className="flex flex-col laptop:gap-12 gap-6 px-8 tablet:flex-row tablet:justify-center pt-4 "
            >
              <Image
                className=" duration-300 group-hover:scale-125"
                src={image[0] ?? ""}
                alt="Placeholder Image"
                width={300}
                height={200}
                layout="intrinsic"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="font-primary text-white relative">
                <div className="tablet:block flex justify-between">
                  <h4 className="mb-2 font-bold capitalize text-lg">{name}</h4>
                  <h5 className="mb-3 font-primary font-bold text-sm tablet:text-cta">${(price / 100).toFixed(2)}</h5>
                </div>
                <p className="mb-4 max-w-lg">{description.substring(0, 150)}...</p>
                <Link
                  href={`/product?id=${id}`}
                  className=" bg-cta px-2 py-1 text-xs absolute tablet:w-16 w-full  text-center right-0 tablet:static"
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
