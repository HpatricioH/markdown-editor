// http://localhost:3000/api/documents/[id]
import prisma from '../../../lib/db/db'
import { type NextRequest, NextResponse } from 'next/server'

// Get one document by document id
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const id = params.id

    const documents = await prisma.files.findUnique({
      where: {
        id
      }
    })

    return NextResponse.json(documents, { status: 200 })
  } catch (error: unknown) {
    return NextResponse.json({ message: 'Error in Get All Documents', error: (error as Error).message }, { status: 500 })
  }
}

// Delete one document by id
export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const id = params.id

    await prisma.files.delete({
      where: {
        id
      }
    })

    return NextResponse.json(
      { message: 'Document Successfully Deleted' },
      { status: 200 })
  } catch (error: unknown) {
    return NextResponse.json({ message: 'Error in Delete Document', error: (error as Error).message }, { status: 500 })
  }
}
