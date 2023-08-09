"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import bags from "~/constant/bags.json"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import router from "next/router"
import { useRouter } from "next/router"
import { priceFormatter } from "~/utils/priceFormatter"
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
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const { id } = router.query
    if (id) {
      const product = bags?.find(bag => bag.id === id)
      setFoundProduct(product)
      setCurrentImage(Math.floor(product?.imagesUrl?.length ? product?.imagesUrl?.length / 2 : 0))
    }
  }, [router.query])

  if (!foundProduct) {
    return <h1 className="mx-auto text-lg text-center">Loading...</h1>
  }

  const { title, subTitle, price, imagesUrl } = foundProduct
  return (
    <div className=" h-[85vh]">
      <section className="relative laptop:flex mx-auto my-0 laptop:h-[80%]   w-full max-w-[1384px] laptop:px-8 tablet:px-0">
        <div className="laptop:w-1/2 h-full w-full px-8 laptop:px-0">
          <Image
            className=" duration-300 w-full h-full object-cover object-center"
            src={imagesUrl[currentImage] ?? ""}
            width={800}
            height={1400}
            alt="Placeholder Image"
          />
          <div className="flex absolute laptop:w-1/2 w-10/12  laptop:h-[80px] h-[60px] mt-6">
            <div className="flex w-full items-center justify-between">
              <IoIosArrowBack
                className="h-[30px] laptop:h-[80px] w-auto hover:fill-cta active:scale-150 duration-300"
                onClick={() => {
                  setCurrentImage(prev => (prev === 0 ? imagesUrl.length - 1 : prev - 1))
                }}
              />
              {imagesUrl.map((imageUrl, index) => {
                return (
                  <Image
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    className={`duration-300  w-16 laptop:w-24 ${currentImage === index && "scale-125"}`}
                    src={imageUrl ?? ""}
                    width={100}
                    height={800}
                    alt="Placeholder Image"
                    key={index}
                    layout="intrinsic"
                    objectFit="cover"
                    objectPosition="center"
                    onClick={() => setCurrentImage(index)}
                  />
                )
              })}
              <IoIosArrowForward
                className="h-[30px] laptop:h-[80px] w-auto hover:fill-cta active:scale-150 duration-300"
                onClick={() => {
                  setCurrentImage(prev => (prev === imagesUrl.length - 1 ? 0 : prev + 1))
                }}
              />
            </div>
          </div>
        </div>
        {/* About item container */}
        <div className=" relative laptop:w-1/2 w-full laptop:bg-secondary mt-24 laptop:mt-0">
          <article className=" flex flex-col py-6 px-8">
            <h1 className=" text-lg font-bold">{title}</h1>
            <span className=" text-md font-bold">Price</span>
            <p className="scrollbar text-sm text-primary-dark h-full max-h-[350px] overflow-y-auto">
              {priceFormatter(price)}
            </p>
            <span className=" text-md font-bold">Description:</span>
            <p className="scrollbar text-sm text-primary-darker h-full max-h-[350px] overflow-y-auto">
              {subTitle.substring(0, 150)}
            </p>
          </article>
          {/* button container */}
          <div className=" flex  justify-between  w-full laptop:absolute bottom-0 bg-secondary laptop:py-8 px-6 py-6 laptop:text-md text-xs font-bold gap-7">
            <div className="flex items-center justify-center ">
              <button className="relative w-8 h-8 flex items-center justify-center bg-cta-danger">
                <AiOutlineMinus
                  className="text-white text-center w-5 h-6"
                  onClick={() => {
                    setQuantity(prev => (prev !== 1 ? prev - 1 : 1))
                  }}
                />
              </button>
              <span className="mx-3">{quantity}</span>
              <button className="bg-cta-success w-8 h-8 flex items-center justify-center">
                <AiOutlinePlus
                  className="text-white text-center w-7 h-7"
                  onClick={() => {
                    setQuantity(prev => prev + 1)
                  }}
                />
              </button>
            </div>

            <button className="bg-cta rounded-xl w-1/2 flex items-center justify-center py-2 laptop:px-7 bottom-12 right-8">
              Add to cart
            </button>
            <button className="bg-cta rounded-xl w-1/2 flex items-center justify-center py-2 laptop:px-7 bottom-12 right-8">
              Buy
            </button>
          </div>
          {/*End of button container */}
        </div>
        {/* End of about item container */}
      </section>
    </div>
  )
}

export default Product
