import Link from 'next/link'
import products from '@/data/products.json'

export default function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="min-h-screen">
      <section className="hero-bg text-espresso py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block uppercase tracking-[0.4em] text-sm text-saddle mb-4">
              Vault Kicks
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
              Premium vintage-inspired shoes, apparel, eyewear, and bags.
            </h1>
            <p className="text-lg text-moss leading-8 mb-10">
              Explore timeless style with curated wardrobe essentials that blend classic craftsmanship and modern edge.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-vintage">
                Shop Collections
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-saddle mb-3">Curated for every look</p>
            <h2 className="section-heading text-4xl font-semibold">Featured selections from our vintage edit</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card-vintage overflow-hidden">
                <div className="relative pb-[100%] overflow-hidden bg-parchment">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-espresso">{product.name}</h3>
                  <p className="text-saddle mb-4 text-sm uppercase tracking-[0.12em]">{product.category}</p>
                  <p className="text-2xl font-bold text-gold">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4ebdb] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-saddle mb-3">Everything in one place</p>
          <h2 className="section-heading text-4xl font-semibold mb-6">Shoes, tees, glasses, bags — all with a premium vintage feel.</h2>
          <p className="max-w-2xl mx-auto text-moss leading-8">
            Vault Kicks is your destination for elevated wardrobe essentials that blend heritage style with modern refinement.
          </p>
        </div>
      </section>
    </div>
  )
}
