import React from 'react'
import { useEditorInput } from '@/app/lib/store/useEditorInput'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function MarkDownResult () {
  const { markdownInput } = useEditorInput()

  return (
    <ReactMarkdown
      className='dark:bg-[#151619] dark:text-[#FFF] h-screen w-full p-2'
      rehypePlugins={[rehypeRaw]}>
        {markdownInput}
    </ReactMarkdown>
  )
}
