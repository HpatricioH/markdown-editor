import { create } from 'zustand'

interface SideBarProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const useSideBar = create<SideBarProps>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => { set({ isOpen }) }
}))
