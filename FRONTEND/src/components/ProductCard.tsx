import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  name,
  price,
  id,
}: {
  name: string;
  price: number;
  id: number;
}) => {
  return (
    <section className="group  relative mx-4 mb-8 overflow-hidden rounded-t-2xl">
      <Link href={`SingleProduct/${id}`}>
        <Image
          className=" duration-300 group-hover:scale-125"
          src="/images/products/original/flat-bag-1b.webp"
          alt="Placeholder Image"
          width={600}
          height={600}
          layout="intrinsic"
          objectFit="cover"
          objectPosition="center"
        />
      </Link>
      <div className="absolute bottom-0 flex w-full justify-between bg-gray-800 bg-opacity-50  px-1 font-primary text-xl capitalize text-white ">
        <span>{name}</span>
        <span className="text-cta">${(price / 100).toFixed(2)}</span>
      </div>
    </section>
  );
};

export default ProductCard;
