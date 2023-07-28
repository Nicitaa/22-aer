import React, { Dispatch, SetStateAction } from "react"

interface SimpleCheckboxProps {
  label: string
  labelReverse: boolean
  checkboxValue: boolean
  setCheckboxValue: Dispatch<SetStateAction<boolean>>
}

export function SimpleCheckbox({ checkboxValue, setCheckboxValue, label, labelReverse }: SimpleCheckboxProps) {
  return (
    <div className={`flex ${labelReverse && "flex-row-reverse"} gap-1 items-center `}>
      <label htmlFor={label} className="text-xs">
        {label}
      </label>
      <input
        type="checkbox"
        id={label}
        checked={checkboxValue}
        onChange={() => {
          setCheckboxValue((prevValue) => !prevValue)
        }}
      />
    </div>
  )
}
