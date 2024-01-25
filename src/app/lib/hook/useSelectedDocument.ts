import { useEffect, useState } from 'react'
import { fetchADocument } from '../data/data'

export function useSelectedDocument ({ id }: { id: string }) {
  const [documentSelected, setDocumentSelected] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const document = await fetchADocument({ documentId: id })
          setDocumentSelected(document)
        }
      } catch (error: unknown) {
        throw new Error((error as Error).message)
      }
    }
    fetchData()
  }, [id, setDocumentSelected])

  return { documentSelected }
}
