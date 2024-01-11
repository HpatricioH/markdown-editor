// http://localhost:3000/api/documents
import prisma from '@/app/lib/db/db'
import { NextResponse } from 'next/server'

interface Document {
  name: string
  content: string
  userId: string
}

// Create a new document
export const POST = async (req: Request) => {
  try {
    const body = await req.json() as Document
    const {
      name,
      content,
      userId
    } = body

    if (!name) {
      return NextResponse.json({ message: 'Name is required' }, { status: 400 })
    }

    if (!content) {
      return NextResponse.json({ message: 'content is required' }, { status: 400 })
    }

    if (!userId) {
      return NextResponse.json({ message: 'User Id is required' }, { status: 400 })
    }

    const newDocument = await prisma.files.create({
      data: {
        name,
        content,
        createdAt: new Date(),
        userId
      }
    })
    return NextResponse.json(newDocument, { status: 201 })
  } catch (error: unknown) {
    return NextResponse.json({ message: 'Error in Create new Document', error: (error as Error).message }, { status: 500 })
  }
}
