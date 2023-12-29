import { useEditorInput } from '@/app/lib/store/useEditorInput'
import ReactMarkdown from 'react-markdown'

export default function MarkDownResult () {
  const { markdownInput } = useEditorInput()

  return (
    <ReactMarkdown
      className='w-1/2 dark:bg-[#151619] dark:text-[#FFF] h-screen'>
        {markdownInput}
    </ReactMarkdown>
  )
}
