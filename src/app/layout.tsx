'use client'

import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider >
      <html lang="en">
          <body className={inter.className}>
              {children}
          </body>
      </html>
    </SessionProvider>
  )
}
