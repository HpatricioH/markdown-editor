/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import NextAuth from 'next-auth'
import { type NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/app/lib/db/db'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/login'
  },
  session: {
    strategy: 'jwt'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID?.toString() ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET?.toString() ?? ''
    })
  ],
  callbacks: {
    // We can pass in additional information from the user document MongoDB returns
    async jwt ({ token, user }: any) {
      if (user) {
        token.user = {
          id: user.id as string,
          email: user.email as string,
          name: user.name as string,
          image: user.image as string
        }
      }
      return token
    },
    // If we want to access our extra user info from sessions we have to pass it the token here to get them in sync:
    session: async ({ session, token }: any) => {
      if (token) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        session.user = token.user
      }
      return session
    }
  }
}

export default NextAuth(authOptions)
