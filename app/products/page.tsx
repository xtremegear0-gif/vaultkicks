'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import products from '@/data/products.json'

const categories = ['All', 'Sneakers', 'Apparel', 'Eyewear', 'Bags', 'Accessories']

export default function ProductsPage() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [category, search])

  return (
    <div className="min-h-screen bg-[#f7efe6] py-14">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-display font-semibold mb-8 text-espresso">All Products</h1>

        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border border-[#d2c2ab] rounded-full bg-white text-espresso focus:outline-none focus:ring-2 focus:ring-[#b58b3f]"
          />

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  category === cat
                    ? 'bg-espresso text-cream'
                    : 'bg-white border border-[#e0d2bc] text-espresso hover:bg-[#f6ede0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`}>
                <div className="card-vintage overflow-hidden transition-transform hover:-translate-y-1 cursor-pointer">
                  <div className="relative pb-[100%] overflow-hidden bg-parchment">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-espresso">{product.name}</h3>
                    <p className="text-saddle mb-3 text-sm uppercase tracking-[0.12em]">{product.category}</p>
                    <p className="text-2xl font-bold text-gold">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-moss">No products found. Try another search.</div>
        )}
      </div>
    </div>
  )
}
