import { ProductCard } from "~/components";
const ProductsPage = () => {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-center bg-bg-primary">
     
      <section className="mx-auto my-0  w-full max-w-[1284px] px-8 tablet:px-0">
        <section className="grid max-h-[750px] grid-cols-2 gap-4 overflow-y-scroll tablet:grid-cols-4 ">
          <ProductCard name="black bag" price={39999} id={1} />
          <ProductCard name="black bag" price={39999} id={1} />
          <ProductCard name="black bag" price={39999} id={1} />
          <ProductCard name="black bag" price={39999} id={1} />
          <ProductCard name="black bag" price={39999} id={1} />
          <ProductCard name="black bag" price={39999} id={1} />
          <ProductCard name="black bag" price={39999} id={1} />
          <ProductCard name="black bag" price={39999} id={1} />
          <ProductCard name="black bag" price={39999} id={1} />
          <ProductCard name="black bag" price={39999} id={1} />
          <ProductCard name="black bag" price={39999} id={1} />
        </section>
      </section>
    </main>
  );
};

export default ProductsPage;
