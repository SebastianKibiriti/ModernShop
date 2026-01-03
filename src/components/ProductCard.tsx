"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { useTheme } from "@/context/ThemeContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { theme } = useTheme();
  const isNight = theme === 'night';

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className={`rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${isNight ? 'bg-[#1e293b] shadow-blue-900/20' : 'bg-white shadow-gray-200'}`}>
      <div className="relative h-64">
        <Link href={`/products/${product.id}`}>
          <div className="relative w-full h-full overflow-hidden cursor-pointer">
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
        </Link>
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold z-20">
            -{discountPercentage}%
          </div>
        )}
        
        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
            <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        {/* Category and Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-500 font-medium">{product.category}</span>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className={`text-sm ml-1 ${isNight ? 'text-gray-400' : 'text-gray-600'}`}>
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>
        
        {/* Product Name */}
        <div className="flex items-center justify-between mb-2">
          <Link href={`/products/${product.id}`} className="flex-1">
            <h3 className={`text-lg font-semibold transition-colors hover:text-blue-500 cursor-pointer line-clamp-2 ${isNight ? 'text-gray-100' : 'text-gray-900'}`}>
              {product.name}
            </h3>
          </Link>
        </div>
        
        {/* Brand */}
        <p className={`text-sm mb-3 ${isNight ? 'text-gray-400' : 'text-gray-500'}`}>{product.brand}</p>
        
        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${isNight ? 'text-gray-100' : 'text-gray-900'}`}>${product.price}</span>
            {product.originalPrice > product.price && (
              <span className={`text-sm line-through ${isNight ? 'text-gray-500' : 'text-gray-500'}`}>
                ${product.originalPrice}
              </span>
            )}
          </div>
          <button 
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              product.inStock 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!product.inStock}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
        
        {/* Stock Count */}
        {product.inStock && product.stockCount <= 10 && (
          <p className="text-sm text-orange-600 mt-2">
            Only {product.stockCount} left in stock!
          </p>
        )}
      </div>
    </div>
  );
}