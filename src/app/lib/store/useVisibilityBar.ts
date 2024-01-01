import { create } from 'zustand'

interface VisibilityBarProps {
  isPreview: boolean
  setIsPreview: (isPreview: boolean) => void
}

export const useVisibilityBar = create<VisibilityBarProps>((set) => ({
  isPreview: false,
  setIsPreview: (isPreview: boolean) => { set({ isPreview }) }
}))
