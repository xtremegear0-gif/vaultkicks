import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-display font-semibold mb-4 text-gold">Vault Kicks</h3>
            <p className="text-[#d8c7a7]">
              Premium vintage shopping for shoes, tees, eyewear, bags, and lifestyle pieces.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Discover</h4>
            <ul className="space-y-2 text-[#d8c7a7]">
              <li><Link href="/" className="hover:text-gold transition">Home</Link></li>
              <li><Link href="/products" className="hover:text-gold transition">Products</Link></li>
              <li><Link href="/about" className="hover:text-gold transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Customer Care</h4>
            <ul className="space-y-2 text-[#d8c7a7]">
              <li><Link href="/faq" className="hover:text-gold transition">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-gold transition">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-gold transition">Returns</Link></li>
              <li><Link href="/support" className="hover:text-gold transition">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Legal</h4>
            <ul className="space-y-2 text-[#d8c7a7]">
              <li><Link href="/privacy" className="hover:text-gold transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gold transition">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-gold transition">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#5a503f]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-[#d8c7a7]">
            <p>&copy; 2026 Vault Kicks. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gold transition">Facebook</a>
              <a href="#" className="hover:text-gold transition">Instagram</a>
              <a href="#" className="hover:text-gold transition">Twitter</a>
              <a href="#" className="hover:text-gold transition">TikTok</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
