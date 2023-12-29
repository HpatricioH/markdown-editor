'use client'

import { useEditorInput } from '@/app/lib/store/useEditorInput'
import React from 'react'

export default function MarkDownInput () {
  const { markdownInput, setMarkdownInput } = useEditorInput()

  return (
    <textarea
      autoFocus
      onChange={(event) => { setMarkdownInput(event.target.value) }}
      value = {markdownInput}
      className='dark:bg-[#151619] dark:text-[#FFF] focus:outline-0 text-[1rem] h-screen w-full p-2'>
    </textarea>
  )
}
