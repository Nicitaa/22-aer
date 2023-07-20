"use client"
import { useState } from "react"

interface ISliderCounter {
  className?: string
  array: any
  progressbarClassName?: string
  progressfillClassname?: string
  titleClassName?: string
  subTitleClassName?: string
  counterClassName?: string
}

export function SliderCounter({ className, array, progressbarClassName, progressfillClassname,
  titleClassName, subTitleClassName, counterClassName }: ISliderCounter) {
  const slidesLength = array.length
  const [currentIndex, setCurrentIndex] = useState(Math.floor((slidesLength / 2)))
  let percent = (100 * (currentIndex + 1)) / slidesLength;

  if (typeof window !== "undefined") {
    window.addEventListener('storage', () => {
      let index = JSON.parse(localStorage.getItem('currentIndex')!) ?? Math.floor((slidesLength / 2));
      setCurrentIndex(index)
    })
  }

  return (
    <div className={className}>
      <h1 className={`${counterClassName ? counterClassName : 'text-white text-[1.5rem]'} ml-1`}>/0{currentIndex + 1}</h1>

      <div>
        <div className={`${progressbarClassName}
         mx-auto laptop:ml-0 rounded-md border-2 border-solid overflow-hidden`}>
          <div style={{ width: `${percent}%` }} className={` ${progressfillClassname ? progressfillClassname : 'h-[3px] bg-red-500'
            } transition-all duration-500 ease-in-out`} />
        </div>

        <div className="px-1">
          <h1 className={titleClassName ? titleClassName : 'text-white text-[1.5rem]'}>{array[currentIndex]?.title}</h1>
          <p className={subTitleClassName ? subTitleClassName : 'text-gray-500 text-[0.4rem]'}>{array[currentIndex]?.subTitle}</p>
        </div>
      </div>
    </div>
  )
}
