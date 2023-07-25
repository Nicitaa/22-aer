import { create } from 'zustand'

interface Slider3DStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useSlider3D = create<Slider3DStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))

export default useSlider3D