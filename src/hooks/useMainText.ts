import { create } from 'zustand'

interface MainTextStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useMainText = create<MainTextStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))

export default useMainText