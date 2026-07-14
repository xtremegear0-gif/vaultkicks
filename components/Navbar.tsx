'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-espresso text-cream shadow-xl sticky top-0 z-50 border-b border-[#5a503f]/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-display font-bold tracking-wide text-cream">
            Vault Kicks
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-cream hover:text-gold transition">
              Home
            </Link>
            <Link href="/products" className="text-cream hover:text-gold transition">
              Products
            </Link>
            <Link href="/about" className="text-cream hover:text-gold transition">
              About
            </Link>
            <Link href="/contact" className="text-cream hover:text-gold transition">
              Contact
            </Link>
          </div>

          <div className="flex gap-4 items-center">
            <Link href="/cart" className="relative text-cream hover:text-gold transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
            <Link href="/login" className="text-cream hover:text-gold transition">
              Login
            </Link>
            <Link href="/register" className="bg-gold text-espresso px-4 py-2 rounded-full font-semibold hover:bg-[#d49e41] transition">
              Sign Up
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-[#5a503f]/20 mt-4">
            <Link href="/" className="block py-2 text-cream hover:text-gold">
              Home
            </Link>
            <Link href="/products" className="block py-2 text-cream hover:text-gold">
              Products
            </Link>
            <Link href="/about" className="block py-2 text-cream hover:text-gold">
              About
            </Link>
            <Link href="/contact" className="block py-2 text-cream hover:text-gold">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
