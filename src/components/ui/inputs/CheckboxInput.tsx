import React from "react"
import type { Dispatch, SetStateAction } from "react"
import SharedInputProps from "./SharedInput"
interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string
  labelClassName?: string
  isChecked: boolean
  setIsChecked: Dispatch<SetStateAction<boolean>>
  labelReverse: boolean
  inputClassName?: string
}

export default function CheckboxInput({
  label,
  labelReverse,
  labelClassName,
  isChecked,
  id,
  setIsChecked,
}: CheckboxProps) {
  return (
    <label className="flex justify-center items-center cursor-pointer gap-1" htmlFor={id}>
      <div className="flex justify-center items-center relative group">
        <input
          className="checkbox-input checkbox-isChecked "
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={() => setIsChecked(prevIsChecked => !prevIsChecked)}
        />
        <div className="checkbox-animation group-hover:opacity-10 group-hover:scale-[3.6]"></div>
      </div>
      {label}
    </label>
  )
}
