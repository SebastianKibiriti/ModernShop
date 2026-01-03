# ModernShop - Premium Shopping Store Website

A modern, responsive e-commerce website built with Next.js, featuring advanced image switching functionality and a clean, professional design.

## 🌟 Features

### 🛍️ **Core Shopping Experience**
- **Product Catalog**: Browse all products with advanced search and filtering
- **Individual Product Pages**: Detailed product views with specifications and features
- **Responsive Design**: Perfect experience on desktop, tablet, and mobile devices
- **Modern UI**: Clean design with Tailwind CSS and shadcn/ui components

### 🔄 **Advanced Image Switching**
- **Day/Night Toggle**: Switch between different product views using toggle buttons next to titles
- **Quick View**: Hover over product cards and click "Quick View" to switch images without navigation
- **Multiple Image Gallery**: Individual product pages feature 4+ images with thumbnail navigation
- **Smooth Transitions**: All image changes include elegant animations and transitions

### 📱 **User Interface**
- **Hero Section**: Engaging landing page with call-to-action buttons
- **Category Browsing**: Visual category cards for easy navigation
- **Search & Filters**: Advanced filtering by category, price range, and sorting options
- **Product Features**: Detailed specifications, color/size selection, and stock information

## 🎯 **Image Switching Functionality**

### **Product Cards (Homepage & Products Page)**
1. **Day/Night Toggle Button**: Located next to product titles
   - Shows "Night" (default) or "Day" (alternate view)
   - Button changes from outline to filled when toggled
2. **Quick View Button**: Appears on hover at bottom of card
   - Switches to next image without leaving the page

### **Individual Product Pages**
1. **Day/Night Toggle**: Next to product title for quick switching
2. **Thumbnail Navigation**: Click any of the 4 thumbnail images
3. **Full Image Gallery**: Large main image with smooth transitions

## 🛠️ **Technology Stack**

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for full type safety
- **Styling**: Tailwind CSS with shadcn/ui components
- **Images**: AI-generated product images with automatic processing
- **State Management**: React hooks for interactive features
- **Build Tool**: Modern build pipeline with optimizations

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd modernshop
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Run the development server**
```bash
pnpm dev
# or
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 **Project Structure**

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Main layout with navigation
│   ├── page.tsx           # Homepage with featured products
│   └── products/          # Product pages
│       ├── page.tsx       # Products catalog
│       └── [id]/page.tsx  # Individual product details
├── components/            # Reusable React components
│   ├── ProductCard.tsx    # Product card with image switching
│   └── ProductGrid.tsx    # Product grid with filters
├── data/                  # Mock data and utilities
│   └── products.ts        # Product data and helper functions
├── types/                 # TypeScript type definitions
│   └── product.ts         # Product and related interfaces
└── lib/                   # Utility functions
    └── utils.ts           # Helper utilities
```

## 🎨 **Sample Products**

The website includes 6 sample products across different categories:

### **Electronics**
- Premium Wireless Headphones ($299.99)
- Smart Fitness Watch ($249.99)
- Professional Camera Lens ($599.99)
- Wireless Gaming Mouse ($79.99)

### **Fashion**
- Designer Leather Jacket ($189.99)

### **Home & Garden**
- Ergonomic Office Chair ($349.99)

Each product includes:
- Multiple high-quality AI-generated images
- Detailed descriptions and specifications
- Color and size options (where applicable)
- Stock information and pricing
- Customer ratings and reviews

## 🔧 **Build Commands**

```bash
# Development
pnpm dev

# Build for production
pnpm run build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## 🌐 **Deployment**

The website is optimized for deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `pnpm run build`
   - Output Directory: `.next`
3. **Deploy** - Vercel will automatically build and deploy your site

## 📱 **Responsive Design**

- **Mobile First**: Optimized for mobile devices with progressive enhancement
- **Breakpoints**: Responsive design works across all screen sizes
- **Touch Friendly**: All interactive elements are optimized for touch devices
- **Performance**: Optimized images and code splitting for fast loading

## 🎯 **Key Features Highlights**

### **Image Switching Innovation**
- **Dual Toggle System**: Both toggle buttons and Quick View buttons switch images
- **Semantic Labels**: "Day" and "Night" provide intuitive context
- **Visual Feedback**: Clear button states show current view
- **No Page Reload**: All image switching happens instantly without navigation

### **E-commerce Functionality**
- **Add to Cart**: Functional cart system (demo)
- **Product Variants**: Color and size selection
- **Stock Management**: Real-time stock information
- **Search & Filter**: Advanced product discovery tools

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 **Acknowledgments**

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- AI-generated product images for demonstration
