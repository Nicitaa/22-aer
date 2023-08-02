import React from "react"
import { TextInputProps } from "./SharedInput"
// Define the TextInputProps as a generic type that extends InputHTMLAttributes<HTMLInputElement>

export default function TextInput({ label, labelHidden, value, handleChange, id, size, ...props }: TextInputProps) {
  return (
    <div className="relative">
      <label htmlFor={id} className={`${labelHidden ? "visually-hidden" : ""}`}>
        {label}
      </label>
      <input
        id={id}
        className={`p-4 w-full text-sm tablet:text-md text-black bg-[#D9D9D9] placeholder:text-secondary
     border-2 border-transparent  focus:border-cta outline-none ${size === "sm" ? "w-[100px] h-[50px]" : ""}`}
        type="text"
        value={value}
        {...props}
        onChange={e => {
          handleChange(e)
        }}
      />
    </div>
  )
}
