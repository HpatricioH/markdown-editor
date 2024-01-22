import React from 'react'
import { useEditorInput } from '@/app/lib/store/useEditorInput'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { robotoSlab } from '@/app/ui/fonts'
import VisibilityBar from '../VisibilityBar/VisibilityBar'
import { useVisibilityBar } from '@/app/lib/store/useVisibilityBar'

export default function MarkDownResult () {
  const { markdownInput } = useEditorInput()
  const { isPreview } = useVisibilityBar()

  return (
    <div className={`flex flex-col ${isPreview ? 'w-full' : 'w-[50%]'} ${!isPreview ? 'hidden' : 'block'} sm:block`}>
      <VisibilityBar title={'Preview'}/>
      <ReactMarkdown
        className={`prose h-screen w-full p-2 overflow-auto scrollbar-hide resize-none ${robotoSlab.className} antialiased calcHeight2`}
        rehypePlugins={[rehypeRaw]}>
          {markdownInput}
      </ReactMarkdown>
    </div>
  )
}
