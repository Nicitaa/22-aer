import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import { topSales } from '../constant/topSales'
import Image from 'next/image'


interface ITopSales {
  imgSrc: string
}[]

export function Slider() {
  return (
    <div
      className="relative bg-secondary h-[40vh] py-4 
    flex flex-col gap-4 items-center
    tablet:py-8 tablet:h-[30vh]
    laptop:py-12 overflow-hidden"
    >
      <h1 className="font-primary font-bold text-medium">Top Sales</h1>

      <div className="absolute top-1/2 -translate-y-1/2 flex flex-row items-center gap-2">
        {topSales.map((image: ITopSales) => (
          <Image src={image.imgSrc} alt='image' width={200} height={200} key={image.imgSrc} />
        ))}
        <div className="absolute -left-[30vw] w-[25vh] h-[10vh] bg-primary-darker" />
        <div className="w-[50vw] h-[20vh] bg-primary-darker" />

        <PiCaretLeftBold size={48} />
        <PiCaretRightBold size={48} />
      </div>

    </div>
  )
}
