// http://localhost:3000/api/documents/[id]
import prisma from '../../../lib/db/db'
import { NextResponse } from 'next/server'

// Get all documents by user id
export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  try {
    const id = params.id

    const documents = await prisma.files.findMany({
      where: {
        userId: id
      }
    })

    return NextResponse.json(documents, { status: 200 })
  } catch (error: unknown) {
    return NextResponse.json({ message: 'Error in Get All Documents', error: (error as Error).message }, { status: 500 })
  }
}
