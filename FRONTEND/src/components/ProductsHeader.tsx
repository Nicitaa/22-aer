import React from "react";
import { BsGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
interface navProps {
  sortOption: { grid: boolean; list: boolean };
  setSortOption: React.Dispatch<
    React.SetStateAction<{ grid: boolean; list: boolean }>
  >;
  productsCount: number;
}
const ProductsHeader = ({
  sortOption,
  setSortOption,
  productsCount,
}: navProps) => {
  return (
    <nav className="mb-8 grid w-full max-w-[1284px] grid-cols-1 items-center gap-x-8 px-8 pt-4 font-primary text-base font-bold text-white tablet:grid-cols-[auto,auto,1fr,auto]">
      <div className="grid w-14 grid-cols-2 gap-x-2 ">
        <button
          onClick={() => setSortOption({ grid: true, list: false })}
          className={`w-6 rounded-md ${
            sortOption.grid
              ? "bg-black text-white"
              : "scale-90 bg-white text-black"
          }  stroke-black stroke-2  p-1 `}
        >
          {<BsGridFill size={16} />}
        </button>
        <button
          onClick={() => setSortOption({ grid: false, list: true })}
          className={`w-6 rounded-md ${
            sortOption.list
              ? "bg-black text-white"
              : "scale-90 bg-white  text-black"
          }  stroke-black stroke-2  p-1 `}
        >
          {<FaListUl size={16} />}
        </button>
      </div>
      <p>{productsCount} Products Found</p>
      <hr className=" h-1 w-full border-t border-white" />
      <form>
        <label htmlFor="sort">Sort By</label>
        <select
          className=" border-transparent  bg-transparent px-2 py-1 text-base capitalize"
          name="sort"
          id="sort"
        >
          <option className="text-black" value="sort-opt">
            sort-opt
          </option>
          <option className="text-black" value="sort-opt">
            sort-opt
          </option>
          <option className="text-black" value="sort-opt">
            sort-opt
          </option>
        </select>
      </form>
    </nav>
  );
};

export default ProductsHeader;
