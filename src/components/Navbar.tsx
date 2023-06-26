import { HiMenu } from 'react-icons/hi'

export function Navbar() {
  return (
    <nav className='flex justify-between items-center px-4
     tablet:px-8
     laptop:px-12'>
      <h1 className="font-primary text-big font-bold">Aer</h1>
      <HiMenu className='font-bold' size={48} />
    </nav>
  )
}