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
      className='dark:bg-dark-gray-4 dark:text-[#FFF] focus:outline-0 h-screen w-full p-2 overflow-y-auto calcHeight2 resize-none'>
    </textarea>
  )
}
