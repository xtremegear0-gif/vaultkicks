import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '20')
    const skip = parseInt(searchParams.get('skip') || '0')
    const category = searchParams.get('category')
    const search = searchParams.get('search')

    let where: any = { stock: { gt: 0 } }

    if (category) {
      where.category = category
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ]
    }

    const products = await prisma.product.findMany({
      where,
      take: limit,
      skip,
      orderBy: { createdAt: 'desc' },
    })

    const total = await prisma.product.count({ where })

    return NextResponse.json({
      products,
      total,
      limit,
      skip,
      hasMore: skip + limit < total,
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}