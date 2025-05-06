import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akshay Karada | Portfolio',
  description: 'Software Engineer & Web Developer | Portfolio of Akshay Karada',
  keywords: ['developer', 'portfolio', 'web developer', 'software engineer', 'Akshay Karada'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
} 