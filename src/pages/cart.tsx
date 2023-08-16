import Link from "next/link"
import { CartItem } from "~/components"
import { Button } from "~/components/ui"
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
          <Button
            href='/products'>
            Back to products
          </Button>
          <Button variant='danger'>
            Clear Cart
          </Button>
          <Button variant='success-outline'>
            Submit
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Cart
