import 'easymde/dist/easymde.min.css'
import MarkdownEditorContainer from './MarkdownEditorContainer'
import { fetchADocument } from '@/app/lib/data/data'

interface MarkDownEditorProps {
  id?: string | string[] | undefined
}

export default async function MarkDownEditor ({ id }: MarkDownEditorProps) {
  let document = null

  if (id) {
    document = await fetchADocument({ documentId: id as string })
  }

  return (
    <section >
      <MarkdownEditorContainer document={document}/>
    </section>
  )
}
