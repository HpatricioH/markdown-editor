'use client'

import 'easymde/dist/easymde.min.css'
import MarkdownEditorContainer from './MarkdownEditorContainer'
import { useParams } from 'next/navigation'
import { useVisibilityBar } from '@/app/lib/store/useVisibilityBar'

export default function MarkDownEditor () {
  const { id } = useParams()
  const { isPreview } = useVisibilityBar()

  return (
    <section >
      <MarkdownEditorContainer
        isPreview={isPreview}
        id={id}/>
    </section>
  )
}
