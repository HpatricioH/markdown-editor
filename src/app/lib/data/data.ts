interface Document {
  name: string
  content: string
  userId: string
}

export async function fetchDocuments () {
  const userId = process.env.USER_ID
  const URL = `http://localhost:3000/api/documents/${userId}/all`

  try {
    const response = await fetch(URL)
    return await response.json() as Document[]
  } catch (error: unknown) {
    throw new Error((error as Error).message)
  }
}
