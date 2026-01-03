"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

// Product type definition
type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  altImage: string;
  category: string;
  rating: number;
  reviews: number;
};

// Sample featured products for Stage 1
const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "/nighttime_headphones.png",
    altImage: "/daytime_headphones.png",
    category: "Electronics",
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 249.99,
    originalPrice: 329.99,
    image: "/nighttime_watch.png",
    altImage: "/daytime_watch.jpg",
    category: "Electronics",
    rating: 4.6,
    reviews: 89
  },
  {
    id: 4,
    name: "Professional Camera Lens",
    price: 599.99,
    originalPrice: 799.99,
    image: "/nighttime_lens.png",
    altImage: "/daytime_lens.jpg",
    category: "Electronics",
    rating: 4.7,
    reviews: 156
  }
];

function ProductCard({ product }: { product: Product }) {
  const { theme } = useTheme();
  const isNight = theme === 'night';

  return (
    <div className={`rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${isNight ? 'bg-[#1e293b] shadow-blue-900/20' : 'bg-white shadow-gray-200'}`}>
      <div className="relative group h-64">
        <div className="relative w-full h-full overflow-hidden">
          {/* Night Image (Base Layer - Visible in Night Mode) */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover transition-all duration-700 ease-in-out group-hover:scale-105 ${
               isNight ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
          {/* Day Image (Overlay Layer - Visible in Day Mode) */}
          <Image
            src={product.altImage}
            alt={product.name}
            fill
            className={`object-cover transition-all duration-700 ease-in-out group-hover:scale-105 ${
              !isNight ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        </div>
        
        <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-semibold z-20">
          SALE
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-500 font-medium">{product.category}</span>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className={`text-sm ml-1 ${isNight ? 'text-gray-400' : 'text-gray-600'}`}>{product.rating} ({product.reviews})</span>
          </div>
        </div>
        
        <h3 className={`text-lg font-semibold mb-3 transition-colors ${isNight ? 'text-gray-100' : 'text-gray-900'}`}>{product.name}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${isNight ? 'text-gray-100' : 'text-gray-900'}`}>${product.price}</span>
            <span className={`text-sm line-through ${isNight ? 'text-gray-500' : 'text-gray-500'}`}>${product.originalPrice}</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Amazing Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Premium quality items with unbeatable prices and exceptional service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Categories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked items that showcase quality, innovation, and style. Each product features multiple views - click the button to switch between images!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600">
              Explore our carefully curated collections
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group cursor-pointer">
              <Image
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fc242dda-0445-4ed0-8eb3-375836803284.png"
                alt="Electronics category featuring modern devices and technology"
                width={800}
                height={600}
                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Electronics</h3>
              </div>
            </div>
            
            <div className="relative group cursor-pointer">
              <Image
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f4f84bcb-4564-414a-870d-49f3aab3fe61.png"
                alt="Fashion category featuring stylish clothing and accessories"
                width={800}
                height={600}
                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Fashion</h3>
              </div>
            </div>
            
            <div className="relative group cursor-pointer">
              <Image
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/81346a07-fe6a-42c3-b4ac-2f71ad297271.png"
                alt="Home and Garden category featuring furniture and decor"
                width={800}
                height={600}
                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Home & Garden</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get the latest deals, new arrivals, and exclusive offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}