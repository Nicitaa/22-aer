import { BiSolidTrashAlt } from "react-icons/bi"
import Image from "next/image"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"
const CartItem = () => {
  const [quantity, setQuantity] = useState(1)

  return (
    <tr className=" text-xs tablet:text-md">
      <td className="pt-8 flex gap-3 items-center  pl-3 tablet:pl-8 ">
        <Image
          className="tablet:w-[100px] w-[50px]"
          src="/images/products/original/flat-bag-1b.webp"
          alt="Placeholder Image"
          width={200}
          height={200}
          layout="intrinsic"
          objectFit="cover"
          objectPosition="center"
        />
        <h5 className="font-bold text-left tablet:text-center">Green bag</h5>
      </td>
      <td className="pt-8 font-bold text-center text-cta ">$399,99</td>
      <td className="pt-8 font-bold text-center ">
        <div className="flex items-center justify-center ">
          <button className=" tablet:w-8 tablet:h-8 w-4 h-4 flex items-center justify-center bg-danger">
            <AiOutlineMinus
              className="text-white text-center w-5 h-6"
              onClick={() => {
                setQuantity(prev => (prev !== 1 ? prev - 1 : 1))
              }}
            />
          </button>
          <span className="mx-3">{quantity}</span>
          <button className="bg-success tablet:w-8 tablet:h-8 w-4 h-4 flex items-center justify-center">
            <AiOutlinePlus
              className="text-white text-center w-7 h-7"
              onClick={() => {
                setQuantity(prev => prev + 1)
              }}
            />
          </button>
        </div>
      </td>
      <td className="pt-8 font-bold text-center tablet:table-cell hidden">$399.99</td>
      <td className="pt-8 font-bold">
        <button className="bg-danger tablet:w-10 tablet:h-10 w-6 h-6 tablet:rounded-xl rounded-md flex items-center justify-center mx-3">
          <BiSolidTrashAlt className="text-white tablet:w-6 tablet:h-6 w-4 h-4" />
        </button>
      </td>
    </tr>
  )
}

export default CartItem
