'use client'
import ReactMarkdown from 'react-markdown'
import 'easymde/dist/easymde.min.css'
import { useState } from 'react'

export default function MarkDownEditor () {
  const [markdown, setMarkdown] = useState('# Type your markdown here')

  return (
    <section className="flex">
      <div className="w-1/2">
        <textarea name="" id="" cols={39} rows={30.5} onChange={(event) => { setMarkdown(event.target.value) }} className='bg-[#151619] text-[#FFF] focus:outline-0'></textarea>
      </div>
      <div className="w-1/2 bg-[#151619] text-[#FFF]">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </section>
  )
}
