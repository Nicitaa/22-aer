import { create } from 'zustand'

interface MainStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useMain = create<MainStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))

export default useMain