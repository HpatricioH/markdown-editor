'use client'

import { useEditorInput } from '@/app/lib/store/useEditorInput'
import React from 'react'
import VisibilityBar from '../VisibilityBar/VisibilityBar'
import { useVisibilityBar } from '@/app/lib/store/useVisibilityBar'

export default function MarkDownInput () {
  const { markdownInput, setMarkdownInput } = useEditorInput()
  const { isPreview } = useVisibilityBar()

  return (
   <div
    className={`flex flex-col ${!isPreview ? 'w-full' : 'w-[50%]'} ${isPreview && 'hidden'} sm:block sm:w-[50%] [&_textarea]:dark:bg-dark-gray-4 [&_textarea]:dark:text-[#FFF] [&_textarea]:bg-light-gray-1/2 [&_textarea]:text-dark-gray-4 border-r border-light-gray-3`}>
      <VisibilityBar title={'Markdown'}/>
      <textarea
        autoFocus
        onChange={(event) => { setMarkdownInput(event.target.value) }}
        value = {markdownInput}
        className='focus:outline-0 h-screen w-full p-2 overflow-y-auto calcHeight2 resize-none'>
      </textarea>
    </div>
  )
}
