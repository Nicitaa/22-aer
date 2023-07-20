"use client"
import { useState } from "react"

interface ISliderCounter {
  className?: string
  array: any
  progressbarClassName?: string
  progressfillClassname?: string
}

export function SliderCounter(data: ISliderCounter) {
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
        <div className={`${data.progressbarClassName}
         mx-auto laptop:ml-0 rounded-md border-2 border-solid overflow-hidden`}>
          <div style={{ width: `${percent}%` }} className={` ${data.progressfillClassname} transition-all duration-500 ease-in-out`} />
        </div>

        <div className="px-1">
          <h1 className="font-bold text-2xl">{data.array[currentIndex]?.title}</h1>
          <p className='font-secondary text-sm text-primary-dark'>{data.array[currentIndex]?.subTitle}</p>
        </div>
      </div>
    </div>
  )
}
