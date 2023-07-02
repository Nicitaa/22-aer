import { useState } from "react";
import { ListView, ProductsHeader, GridView } from "../components";
import React from "react";

type Product = {
  name: string;
  price: number;
  id: number;
  description: string;
  image: string;
};
const productData: Product[] = [
  {
    name: "black bag",
    price: 39999,
    id: 1,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iure in velit debitis aperiam autem obcaecati enim maxime! Quo ut non fugiat dolore ab ratione reprehenderit beatae blanditiis laboriosam voluptatum.",
    image: "/images/products/original/flat-bag-1b.webp",
  },

  {
    name: "black bag",
    price: 39999,
    id: 2,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iure in velit debitis aperiam autem obcaecati enim maxime! Quo ut non fugiat dolore ab ratione reprehenderit beatae blanditiis laboriosam voluptatum.",
    image: "/images/products/original/flat-bag-1b.webp",
  },
  {
    name: "black bag",
    price: 39999,
    id: 3,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iure in velit debitis aperiam autem obcaecati enim maxime! Quo ut non fugiat dolore ab ratione reprehenderit beatae blanditiis laboriosam voluptatum.",
    image: "/images/products/original/flat-bag-1b.webp",
  },

  {
    name: "black bag",
    price: 39999,
    id: 4,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iure in velit debitis aperiam autem obcaecati enim maxime! Quo ut non fugiat dolore ab ratione reprehenderit beatae blanditiis laboriosam voluptatum.",
    image: "/images/products/original/flat-bag-1b.webp",
  },
  {
    name: "black bag",
    price: 39999,
    id: 5,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iure in velit debitis aperiam autem obcaecati enim maxime! Quo ut non fugiat dolore ab ratione reprehenderit beatae blanditiis laboriosam voluptatum.",
    image: "/images/products/original/flat-bag-1b.webp",
  },

  {
    name: "black bag",
    price: 39999,
    id: 6,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iure in velit debitis aperiam autem obcaecati enim maxime! Quo ut non fugiat dolore ab ratione reprehenderit beatae blanditiis laboriosam voluptatum.",
    image: "/images/products/original/flat-bag-1b.webp",
  },
  {
    name: "black bag",
    price: 39999,
    id: 7,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iure in velit debitis aperiam autem obcaecati enim maxime! Quo ut non fugiat dolore ab ratione reprehenderit beatae blanditiis laboriosam voluptatum.",
    image: "/images/products/original/flat-bag-1b.webp",
  },

  {
    name: "black bag",
    price: 39999,
    id: 8,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iure in velit debitis aperiam autem obcaecati enim maxime! Quo ut non fugiat dolore ab ratione reprehenderit beatae blanditiis laboriosam voluptatum.",
    image: "/images/products/original/flat-bag-1b.webp",
  },
  {
    name: "black bag",
    price: 39999,
    id: 9,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iure in velit debitis aperiam autem obcaecati enim maxime! Quo ut non fugiat dolore ab ratione reprehenderit beatae blanditiis laboriosam voluptatum.",
    image: "/images/products/original/flat-bag-1b.webp",
  },

  {
    name: "black bag",
    price: 39999,
    id: 10,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iure in velit debitis aperiam autem obcaecati enim maxime! Quo ut non fugiat dolore ab ratione reprehenderit beatae blanditiis laboriosam voluptatum.",
    image: "/images/products/original/flat-bag-1b.webp",
  },
];

const ProductsPage = () => {
  const [sortOption, setSortOption] = useState({ grid: true, list: false });
  return (
    <main className="flex h-full min-h-screen flex-col items-center ">
      <section className="mx-auto my-0  w-full max-w-[1284px] px-8 tablet:px-0">
        <ProductsHeader
          sortOption={sortOption}
          setSortOption={setSortOption}
          productsCount={productData.length}
        />
        {sortOption.grid && <GridView products={productData} />}
        {sortOption.list && <ListView products={productData} />}
      </section>
    </main>
  );
};

export default ProductsPage;
