import { create } from 'zustand'

interface EditorInputProps {
  markdownInput: string
  setMarkdownInput: (markdownInput: string) => void
}

const initialState: EditorInputProps = {
  markdownInput: '',
  setMarkdownInput: () => { (null as unknown) }
}

export const useEditorInput = create<EditorInputProps>((set) => ({
  markdownInput: '',
  setMarkdownInput: (markdownInput: string) => { set({ markdownInput }) },
  reset: () => {
    set(initialState)
  }
}))
