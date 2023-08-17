import { BiSolidTrashAlt } from "react-icons/bi"
import Image from "next/image"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"
const CartItem = () => {
  const [quantity, setQuantity] = useState(1)

  return (
    <tr className=" text-xs tablet:text-md">
      <td className="pt-8 tablet:grid grid-cols-2 gap-4 items-center tablet:w-full max-w-[250px] pl-2 tablet:pl-8 ">
        <Image
          className="tablet:w-[100px] w-[50px]"
          src={"/images/products/original/flat-bag-1b.webp"}
          alt="Placeholder Image"
          width={200}
          height={200}
          layout="intrinsic"
          objectFit="cover"
          objectPosition="center"
        />
        <h5 className="font-bold tablet:w-[200px] text-left tablet:text-center">Name</h5>
      </td>
      <td className="pt-8 font-bold text-center">$399,99</td>
      <td className="pt-8 font-bold text-center tablet:table-cell hidden">
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
      <td className="pt-8 font-bold text-center">$399.99</td>
      <td className="pt-8 font-bold text-center ">
        <button className="bg-danger w-10 h-10 rounded-xl flex items-center justify-center">
          <BiSolidTrashAlt className="text-white w-6 h-6" />
        </button>
      </td>
    </tr>
  )
}

export default CartItem
