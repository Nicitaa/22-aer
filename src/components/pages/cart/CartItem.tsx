import { BiSolidTrashAlt } from "react-icons/bi"
import Image from "next/image"
const CartItem = () => {
  return (
    <tr className=" text-xs tablet:text-md">
      <td className="pt-8 tablet:grid grid-cols-2 gap-4 items-center tablet:w-full max-w-[250px] pl-2 tablet:pl-8 ">
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
        <h5 className="font-bold tablet:w-[200px] text-left tablet:text-center">Name</h5>
      </td>
      <td className="pt-8 font-bold text-center">$399,99</td>
      <td className="pt-8 font-bold text-center">- 1 +</td>
      <td className="pt-8 font-bold text-center">$399.99</td>
      <td className="pt-8 ">
        <button className="bg-cta-danger w-10 h-10 rounded-xl flex items-center justify-center">
          <BiSolidTrashAlt className="text-white w-6 h-6" />
        </button>
      </td>
    </tr>
  )
}

export default CartItem
