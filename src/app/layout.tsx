import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/auth/providers'
import Header from './components/Header/Header'
import authOptions from '@/auth/authOptions'
import { type NextAuthOptions, getServerSession } from 'next-auth'
import LoginPage from '@/app/login/page'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions as NextAuthOptions)

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {session ? <Header /> : null}
          {session ? children : <LoginPage />}
        </AuthProvider>
      </body>
    </html>
  )
}
