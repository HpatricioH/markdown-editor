import NextAuth, { type NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/app/lib/db/db'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as NextAuthOptions['adapter'],
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
    async jwt ({ token }) {
      return token
    },
    // If we want to access our extra user info from sessions we have to pass it the token here to get them in sync:
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          id: token.sub,
          email: token.email,
          name: token.name,
          image: token.picture
        }
      }
    }
  }
}

export default NextAuth(authOptions)
