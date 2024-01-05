'use client'

import 'easymde/dist/easymde.min.css'
import { useVisibilityBar } from '@/app/lib/store/useVisibilityBar'
import MarkDownResult from './MarkDownResult'
import MarkDownInput from './MarkDownInput'

export default function MarkDownEditor () {
  const { isPreview } = useVisibilityBar()

  return (
    <section className="flex">
      <div className="w-full basis-full calcHeight">
        {isPreview
          ? <MarkDownResult/>
          : <MarkDownInput/>}
      </div>
    </section>
  )
}
