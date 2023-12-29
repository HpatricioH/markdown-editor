import { create } from 'zustand'

interface EditorInputProps {
  markdownInput: string
  setMarkdownInput: (markdownInput: string) => void
}

export const useEditorInput = create<EditorInputProps>((set) => ({
  markdownInput: '',
  setMarkdownInput: (markdownInput: string) => { set({ markdownInput }) }
}))
