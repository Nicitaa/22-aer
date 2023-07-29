import { ChangeEvent, useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
  size?: "sm" | "" | undefined
  label: string
  labelHidden: boolean
  id: string
}

export function Input({ type, size, id, label, labelHidden, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="relative ">
      <label htmlFor={id} className={`${labelHidden ? "visually-hidden" : ""}`}>
        {label}
      </label>
      <input
        id={id}
        className={`p-4 w-full text-sm tablet:text-md text-black bg-[#D9D9D9] placeholder:text-secondary
     border-2 border-transparent focus:border-cta outline-none ${size === "sm" ? "w-[100px] h-[50px]" : ""}`}
        type={type === "password" ? (showPassword ? "text" : type) : type}
        {...props}
      />
      {type === "password" ? (
        showPassword ? (
          <AiFillEye
            className="absolute right-4 w-8 h-8 text-secondary cursor-pointer  top-1/2 -translate-y-1/2"
            onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
          />
        ) : (
          <AiFillEyeInvisible
            className="absolute right-4 w-8 h-8 text-secondary cursor-pointer top-1/2 -translate-y-1/2"
            onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
          />
        )
      ) : (
        <></>
      )}
    </div>
  )
}
