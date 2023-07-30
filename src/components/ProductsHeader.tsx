import { BsGridFill } from "react-icons/bs"
import { FaListUl } from "react-icons/fa"
import { AiOutlineDown } from "react-icons/ai"

import { DropdownContainer } from "./DropdownContainer"
import { Checkbox, Input, RadioButton } from "./ui"
import { Button } from "./ui/Button"
import { useState } from "react"

interface navProps {
  sortOption: { grid: boolean; list: boolean }
  setSortOption: React.Dispatch<React.SetStateAction<{ grid: boolean; list: boolean }>>
  productsCount: number
}
const ProductsHeader = ({ sortOption, setSortOption, productsCount }: navProps) => {
  //fix  prices when ready.
  const priceFloor = 0
  const [minPrice, setMinPrice] = useState<number>(priceFloor)
  const priceCeiling = 100
  const [maxPrice, setMaxPrice] = useState<number>(priceCeiling)
  const [priceRange, setPriceRange] = useState(50)
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(parseInt(e.target.value, 10))
  }
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(parseInt(e.target.value, 10))
  }
  //temp
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(parseInt(e.target.value, 10))
  }

  return (
    <nav className="font-primary mb-8 grid w-full max-w-[1284px] grid-cols-1 items-center gap-x-8 px-8 pt-4 text-xs font-bold text-white tablet:grid-cols-[auto,auto,1fr,auto]">
      <div className="grid w-14 grid-cols-2 gap-x-2 ">
        <button
          onClick={() => setSortOption({ grid: true, list: false })}
          className={`w-6 rounded-md ${
            sortOption.grid ? "bg-black text-white" : "scale-90 bg-white text-black"
          }  stroke-black stroke-2  p-1 `}
        >
          {<BsGridFill size={16} />}
        </button>
        <button
          onClick={() => setSortOption({ grid: false, list: true })}
          className={`w-6 rounded-md ${
            sortOption.list ? "bg-black text-white" : "scale-90 bg-white  text-black"
          }  stroke-black stroke-2  p-1 `}
        >
          {<FaListUl size={16} />}
        </button>
      </div>
      <p>{productsCount} Products Found</p>
      <hr className=" h-1 w-full border-t border-white" />
      {/* Dropdown */}
      <DropdownContainer
        className="top-[30px] right-[-16px] tablet:right-[0px] w-[83vw] tablet:w-[750px]"
        childrenTrigger={
          <>
            <h1 className="text-xs font-bold mr-2">Sort by</h1> <AiOutlineDown />
          </>
        }
      >
        <div className="flex flex-col gap-4 text-center tablet:text-start px-4 py-2 text-xs font-bold tablet:text-sm">
          <h1>
            Sort by<span className="hidden tablet:inline-block">:</span>
          </h1>

          {/* Radio buttons */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-y-4">
            <div className="flex flex-col items-center tablet:items-start gap-y-2">
              <RadioButton inputName="name" label="Name A to Z" />
              <RadioButton inputName="name" label="Name Z to A" />
            </div>
            <div className="flex flex-col items-center tablet:items-start gap-y-2">
              <RadioButton inputName="price" label="Price low to high" />
              <RadioButton inputName="price" label="Price high to low" />
            </div>
          </div>

          {/* pice - color - buttons */}
          <div className="grid grid-cols-1 gap-x-8 tablet:grid-cols-2 laptop:grid-cols-3">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-start">Price:</h1>
              <div className="flex flex-row items-center gap-x-2">
                <Input
                  placeholder="Min"
                  size="sm"
                  type="number"
                  label="Minimum Price"
                  id="min-price"
                  labelHidden={true}
                  value={minPrice}
                  handleChange={handleMinPriceChange}
                />
                <h1>-</h1>
                <Input
                  placeholder="Max"
                  size="sm"
                  type="number"
                  label="Max Price"
                  id="max-price"
                  labelHidden={true}
                  value={maxPrice}
                  handleChange={handleMaxPriceChange}
                />
              </div>
              {/***NOTE. I recommend making a new component for sliders. This slider is being heavily affected by default styles of Input */}
              <Input
                type="range"
                label="Price Range"
                labelHidden={false}
                id="price-range"
                handleChange={handlePriceRangeChange}
                value={priceRange}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-start">Color:</h1>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 tablet:gap-0">
                <div className="flex">
                  <Checkbox label="White" />
                </div>
                <div className="flex">
                  <Checkbox label="Gray" />
                </div>
                <div className="flex">
                  <Checkbox label="Black" />
                </div>
              </div>
            </div>
            <div className="col-span-2 laptop:col-span-1 flex flex-col justify-end gap-y-2">
              <Button>Clear all filters</Button>
              <Button>Create own bag</Button>
            </div>
          </div>
        </div>
      </DropdownContainer>
    </nav>
  )
}

export default ProductsHeader
