import React, { type Dispatch, type SetStateAction, useState, useEffect } from "react"
import { PiCaretDown } from "react-icons/pi"
import { Checkbox } from "~/components/ui"
import { Input } from "~/components/ui/Input"

interface DropdownProps {
  options: string[] // Array of options to show in the dropdown
  selectedOptions: string[] // Array of selected options
  setSelectedOptions: Dispatch<SetStateAction<string[]>> // Function to handle option selection
}
export default function Dropdown({ options, selectedOptions, setSelectedOptions }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }

  const handleOptionsCheckbox = (option: string) => {
    // Use the setSelectedOptions function to update the state
    setSelectedOptions(prevSelectedOptions => {
      if (prevSelectedOptions.includes(option)) {
        // If the string is already in the array, remove it
        return prevSelectedOptions.filter(item => item !== option)
      } else {
        // If the string is not in the array, add it
        return [...prevSelectedOptions, option]
      }
    })
  }
  return (
    <div className="relative max-w-[70%] w-[70%] text-xs">
      <div className="flex justify-between w-full px-2 border ">
        {/**fix the w-[188px] below. will leave for now */}
        <p className="truncate max-w-[188px] ">
          {selectedOptions.length === 0
            ? "No selections"
            : selectedOptions.map(selectedOption => {
                return <span key={selectedOption}>{selectedOption} </span>
              })}
        </p>
        <button onClick={toggleDropdown}>
          <PiCaretDown />
        </button>
      </div>
      <div className={`${!isOpen ? "h-0" : "h-auto"} overflow-hidden flex flex-col w-full`}>
        {options.map(option => {
          return (
            <div key={option} className="flex justify-between px-2 ring-secondary-foreground border">
              <p className="">{option}</p>
              <Checkbox
                isChecked={selectedOptions.includes(option)}
                onChange={() => handleOptionsCheckbox(option)}
                label={option}
                labelClassName="hidden"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
