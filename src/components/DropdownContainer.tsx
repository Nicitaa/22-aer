import { useEffect, useRef, useState } from 'react';


interface DropdownContainer {
  children: React.ReactNode
  childrenTrigger: React.ReactNode
  className?: string
}

export function DropdownContainer({ children, childrenTrigger, className = '' }: DropdownContainer) {

  const [isDropdown, setIsDropdown] = useState(false)

  const dropdownContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (!dropdownContainerRef.current?.contains(e.target)) {
          setIsDropdown(false)
        }
      }
    }

    document.addEventListener("mousedown", handler)
  }, [])


  return (
    <div className={`relative z-10`} ref={dropdownContainerRef}>
      <div className='flex items-center cursor-pointer' onClick={() => setIsDropdown(!isDropdown)}>
        {childrenTrigger}
      </div>

      <div className={`absolute broder-[1px] border-solid border-secondary rounded-md z-[2]
      ${className}
       ${isDropdown ? 'opacity-100 visible translate-y-0 transition-all duration-300' : 'opacity-0 invisible translate-y-[-20px] transition-all duration-300'}`}>
        <div className='text-md text-secondary bg-primary'>
          {children}
        </div>
      </div>
    </div>
  )
}