import { ChangeEvent, useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type: 'email' | 'password' | 'number'
  placeholder: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
  size?: "sm" | "" | undefined
}

export function Input({ type, size, placeholder, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      {type === "password"
        ? (
          <div className="relative w-full">
            <input
              className={`peer/input p-4 bg-primary-dark text-secondary z-[9] ${size === "sm" ? "w-[100px] h-[40px]" : "w-full h-[55px]"}
              outline-none`}
              type={showPassword ? "text" : "password"} placeholder=" "
              {...props}
            />
            <label className="absolute 
            left-1 top-[50%] translate-y-[-120%] text-xs
            peer-placeholder-shown/input:left-4 peer-placeholder-shown/input:translate-y-[-50%] peer-placeholder-shown/input:text-md
            font-secondary text-secondary transition-all duration-300
             pointer-events-none select-none">{placeholder}</label>
            {showPassword ? (
              <AiFillEyeInvisible
                className="absolute right-4 top-[50%] translate-y-[-50%] w-8 h-8 text-secondary cursor-pointer z-[10]"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <AiFillEye
                className="absolute right-4 w-8 h-8 top-[50%] translate-y-[-50%] text-secondary cursor-pointer z-[10]"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        ) : (
          <div className="relative w-full">
            <input
              className={`peer/input p-4 bg-primary-dark text-secondary z-[9] ${size === "sm" ? "w-[100px] h-[40px]" : "w-full h-[55px]"}
              outline-none`}
              type='email' placeholder=" " required
              {...props}
            />
            <label className="absolute 
            left-1 top-[50%] translate-y-[-120%] text-xs
            peer-placeholder-shown/input:left-4 peer-placeholder-shown/input:translate-y-[-50%] peer-placeholder-shown/input:text-md
             font-secondary text-secondary transition-all duration-300
             pointer-events-none select-none">{placeholder}</label>
          </div>
        )}
    </>
  )
}
