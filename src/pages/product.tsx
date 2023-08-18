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
    <div className=" h-[85vh]">
      <section className=" laptop:flex mx-auto my-0 laptop:h-[80%] h-[40%]   w-full max-w-[1384px] laptop:px-8 tablet:px-0">
        <div className="laptop:w-1/2 h-full w-full">
          <ImgCarousel imagesUrl={imagesUrl} />
        </div>
        {/* About item container */}
        <div className=" relative laptop:w-1/2 w-full laptop:h-full laptop:bg-secondary mt-16 laptop:mt-0">
          <article className=" flex flex-col py-6 px-8 h-full">
            <h1 className=" text-lg font-bold">{title}</h1>
            <span className=" text-md font-bold">Price</span>
            <p className="text-sm text-primary-foreground">{priceFormatter(price)}</p>
            <span className=" text-md font-bold">Description:</span>
            <p className="scrollbar text-sm text-primary-foreground laptop:h-[38%] monitor:h-[60%] h-[30vh] overflow-y-auto">
              {subTitle}
            </p>
          </article>
          {/* button container */}
          <div className=" flex  justify-between  w-full laptop:absolute bottom-0 bg-secondary laptop:py-8 px-6 py-6 laptop:text-md text-xs font-bold gap-7">
            <div className="flex items-center justify-center ">
              <button className="relative w-8 h-8 flex items-center justify-center bg-danger">
                <AiOutlineMinus
                  className="text-white text-center w-5 h-6"
                  onClick={() => {
                    setQuantity(prev => (prev !== 1 ? prev - 1 : 1))
                  }}
                />
              </button>
              <span className="mx-3">{quantity}</span>
              <button className="bg-success w-8 h-8 flex items-center justify-center">
                <AiOutlinePlus
                  className="text-white text-center w-7 h-7"
                  onClick={() => {
                    setQuantity(prev => prev + 1)
                  }}
                />
              </button>
            </div>
            <Button className="tablet:w-1/2"> Add to cart</Button>
            <Button className="tablet:w-1/2">Buy</Button>
          </div>
          {/*End of button container */}
        </div>
        {/* End of about item container */}
      </section>
    </div>
  )
}

export default Product
