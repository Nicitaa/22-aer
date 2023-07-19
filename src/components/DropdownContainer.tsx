import { AiOutlineDown } from 'react-icons/ai'


import { useEffect, useRef, useState } from 'react';


export function DropdownContainer({ children }: { children: React.ReactNode }) {

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
    <div className={`z-10`} ref={dropdownContainerRef}>
      <div className='flex items-center cursor-pointer' onClick={() => setIsDropdown(!isDropdown)}><h1 className='text-xs font-bold mr-2'>Sort by</h1> <AiOutlineDown /></div>

      <div className={`absolute top-[20%] right-[5%] backdrop-filter broder-[1px] border-solid border-secondary rounded-md w-[500px] z-[2]
       ${isDropdown ? 'opacity-100 visible translate-y-0 transition-all duration-300' : 'opacity-0 invisible translate-y-[-20px] transition-all duration-300'}`}>
        <div className='text-md text-secondary bg-primary'>
          {children}
        </div>
      </div>
    </div>
  )
}