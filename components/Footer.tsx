import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-display font-semibold mb-4 text-gold">Vault Kicks</h3>
            <p className="text-[#d8c7a7]">
              Vintage-inspired style for every day, with quality pieces made to last.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Explore</h4>
            <ul className="space-y-2 text-[#d8c7a7]">
              <li><Link href="/" className="hover:text-gold transition">Home</Link></li>
              <li><Link href="/products" className="hover:text-gold transition">Products</Link></li>
              <li><Link href="/about" className="hover:text-gold transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Connect</h4>
            <ul className="space-y-2 text-[#d8c7a7]">
              <li><a href="mailto:support@vaultkicks.com" className="hover:text-gold transition">Email</a></li>
              <li><a href="#" className="hover:text-gold transition">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#5a503f]/30 pt-8 text-center text-[#d8c7a7]">
          <p>&copy; 2026 Vault Kicks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
