import React from "react";
import { BsGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { DropdownContainer } from "./DropdownContainer";
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
    <nav className="font-primary mb-8 grid w-full max-w-[1284px] grid-cols-1 items-center gap-x-8 px-8 pt-4 text-xs font-bold text-white tablet:grid-cols-[auto,auto,1fr,auto]">
      <div className="grid w-14 grid-cols-2 gap-x-2 ">
        <button
          onClick={() => setSortOption({ grid: true, list: false })}
          className={`w-6 rounded-md ${sortOption.grid
            ? "bg-black text-white"
            : "scale-90 bg-white text-black"
            }  stroke-black stroke-2  p-1 `}
        >
          {<BsGridFill size={16} />}
        </button>
        <button
          onClick={() => setSortOption({ grid: false, list: true })}
          className={`w-6 rounded-md ${sortOption.list
            ? "bg-black text-white"
            : "scale-90 bg-white  text-black"
            }  stroke-black stroke-2  p-1 `}
        >
          {<FaListUl size={16} />}
        </button>
      </div>
      <p>{productsCount} Products Found</p>
      <hr className=" h-1 w-full border-t border-white" />
      <DropdownContainer>
        <div className="flex flex-col gap-4 px-4 py-2">
          <h1>Sort by:</h1>

          <div className="flex flex-row gap-x-8">
            <div className="flex flex-col gap-y-2">
              <h1>Name A to Z</h1>
              <h1>Name Z to A</h1>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1>Price low to high</h1>
              <h1>Price high to low</h1>
            </div>
          </div>

          <div className="flex flex-row gap-x-8">
            <div className="flex flex-col gap-y-2">
              <h1>Price</h1>
              <div className="flex flex-row items-center gap-x-2">
                <h1>Input component</h1>
                <h1>-</h1>
                <h1>Input component</h1>
              </div>
              <h1>Slider</h1>
            </div>
            <div>
              <h1>Color:</h1>
              <div className='grid grid-cols-2'>
                <div>
                  <div className="w-[24px] h-[24px] bg-primary-darker" />
                  Black
                </div>
                <div>
                  <div className="w-[24px] h-[24px] bg-primary-darker" />
                  White
                </div>
                <div>
                  <div className="w-[24px] h-[24px] bg-primary-darker" />
                  Gray
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <button>Clear all filters</button>
              <button>Create own bag</button>
            </div>
          </div>


        </div>
      </DropdownContainer>
    </nav>
  );
};

export default ProductsHeader;
