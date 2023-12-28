import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rocket Shoes',
  description: 'The next generation of shoes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='w-11/12 max-w-4xl flex flex-col items-center mx-auto'>
          <Header />

          {children}

          <Toaster richColors />
        </div>
      </body>
    </html>
  )
}
