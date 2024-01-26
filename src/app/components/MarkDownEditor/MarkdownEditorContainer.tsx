import React from 'react'
import MarkDownInput from './MarkDownInput'
import MarkDownResult from './MarkDownResult'
import { fetchADocument } from '@/app/lib/data/data'

export default async function MarkdownEditorContainer ({ isPreview, id }: { isPreview: boolean, id: string | string[] | undefined }) {
  let document = null

  if (id) {
    document = await fetchADocument({ documentId: id as string })
  }

  const content = document?.content ?? ''

  return (
    <div className="w-full flex calcHeight *:dark:bg-dark-gray-4 *:dark:text-[#FFF] *:bg-light-gray-1/2 *:text-dark-gray-4`">
      {
        !isPreview && <MarkDownInput content={content}/>
      }
        <MarkDownResult content={content}/>
    </div>
  )
}
