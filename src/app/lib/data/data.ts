export interface DocumentProps {
  name?: string
  createdAt?: string
  content?: string
  userId: string
  id?: string
}

export async function fetchDocuments ({ userId }: DocumentProps) {
  try {
    const URL = `http://localhost:3000/api/documents/${userId}/all`
    const response = await fetch(URL)
    return await response.json() as DocumentProps[]
  } catch (error: unknown) {
    throw new Error((error as Error).message)
  }
}
