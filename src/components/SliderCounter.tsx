"use client"

import { topSales } from "../constant/topSales"
import { Container } from "./Container"
import { useState } from "react"

export function SliderCounter(data: { slidesLength: number, className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(Math.floor((data.slidesLength / 2)))
  let percent = (100 * (currentIndex + 1)) / data.slidesLength;

  if (typeof window !== "undefined") {
    window.addEventListener('storage', () => {
      let index = JSON.parse(localStorage.getItem('currentIndex')!) ?? Math.floor((data.slidesLength / 2));
      setCurrentIndex(index)
    })
  }

  return (
    <Container className={data.className}>
      <h1 className="font-bold ml-1">/0{currentIndex + 1}</h1>

      <div>
        <div className="w-full laptop:w-[50%] mx-auto rounded-md bg-secondary border-2 border-solid border-secondary overflow-hidden">
          <div style={{ width: `${percent}%` }} className={` h-[3px] bg-cta transition-all duration-500 ease-in-out`} />
        </div>

        <div className="px-1">
          <h1 className="font-bold text-2xl">{topSales[currentIndex]?.title}</h1>
          <p className='font-secondary text-sm text-primary-dark'>{topSales[currentIndex]?.subTitle}</p>
        </div>
      </div>
    </Container>
  )
}
