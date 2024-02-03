'use client'

import 'easymde/dist/easymde.min.css'
import MarkdownEditorContainer from './MarkdownEditorContainer'
import { useParams } from 'next/navigation'
import { useVisibilityBar } from '@/app/lib/store/useVisibilityBar'
import { Suspense } from 'react'
import { MarkdownSkeleton } from '@/app/ui/skeletons'

export default function MarkDownEditor () {
  const { id } = useParams()
  const { isPreview } = useVisibilityBar()

  return (
    <section >
      <Suspense fallback={<MarkdownSkeleton/>}>
          <MarkdownEditorContainer
            isPreview={isPreview}
            id={id}/>
      </Suspense>
    </section>
  )
}
