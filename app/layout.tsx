import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'VaultKicks - Premium Sneaker Store',
  description: 'Discover and buy premium vintage-inspired shoes, apparel, bags, and eyewear.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen bg-[#f7efe6]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
