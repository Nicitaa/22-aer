import { CartItem } from "~/components"
import { Button } from "~/components/ui"
const Cart = () => {
  return (
    <div className="flex h-[85vh] flex-col items-center px-6 tablet:px-0">
      <section className="mx-auto laptop:h-[70vh] h-[85vh] my-0 w-full max-w-[1062px] bg-secondary rounded-xl">
        <div className="h-[65%] overflow-y-auto scrollbar rounded-t-xl">
          <table className="bg-secondary rounded-xl border-b-[64px] border-transparent rounded-t-xl w-full">
            <thead>
              <tr className="text-sm tablet:text-md font-bold sticky top-0 bg-black rounded-t-xl">
                <th className="py-8 order-1">Item</th>
                <th className="py-8 order-2 ">Price</th>
                <th className="py-8 order-3">Quantity</th>
                <th className="py-8 order-4 tablet:block hidden">Subtotal</th>
                <th className=""></th>
              </tr>
            </thead>
            <tbody>
              <CartItem key={1} />
              <CartItem key={2} />
              <CartItem key={3} />
              <CartItem key={4} />
              <CartItem key={5} />
              <CartItem key={6} />
            </tbody>
          </table>
        </div>
        <div className=" relative h-[35%] w-full text-xs tablet:text-sm font-bold rounded-b-xl">
          <div className="">
            <Button href="products" className="absolute tablet:left-8 top-8 left-3">
              Back to products
            </Button>
            <Button variant={"danger"} className="absolute text-white  top-8 tablet:right-8 right-3">
              Clear Cart
            </Button>
          </div>
          <Button variant={"success"} className="absolute  bottom-12 tablet:right-8 right-3">
            Submit
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Cart
