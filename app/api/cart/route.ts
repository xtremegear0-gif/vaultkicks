import { NextRequest, NextResponse } from 'next/server'

const defaultCart = [
  {
    id: 'cart-item-1',
    quantity: 1,
    product: {
      id: 'prod-1',
      name: 'VaultKicks Runner',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
      price: 129.99,
      stock: 10,
    },
  },
]

export async function GET() {
  return NextResponse.json({ items: defaultCart })
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { itemId, quantity } = body

    const items = defaultCart.map((item) =>
      item.id === itemId ? { ...item, quantity: Math.max(1, Number(quantity) || 1) } : item
    )

    return NextResponse.json({ items })
  } catch (error) {
    console.error('Cart update error:', error)
    return NextResponse.json({ error: 'Failed to update cart' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const itemId = searchParams.get('itemId')

    if (!itemId) {
      return NextResponse.json({ error: 'Item ID is required' }, { status: 400 })
    }

    const items = defaultCart.filter((item) => item.id !== itemId)
    return NextResponse.json({ items })
  } catch (error) {
    console.error('Cart delete error:', error)
    return NextResponse.json({ error: 'Failed to delete cart item' }, { status: 500 })
  }
}
