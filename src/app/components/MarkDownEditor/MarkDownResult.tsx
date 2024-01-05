import React from 'react'
import { useEditorInput } from '@/app/lib/store/useEditorInput'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function MarkDownResult () {
  const { markdownInput } = useEditorInput()

  return (
    <ReactMarkdown
      className='prose dark:bg-dark-gray-4 dark:text-[#FFF] h-screen w-full p-2 overflow-auto scrollbar-hide resize-none'
      rehypePlugins={[rehypeRaw]}>
        {markdownInput}
    </ReactMarkdown>
  )
}
