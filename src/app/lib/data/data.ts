const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL
export interface DocumentProps {
  name?: string
  createdAt?: string
  content?: string
  userId: string
  id?: string
}

export async function fetchDocuments ({ userId }: DocumentProps) {
  try {
    const URL = `${NEXT_PUBLIC_URL}/api/documents/${userId}/all`

    const response = await fetch(URL)
    return await response.json() as DocumentProps[]
  } catch (error: unknown) {
    throw new Error((error as Error).message)
  }
}

export async function fetchADocument ({ documentId }: { documentId: string }) {
  try {
    const URL = `${NEXT_PUBLIC_URL}/api/documents/${documentId}`

    const response = await fetch(URL)
    return await response.json() as DocumentProps
  } catch (error: unknown) {
    throw new Error((error as Error).message)
  }
}
