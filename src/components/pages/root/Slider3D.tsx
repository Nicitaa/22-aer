"use client"

import Image from "next/image"
import { useEffect, useState, useCallback } from "react"

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import type { IconType } from "react-icons"
import type { ITopSales } from "~/interfaces/ITopSales"

interface ISlider {
  className?: string
  label?: string
  labelClassName?: string
  arrowLeft?: IconType
  arrowRight?: IconType
  arrowSize?: number
  array: ITopSales[]
}

export function Slider3D({
  className,
  label,
  labelClassName,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowSize,
  array,
}: ISlider) {
  const [currentSlide, setCurrentSlide] = useState(Math.floor(array.length / 2))

  const slideTo = useCallback(
    (index: number) => {
      if (index > array.length - 1) {
        index = 0
      } else if (index < 0) {
        index = array.length - 1
      }

      document.querySelectorAll(".image-wrapper").forEach((image: Element) => {
        const width = image.getBoundingClientRect().width
          ; (image as HTMLDivElement).style.transform = `translateX(${(array.length - index - array.length / 2 + 0.5) * width - width
            }px)`

        document.querySelectorAll(".slider-image").forEach((image: Element) => {
          image.classList.remove("slide-image-active")
        })

        document.querySelectorAll(".slider-image")[index]?.classList.add("slide-image-active", "aspect-video")
      })

      setCurrentSlide(index)
      localStorage.setItem("currentIndex", JSON.stringify(index));
      window.dispatchEvent(new Event("storage"))
    },
    [array.length, setCurrentSlide]
  )

  const changeChild = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        slideTo(currentSlide - 1)
      } else if (e.key === "ArrowRight") {
        slideTo(currentSlide + 1)
      }
    },
    [currentSlide, slideTo]
  )

  useEffect(() => {
    document.addEventListener("keydown", changeChild)

    return function cleanup() {
      document.removeEventListener("keydown", changeChild)
    }
  })

  return (
    <div
      onKeyUp={e => {
        if (e.key === "ArrowLeft") {
          slideTo(currentSlide - 1)
        } else if (e.key === "ArrowRight") {
          slideTo(currentSlide + 1)
        }
      }}
      className={`${className as string} overflow-hidden`}>
      <h1 className={`absolute top-[5%] left-1/2 -translate-x-1/2 ${labelClassName as string}`}>{label}</h1>
      <div className="relative flex flex-col py-8 pt-16 tablet:pt-20 tablet:gap-y-4">
        <div className="relative flex flex-none justify-center items-center w-[100vw]">
          <Images slideTo={slideTo} array={array} />
        </div>

        <div className="text-center flex justify-center w-full items-center gap-8">
          <span
            onClick={() => {
              slideTo(currentSlide - 1)
            }}
            className="text-primary cursor-pointer ">
            {ArrowLeft ? (
              <ArrowLeft size={arrowSize ? arrowSize : 32} />
            ) : (
              <PiCaretLeftBold size={arrowSize ? arrowSize : 32} />
            )}
          </span>

          <span
            onClick={() => {
              slideTo(currentSlide + 1)
            }}
            className="text-primary cursor-pointer">
            {ArrowRight ? (
              <ArrowRight size={arrowSize ? arrowSize : 32} />
            ) : (
              <PiCaretRightBold size={arrowSize ? arrowSize : 32} />
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

function Images(data: { slideTo: (index: number) => void; array: ITopSales[] }) {
  return (
    <>
      {data.array?.map((image: { imgSrc: string }, index: number) => (
        <div
          onClick={() => {
            data.slideTo(index)
          }}
          key={index}
          className={`image-wrapper aspect-video flex-none grid`}>
          <Image
            placeholder="blur"
            blurDataURL={image.imgSrc}
            width={"480"}
            height={"320"}
            src={image.imgSrc}
            alt="image"
            className={`slider-image transition-all duration-1000 aspect-video w-48 object-cover cursor-pointer
             ${index === Math.floor(data.array.length / 2) ? "slide-image-active aspect-video" : ""
              }`}
            key={image.imgSrc}
          />
        </div>
      ))}
    </>
  )
}
