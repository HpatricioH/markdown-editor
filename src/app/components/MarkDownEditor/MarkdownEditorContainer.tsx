'use client'

import React from 'react'
import MarkDownInput from './MarkDownInput'
import MarkDownResult from './MarkDownResult'
import { useVisibilityBar } from '@/app/lib/store/useVisibilityBar'
import { type DocumentProps } from '@/app/lib/data/data'

export default function MarkdownEditorContainer ({ document }: { document: DocumentProps | null }) {
  const { isPreview } = useVisibilityBar()
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const content = document?.content ?? ''

  return (
    <div className="w-full flex calcHeight *:dark:bg-dark-gray-4 *:dark:text-[#FFF] *:bg-light-gray-1/2 *:text-dark-gray-4`">
      {
        !isPreview && <MarkDownInput content={content}/>
      }
        <MarkDownResult/>
    </div>
  )
}
