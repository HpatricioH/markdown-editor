const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL
export interface DocumentProps {
  name?: string
  createdAt?: string
  content?: string
  userId?: string
  id?: string | string[]
}

// get all documents from a user
export async function fetchDocuments ({ userId }: DocumentProps) {
  try {
    const URL = `${NEXT_PUBLIC_URL}/api/documents/${userId}/all`

    const response = await fetch(URL)
    return await response.json() as DocumentProps[]
  } catch (error: unknown) {
    throw new Error((error as Error).message)
  }
}

// get a single document
export async function fetchADocument ({ documentId }: { documentId: string }) {
  try {
    const URL = `${NEXT_PUBLIC_URL}/api/documents/${documentId}`

    const response = await fetch(URL)
    return await response.json() as DocumentProps
  } catch (error: unknown) {
    throw new Error((error as Error).message)
  }
}

// create a document
export async function createDocument ({ name, content, userId, createdAt }: DocumentProps) {
  try {
    const URL = `${NEXT_PUBLIC_URL}/api/documents`

    const response = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, content, userId, createdAt })
    })
    return await response.json() as DocumentProps
  } catch (error: unknown) {
    throw new Error((error as Error).message)
  }
}

// update a document
export async function updateDocument ({ name, content, id }: DocumentProps) {
  try {
    const URL = `${NEXT_PUBLIC_URL}/api/documents/`

    const response = await fetch(URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, content, id })
    })
    if (response.status === 200) {
      return { message: 'Document updated successfully' }
    }
  } catch (error: unknown) {
    throw new Error((error as Error).message)
  }
}
