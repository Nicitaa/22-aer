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
    <div
      className={`[&>*]:cursor-pointer flex ${
        labelReverse ? "flex-row-reverse" : ""
      } justify-center items-center gap-1 cursor-pointer`}
      onClick={() => setIsChecked(prevIsChecked => !prevIsChecked)}>
      <label
        className={`flex items-center text-primary  ${labelClassName}`}
        htmlFor={id}
        onClick={() => setIsChecked(prevIsChecked => !prevIsChecked)}>
        {label}
      </label>
      <div className="flex justify-center items-center relative group">
        <input
          className="checkbox-input checkbox-isChecked "
          type="checkbox"
          id={id}
          checked={isChecked}
          onClick={() => setIsChecked(prevIsChecked => !prevIsChecked)}
        />
        <div className="checkbox-animation group-hover:opacity-10 group-hover:scale-[3.6]"></div>
      </div>
    </div>
  )
}
