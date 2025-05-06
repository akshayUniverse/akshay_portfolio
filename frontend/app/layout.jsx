import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}>
        <Providers>
          <Navbar />
          <div className="pt-16 sm:pt-20">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
} 