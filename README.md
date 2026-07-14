# VaultKicks - Premium Sneaker E-Commerce Platform

A full-featured e-commerce platform for buying and selling premium sneakers, built with modern web technologies.

## 🚀 Features

- **Product Catalog & Search** - Browse and search through an extensive sneaker collection
- **Shopping Cart & Checkout** - Seamless shopping experience with cart management
- **User Authentication** - Secure email/password and OAuth (Google) authentication
- **Payment Processing** - Stripe and PayPal integration for secure payments
- **Order Management** - Track orders with real-time status updates
- **Admin Dashboard** - Manage products, inventory, and orders
- **Inventory Management** - Real-time stock tracking
- **Order History** - View past purchases and order details
- **Product Reviews** - User reviews and ratings
- **Responsive Design** - Mobile-friendly interface

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe & PayPal
- **Hosting**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL 12+
- npm or yarn

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/xtremegear0-gif/VaultKicks.git
cd VaultKicks
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your configuration:
- Database URL (PostgreSQL connection string)
- Stripe keys
- NextAuth secret
- Email configuration

4. **Setup database**
```bash
npx prisma migrate dev
npx prisma db push
```

5. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Environment Variables for Production

Set these in Vercel dashboard:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Strong random string (min 32 characters)
- `NEXTAUTH_URL` - Your production URL
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

## 📚 API Endpoints

### Products
- `GET /api/products` - List products
- `GET /api/products/[id]` - Get product details
- `POST /api/products` - Create product (admin)
- `PUT /api/products/[id]` - Update product (admin)
- `DELETE /api/products/[id]` - Delete product (admin)

### Orders
- `GET /api/orders` - List user orders
- `GET /api/orders/[id]` - Get order details
- `POST /api/orders` - Create order
- `PUT /api/orders/[id]` - Update order (admin)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add to cart
- `PUT /api/cart` - Update cart
- `DELETE /api/cart/[itemId]` - Remove from cart

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

## 🔐 Security Features

- ✅ Password hashing with bcryptjs
- ✅ Secure JWT tokens
- ✅ CSRF protection with NextAuth
- ✅ SQL injection prevention (Prisma)
- ✅ XSS protection (React built-in)
- ✅ Secure cookie handling
- ✅ Environment variable encryption
- ✅ Rate limiting ready
- ✅ PCI compliance with Stripe

## 📂 Project Structure

```
VaultKicks/
├── app/                      # Next.js app directory
│   ├── api/                 # API routes
│   ├── (auth)/              # Auth pages
│   ├── admin/               # Admin dashboard
│   ├── products/            # Product pages
│   ├── cart/                # Cart page
│   ├── orders/              # Order pages
│   └── layout.tsx           # Root layout
├── components/              # React components
├── lib/                     # Utility functions
├── prisma/                  # Database schema
│   ├── schema.prisma        # Prisma schema
│   └── migrations/          # Database migrations
├── public/                  # Static assets
└── styles/                  # Global styles
```

## 🔄 Database Schema

The application uses PostgreSQL with Prisma ORM. Key models:

- **User** - User accounts and profiles
- **Product** - Product catalog
- **Cart/CartItem** - Shopping cart
- **Order/OrderItem** - Order management
- **Payment** - Payment transactions
- **Address** - Shipping addresses
- **Review** - Product reviews

## 🧪 Testing

```bash
npm run test
```

## 📝 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@vaultkicks.com or open an issue on GitHub.

## 🎯 Roadmap

- [ ] Advanced product filters
- [ ] Wishlist feature
- [ ] Product recommendations
- [ ] Email notifications
- [ ] SMS notifications
- [ ] Analytics dashboard
- [ ] Multi-currency support
- [ ] Mobile app
- [ ] Social media integration

---

Built with ❤️ by the VaultKicks team
