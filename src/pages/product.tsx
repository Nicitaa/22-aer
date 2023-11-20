"use client"
import React, { useEffect, useState } from "react"
import bags from "~/constant/bags.json"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { useRouter } from "next/router"
import { priceFormatter } from "~/utils/priceFormatter"
import ImgCarousel from "~/components/pages/product/Carousel"
import { Button } from "~/components/ui"

type FoundProduct =
  | {
      id: string
      preview: string
      title: string
      subTitle: string
      price: number
      imagesUrl: string[]
    }
  | undefined
const Product = () => {
  const router = useRouter()
  const [foundProduct, setFoundProduct] = useState<FoundProduct>(undefined)
  const [quantity, setQuantity] = useState(1)
  useEffect(() => {
    const { id } = router.query
    if (id) {
      const product = bags?.find(bag => bag.id === id)
      setFoundProduct(product)
    }
  }, [router.query])

  if (!foundProduct) {
    return <h1 className="mx-auto text-lg text-center">Loading...</h1>
  }

  const { title, subTitle, price, imagesUrl } = foundProduct
  return (
    <div className="w-full text-center   ">
      <div className="laptop:grid  laptop:grid-cols-2 w-full laptop:w-[90%] my-0 mx-auto items-center h-full laptop:mt-8">
        <div className="laptop:h-full">
          <ImgCarousel imagesUrl={imagesUrl.slice(0, 4)} />
        </div>

        <article className="flex flex-col flex-1   bg-secondary  text-left h-[60vh]">
          <div className="px-6 laptop:pt-6 pt-0 pb-3">
            <h1 className=" text-lg font-bold  truncate">{title}</h1>
            <div className="desktop:hidden block">
              <span className=" text-md font-bold">Price:</span>
              <p className="text-sm text-primary-foreground">{priceFormatter(price)}</p>
            </div>
          </div>

          <span className="px-6 text-md font-bold">Description:</span>
          <div className="px-6 text-sm text-primary-foreground max-h-[100%]   scrollbar overflow-y-auto">
            <p>{subTitle}</p>
          </div>

          <div className=" flex mt-auto justify-between   w-full   bg-secondary  px-6 py-6  gap-4">
            <div className=" desktop:flex hidden   gap-1 items-center">
              <span className=" text-md font-bold">Price:</span>
              <p className="text-sm text-primary-foreground">{priceFormatter(price)}</p>
            </div>
            <div className="flex items-center justify-center ">
              <button
                onClick={() => {
                  setQuantity(prev => (prev !== 1 ? prev - 1 : 1))
                }}
                className="relative w-8 h-8 flex items-center justify-center bg-danger">
                <AiOutlineMinus className="text-white text-center w-5 h-6" />
              </button>
              <span className="mx-3">{quantity}</span>
              <button
                onClick={() => {
                  setQuantity(prev => prev + 1)
                }}
                className="bg-success w-8 h-8 flex items-center justify-center">
                <AiOutlinePlus className="text-white text-center w-7 h-7" />
              </button>
            </div>
            <div className="w-full flex gap-4 justify-end">
              <Button className="w-1/2 whitespace-nowrap mobile:w-auto tablet:w-1/2 p-0" variant={"cta"}>
                Add to cart
              </Button>
              <Button className="w-1/2 whitespace-nowrap mobile:w-auto tablet:w-1/2 p-0" variant={"cta"}>
                Buy
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Product


