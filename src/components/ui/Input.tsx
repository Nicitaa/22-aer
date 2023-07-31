import { ChangeEvent, useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
  size?: "sm" | "" | undefined
}

export function Input({ type, size, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      {type === "password" ? (
        <>
          <input
            className={`p-4 w-full text-sm tablet:text-md text-black bg-[#D9D9D9] placeholder:text-secondary
     border-2 border-transparent focus:border-cta outline-none ${size === "sm" ? "w-[100px] h-[50px]" : ""}`}
            type={showPassword ? "password" : "text"}
            {...props}
          />
          {showPassword ? (
            <AiFillEye
              className="absolute right-4 w-8 h-8 text-secondary cursor-pointer"
              onClick={() => setShowPassword(prevShowPassword => !prevShowPassword)}
            />
          ) : (
            <AiFillEyeInvisible
              className="absolute right-4 w-8 h-8 text-secondary cursor-pointer"
              onClick={() => setShowPassword(prevShowPassword => !prevShowPassword)}
            />
          )}
        </>
      ) : (
        <input
          className={`p-4 w-full text-sm tablet:text-md text-black bg-[#D9D9D9] placeholder:text-secondary
     border-2 border-transparent focus:border-cta outline-none ${size === "sm" ? "w-[100px] h-[50px]" : ""}`}
          type={type}
          {...props}
        />
      )}
    </>
  )
}
