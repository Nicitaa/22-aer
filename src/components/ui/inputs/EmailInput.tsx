import React from "react"
import { TextInputProps } from "./SharedInput"
export default function EmailInput({ label, labelHidden, value, handleChange, id, size, ...props }: TextInputProps) {
  return (
    <div className="relative">
      <label htmlFor={id} className={`${labelHidden ? "visually-hidden" : ""}`}>
        {label}
      </label>
      <input
        id={id}
        className={`p-4 w-full text-sm tablet:text-md text-black bg-[#D9D9D9] placeholder:text-secondary
 border-2 border-transparent  focus:border-cta outline-none ${size === "sm" ? "w-[100px] h-[50px]" : ""}`}
        type="email"
        {...props}
        onChange={e => {
          console.log("HI")
          handleChange(e)
        }}
      />
    </div>
  )
}
