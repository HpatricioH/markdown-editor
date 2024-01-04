import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/auth/providers'
import authOptions from '@/auth/authOptions'
import { type NextAuthOptions, getServerSession } from 'next-auth'
import LoginPage from '@/app/login/page'
import { robotoSlab } from './ui/fonts'
import LayoutHolder from './components/Layout/LayoutHolder'
import Header from './components/Header/Header'

export const metadata: Metadata = {
  title: 'Markdown',
  description: 'Markdown Editor'
}

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions as NextAuthOptions)

  return (
    <html lang="en">
      <body className={`${robotoSlab.className} antialiased`}>
        <AuthProvider>
          {session
            ? (
              <>
                <div className='flex '>
                    <LayoutHolder />
                  <div className='flex-[1]'>
                    <Header />
                    {children}
                  </div>
                </div>
              </>
              )
            : (
              <LoginPage />
              )}
        </AuthProvider>
      </body>
    </html>
  )
}
