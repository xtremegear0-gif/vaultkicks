'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products?limit=6')
      const data = await res.json()
      setProducts(data.products || [])
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to VaultKicks</h1>
          <p className="text-xl mb-8">Premium sneakers for the dedicated collector</p>
          <Link href="/products" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold inline-block">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          
          {loading ? (
            <div className="text-center py-8">Loading products...</div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product: any) => (
                <Link key={product.id} href={`/products/${product.slug}`}>
                  <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.category}</p>
                      <p className="text-2xl font-bold text-blue-600">${product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-600">No products available yet</div>
          )}
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Exclusive Sneaker Collections</h2>
          <p className="text-lg mb-8">Browse our curated selection of rare and exclusive sneakers</p>
          <Link href="/products" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block">
            View All Products
          </Link>
        </div>
      </section>
    </div>
  )
}