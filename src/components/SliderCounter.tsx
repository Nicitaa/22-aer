"use client"
import { useState } from "react"


export function SliderCounter(data: { className?: string, array: any }) {
  const slidesLength = data.array.length
  const [currentIndex, setCurrentIndex] = useState(Math.floor((slidesLength / 2)))
  let percent = (100 * (currentIndex + 1)) / slidesLength;

  if (typeof window !== "undefined") {
    window.addEventListener('storage', () => {
      let index = JSON.parse(localStorage.getItem('currentIndex')!) ?? Math.floor((slidesLength / 2));
      setCurrentIndex(index)
    })
  }

  return (
    <div className={data.className}>
      <h1 className="font-bold ml-1">/0{currentIndex + 1}</h1>

      <div>
        <div className="w-full laptop:w-[400px]
         mx-auto laptop:ml-0 rounded-md bg-secondary border-2 border-solid border-secondary overflow-hidden">
          <div style={{ width: `${percent}%` }} className={` h-[3px] bg-cta transition-all duration-500 ease-in-out`} />
        </div>

        <div className="px-1">
          <h1 className="font-bold text-2xl">{data.array[currentIndex]?.title}</h1>
          <p className='font-secondary text-sm text-primary-dark'>{data.array[currentIndex]?.subTitle}</p>
        </div>
      </div>
    </div>
  )
}
