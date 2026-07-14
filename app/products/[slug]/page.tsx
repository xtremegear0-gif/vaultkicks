import Link from 'next/link'
import products from '@/data/products.json'

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug)

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f7efe6] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-display font-bold text-espresso mb-4">Product not found</h1>
          <p className="text-moss mb-8">Sorry, that product does not exist.</p>
          <Link href="/products" className="btn-vintage">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f7efe6] py-16">
      <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[32px] overflow-hidden bg-white shadow-vintage">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-6">
          <div className="border-b border-[#dfcab0] pb-6">
            <p className="text-sm uppercase tracking-[0.35em] text-saddle mb-2">{product.category}</p>
            <h1 className="text-4xl font-display font-bold text-espresso">{product.name}</h1>
            <p className="text-2xl font-bold text-gold mt-4">${product.price}</p>
          </div>

          <div className="space-y-4 text-moss leading-7">
            <p>{product.description}</p>
            <p className="font-medium">Stock: {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="btn-secondary">
              Back to Products
            </Link>
            <span className="inline-flex items-center rounded-full border border-[#8c6a50] bg-[#f7efe6] px-5 py-3 text-sm font-semibold text-[#2f1f17]">
              Add to Cart
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
