'use client'
import 'easymde/dist/easymde.min.css'
import { useEditorInput } from '@/app/lib/store/useEditorInput'

export default function MarkDownEditor () {
  const { setMarkdownInput } = useEditorInput()

  return (
    <section className="flex">
      <div className="w-full">
        <textarea
          autoFocus
          onChange={(event) => { setMarkdownInput(event.target.value) }}
          className='dark:bg-[#151619] dark:text-[#FFF] focus:outline-0 text-[1rem] h-screen w-full p-2'>
        </textarea>
      </div>
    </section>
  )
}
