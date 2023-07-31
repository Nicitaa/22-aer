import { useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import type { ChangeEvent } from "react"
interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type: string
  value: number | string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
  size?: "sm" | "" | undefined
  label: string
  labelHidden: boolean
  id: string
}

export function Input({ type, size, id, label, value, labelHidden, handleChange, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword)
    const inputElement = document.getElementById(id) as HTMLInputElement
    //focus on input
    //move cursor to end of input
    // Move the cursor to the end of the input's value
    const newValue = value as string
    const inputLength = newValue.length
    //had to set a timeout because of the way react states work. I am updating the type from text to password or vice versa which refreshes the cursor position
    setTimeout(() => {
      inputElement?.focus()

      inputElement.setSelectionRange(inputLength, inputLength)
    }, 0)
  }
  return (
    <div className="relative">
      <label htmlFor={id} className={`${labelHidden ? "visually-hidden" : ""}`}>
        {label}
      </label>
      <input
        id={id}
        className={`p-4 w-full text-sm tablet:text-md text-black bg-[#D9D9D9] placeholder:text-secondary
     border-2 border-transparent  focus:border-cta outline-none ${size === "sm" ? "w-[100px] h-[50px]" : ""}`}
        type={type === "password" ? (showPassword ? "text" : type) : type}
        {...props}
        onChange={e => {
          handleChange(e)
        }}
      />
      {type === "password" ? (
        showPassword ? (
          <AiFillEye
            className="absolute right-4 w-8 h-8 text-secondary cursor-pointer  top-1/2 -translate-y-1/2"
            onClick={() => toggleShowPassword()}
          />
        ) : (
          <AiFillEyeInvisible
            className="absolute right-4 w-8 h-8 text-secondary cursor-pointer top-1/2 -translate-y-1/2"
            onClick={() => toggleShowPassword()}
          />
        )
      ) : (
        <></>
      )}
    </div>
  )
}
