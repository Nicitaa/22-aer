import Image from "next/image"
import Link from "next/link"
import { BiSolidTrashAlt } from "react-icons/bi"
import { CartItem } from "~/components"
const Cart = () => {
  return (
    <main className="flex h-full min-h-screen flex-col items-center">
      <section className="mx-auto my-0 w-full max-w-[1062px] bg-secondary  tablet:px-0 rounded-t-xl">
        <div className="tablet:max-h-[390px] max-h-[320px] overflow-y-auto scrollbar">
          <table className=" rounded-xl w-full ">
            <tr className="text-small tablet:text-medium font-bold">
              <th className="py-8">Name</th>
              <th className="py-8">Price</th>
              <th className="py-8">Quantity</th>
              <th className="py-8">Subtotal</th>
            </tr>
            <tbody className="bg-secondary">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </tbody>
          </table>
        </div>
        <div className="relative w-full h-full text-xs tablet:text-small font-bold bg-secondary rounded-b-xl">
          <Link
            className="bg-cta top-8  w-fit rounded-xl flex items-center justify-center absolute py-2 px-7 left-8"
            href={`products`}
          >
            Back to products
          </Link>
          <button className="bg-cta-danger  w-fit rounded-xl flex items-center justify-center absolute py-2  top-8 right-8 px-7">
            Clear Cart
          </button>
          <button className="bg-cta-success  w-fit rounded-xl flex items-center justify-center absolute py-2 px-7 bottom-12 right-8">
            Clear Cart
          </button>
        </div>
      </section>
    </main>
  )
}

export default Cart
