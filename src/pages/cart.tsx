import { CartItem } from "~/components"
import { Button } from "~/components/ui"
const Cart = () => {
  return (
    <div className="flex h-[80vh] flex-col items-center px-6 tablet:px-0">
      <section className="mx-auto h-[90%] my-0 w-full max-w-[1062px] bg-secondary rounded-xl">
        <div className="tablet:h-[65%] h-[60%] overflow-y-auto scrollbar rounded-t-xl">
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
        <div className="tablet:h-[35%] h-[40%] min-h-[180px] w-full text-xs tablet:text-sm font-bold rounded-b-xl flex flex-row justify-between tablet:px-8 px-3 tablet:py-8 py-3">
          <div>
            <Button href="products">Back to products</Button>
          </div>
          <div className=" flex justify-between  flex-col">
            <Button variant={"danger"} className="text-white  self-start ">
              Clear Cart
            </Button>
            <Button variant={"success"} className="text-white  self-end">
              Submit
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart
