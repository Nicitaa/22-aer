import Link from "next/link"
import { CartItem } from "~/components"
const Cart = () => {
  return (
    <div className="flex h-full min-h-screen flex-col items-center">
      <section className="mx-auto my-0 w-full max-w-[1062px] bg-secondary  tablet:px-0 rounded-t-xl">
        <div className="tablet:max-h-[390px] max-h-[300px] overflow-y-auto scrollbar">
          <table className="bg-secondary rounded-xl border-b-[64px] border-transparent w-full">
            <tbody>
              <tr className="text-sm tablet:text-md font-bold">
                <th className="py-8">Name</th>
                <th className="py-8">Price</th>
                <th className="py-8">Quantity</th>
                <th className="py-8">Subtotal</th>
              </tr>
              <>
                <CartItem key={1} />
                <CartItem key={2} />
                <CartItem key={3} />
                <CartItem key={4} />
                <CartItem key={5} />
                <CartItem key={6} />
              </>
            </tbody>
          </table>
        </div>
        <div className="relative w-full h-full text-xs tablet:text-sm font-bold bg-secondary rounded-b-xl">
          <Link
            className="bg-cta top-8  w-fit rounded-xl flex items-center justify-center absolute py-2 px-7 left-8"
            href={`products`}>
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
    </div>
  )
}

export default Cart
