import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/auth/providers'
import { roboto } from './ui/fonts'
import Providers from '@/core/utils/ThemeProvider'

export const metadata: Metadata = {
  title: 'Markdown',
  description: 'Markdown Editor'
}

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <AuthProvider>
          <Providers>
            {children}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  )
}
