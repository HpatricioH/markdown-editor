// http://localhost:3000/api/documents/[id]/all
import prisma from '../../../../lib/db/db'
import { type NextRequest, NextResponse } from 'next/server'

interface Document {
  name?: string
  createdAt: string
  content?: string
  userId: string
  id?: string
}

// Get all documents by user id
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const id = params.id

    const documents = await prisma.files.findMany({
      where: {
        userId: id
      }
    }) as Document[]

    return NextResponse.json(documents, { status: 200 })
  } catch (error: unknown) {
    return NextResponse.json({ message: 'Error in Get All Documents', error: (error as Error).message }, { status: 500 })
  }
}
