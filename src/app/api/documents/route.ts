// http://localhost:3000/api/documents
import prisma from '../../lib/db/db'
import { NextResponse } from 'next/server'

interface Document {
  name: string
  content: string
  userId: string
  createdAt: string
}

// Create a new document
export const POST = async (req: Request) => {
  try {
    const body = await req.json() as Document
    const {
      name,
      content,
      userId,
      createdAt
    } = body

    if (!name) {
      return NextResponse.json({ message: 'Name is required' }, { status: 400 })
    }

    if (!userId) {
      return NextResponse.json({ message: 'User Id is required' }, { status: 400 })
    }

    const newDocument = await prisma.files.create({
      data: {
        name,
        content,
        createdAt,
        userId
      }
    })
    return NextResponse.json(newDocument, { status: 201 })
  } catch (error: unknown) {
    return NextResponse.json({ message: 'Error in Create new Document', error: (error as Error).message }, { status: 500 })
  }
}

// Update one document by id
export const PUT = async (req: NextResponse) => {
  const { name, content, id } = await req.json() as { name: string, content: string, id: string }

  try {
    const document = await prisma.files.update({
      where: {
        id
      },
      data: {
        name,
        content
      }
    })

    return NextResponse.json(document, { status: 200 })
  } catch (error: unknown) {
    return NextResponse.json({ message: 'Error in Update Document', error: (error as Error).message }, { status: 500 })
  }
}
