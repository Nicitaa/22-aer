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
  labelClassName,
  isChecked,
  id,
  setIsChecked,
  inputClassName,
}: CheckboxProps) {
  return (
    <label
      className={`${labelClassName} flex justify-center items-center cursor-pointer gap-1  z-[999999]`}
      htmlFor={id}>
      <div className="flex justify-center items-center relative group">
        <input
          className={`${inputClassName} checkbox-input checkbox-isChecked `}
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={() => setIsChecked(prevIsChecked => !prevIsChecked)}
        />
        <div className="checkbox-animation group-hover:opacity-20 group-hover:scale-[3.6]"></div>
      </div>
      {label}
    </label>
  )
}
