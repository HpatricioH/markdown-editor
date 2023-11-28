/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { authOptions } from '@/auth/authOptions'
import { type NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'

const handler = NextAuth(authOptions as NextAuthOptions)

export { handler as GET, handler as POST }
