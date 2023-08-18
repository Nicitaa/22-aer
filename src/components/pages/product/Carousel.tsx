"use client"
import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ImgCarousel = ({ imagesUrl }: { imagesUrl: string[] }) => {
  return (
    <Carousel
      autoPlay
      showStatus={false}
      showArrows={true}
      infiniteLoop
      selectedItem={0}
      className="h-full tablet:h-[110%]">
      {imagesUrl.map((imageUrl, index) => {
        return (
          <div key={index} className=" tablet:h-[68vh]">
            {/*Doesn't work properly with Next.js <Image/>*/}
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={imageUrl} className="h-full object-cover object-center" />
          </div>
        )
      })}
    </Carousel>
  )
}
export default ImgCarousel
