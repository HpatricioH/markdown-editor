interface DocumentProps {
  name?: string
  content?: string
  userId: string
  id?: string
}

export async function fetchDocuments ({ userId }: DocumentProps) {
  try {
    const URL = 'http://localhost:3000/api/documents/6566b9b1a7b227c15e69a8db/all'
    console.log(userId)
    const response = await fetch(URL)
    return await response.json() as Document[]
  } catch (error: unknown) {
    throw new Error((error as Error).message)
  }
}
