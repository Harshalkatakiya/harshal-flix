import './globals.css'
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Harshal Flix',
  description: 'Stream and Download the Latest Movies and Web-Series on Harshal Flix.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}<Analytics /></body>
    </html>
  )
}