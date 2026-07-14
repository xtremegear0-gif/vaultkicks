import Link from 'next/link'

export default function Navbar() {
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
        </div>
      </div>
    </nav>
  )
}
