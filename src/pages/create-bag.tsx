import Image from "next/image"
import React, { useState } from "react"
import { Dropdown } from "~/components/pages/create-bag"

type Props = {}

export default function createBag({}: Props) {
  const bagFeatures = ["Charger", "Weather Resistant", "Laptop Cradle", "Water bottle pocket"]
  const [selectedBagFeatures, setSelectedBagFeatures] = useState([bagFeatures[0]] as string[])
  const bagColours = ["Black", "Gray", "White"]
  const [selectedBagColours, setSelectedBagColours] = useState([bagColours[0]] as string[])
  const bagTypes = ["School bag", "Business bag", "Travel bag", "Pocket"]
  const [selectedBagTypes, setSelectedBagTypes] = useState([bagTypes[0]] as string[])
  return (
    <>
      <div className="flex laptop:hidden flex-col justify-center items-center max-w-2xl w-[80vw] mx-auto text-center space-y-4">
        <h1 className="text-primary text-lg font-bold mt-40">To create your own bag, download app</h1>
        <Image
          src="/images/google-play-badge.png"
          width={150}
          height={50}
          alt="Google Play"
          className="text-lg w-1/2 min-w-[150px]"
        />
        <Image
          src="/images/apple-badge.webp"
          width={150}
          height={50}
          alt="App Store"
          className="text-lg w-1/2 min-w-[150px]"
        />
      </div>
      <div className="max-w-7xl w-[80vw] mx-auto space-x-2 hidden laptop:flex mt-12 h-[60vh] ">
        <div className="flex flex-col items-start bg-secondary grow basis-1/3 p-4 border-2 overflow-y-scroll ">
          <h2 className="text-lg font-bold mb-12">Create a bag</h2>
          <h6 className="text-sm  px-2">Features:</h6>
          <Dropdown
            options={bagFeatures}
            selectedOptions={selectedBagFeatures}
            setSelectedOptions={setSelectedBagFeatures}
          />
          <h6 className="text-sm  px-2">Colours:</h6>
          <Dropdown
            options={bagColours}
            selectedOptions={selectedBagColours}
            setSelectedOptions={setSelectedBagColours}
          />
        </div>
        <div className="flex flex-col bg-secondary grow-[2] basis-2/3 p-4">
          <div className="flex just-evenly items-center">
            <h6 className="font-light">Choose bag type</h6>
          </div>
        </div>
      </div>
    </>
  )
}
