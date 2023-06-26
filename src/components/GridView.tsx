import React from "react";
import Image from "next/image";
import Link from "next/link";
type Product = {
  name: string;
  price: number;
  id: number;
  description: string;
  image: string;
};
const GridView = ({ products }: { products: Product[] }) => {
  return (
    <section className=" scrollbar grid max-h-[750px] grid-cols-2 gap-4 overflow-y-scroll tablet:grid-cols-4">
      {products.map((product, index) => (
        <section
          key={index}
          className="group relative mx-4 mb-8 overflow-hidden rounded-t-2xl"
        >
          <Link href={`SingleProduct/${product.id}`}>
            <Image
              className=" duration-300 group-hover:scale-125"
              src={product.image}
              alt="Placeholder Image"
              width={600}
              height={600}
              layout="intrinsic"
              objectFit="cover"
              objectPosition="center"
            />
          </Link>
          <div className="font-primary absolute bottom-0 flex w-full justify-between bg-gray-800 bg-opacity-50  px-1 text-[14px] capitalize text-white tablet:text-xs laptop:text-medium ">
            <span>{product.name}</span>
            <span className="text-cta">
              ${(product.price / 100).toFixed(2)}
            </span>
          </div>
        </section>
      ))}
    </section>
  );
};

export default GridView;
