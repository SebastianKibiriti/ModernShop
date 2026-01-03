"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProductById } from "@/data/products";
import { Product } from "@/types/product";
import { useTheme } from "@/context/ThemeContext";

export default function ProductDetailPage() {
  const params = useParams();
  const { theme } = useTheme();
  const isNight = theme === 'night';
  
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  // Sync internal image index with global theme
  useEffect(() => {
    // If night mode, index 0 (Night). If day mode, index 1 (Day).
    // Assuming product.images[0] is Night and product.images[1] is Day.
    setCurrentImageIndex(isNight ? 0 : 1);
  }, [theme, isNight]);

  useEffect(() => {
    const productId = parseInt(params.id as string);
    const foundProduct = getProductById(productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
      if (foundProduct.colors && foundProduct.colors.length > 0) {
        setSelectedColor(foundProduct.colors[0]);
      }
      if (foundProduct.sizes && foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
    }
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isNight ? 'bg-[#020617]' : 'bg-gray-50'}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className={`${isNight ? 'text-gray-400' : 'text-gray-600'}`}>Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isNight ? 'bg-[#020617]' : 'bg-gray-50'}`}>
        <div className="text-center">
          <h1 className={`text-2xl font-bold mb-4 ${isNight ? 'text-gray-100' : 'text-gray-900'}`}>Product Not Found</h1>
          <p className={`${isNight ? 'text-gray-400' : 'text-gray-600'} mb-8`}>The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    // Add to cart logic would go here
    alert(`Added ${product.name} to cart!\nQuantity: ${quantity}${selectedColor ? `\nColor: ${selectedColor}` : ''}${selectedSize ? `\nSize: ${selectedSize}` : ''}`);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isNight ? 'bg-[#020617]' : 'bg-gray-50'}`}>
      {/* Breadcrumb */}
      <div className={`border-b transition-colors duration-500 ${isNight ? 'bg-[#0f172a] border-[#1e293b]' : 'bg-white border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className={`hover:text-gray-700 transition-colors ${isNight ? 'text-gray-400' : 'text-gray-500'}`}>
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link href="/products" className={`hover:text-gray-700 transition-colors ${isNight ? 'text-gray-400' : 'text-gray-500'}`}>
                  Products
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className={`font-medium ${isNight ? 'text-gray-100' : 'text-gray-900'}`}>{product.name}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image with Cross-fade */}
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-700 ease-in-out ${
                    index === 0 
                      ? 'z-0 opacity-100' // Base layer always visible
                      : `z-10 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}` // Overlays fade in/out
                  }`}
                />
              ))}
              {discountPercentage > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold z-10">
                  -{discountPercentage}% OFF
                </div>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl z-10">
                  <span className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold text-lg">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            {/* Image Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index 
                      ? 'border-blue-500 opacity-100' 
                      : `border-transparent ${isNight ? 'opacity-60 hover:opacity-100' : 'opacity-100 hover:opacity-75'}`
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    width={100}
                    height={80}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-500 font-medium">{product.category}</span>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className={`text-sm ml-1 ${isNight ? 'text-gray-400' : 'text-gray-600'}`}>
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              {/* Product Title */}
              <div className="flex items-center justify-between mb-2">
                <h1 className={`text-3xl lg:text-4xl font-bold flex-1 ${isNight ? 'text-gray-100' : 'text-gray-900'}`}>
                  {product.name}
                </h1>
              </div>
              <p className={`text-lg mb-4 ${isNight ? 'text-gray-400' : 'text-gray-600'}`}>{product.brand}</p>
              <p className={`leading-relaxed ${isNight ? 'text-gray-300' : 'text-gray-700'}`}>{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className={`text-3xl font-bold ${isNight ? 'text-gray-100' : 'text-gray-900'}`}>${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {discountPercentage > 0 && (
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                  Save {discountPercentage}%
                </span>
              )}
            </div>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isNight ? 'text-gray-100' : 'text-gray-900'}`}>Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                        selectedColor === color
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : `border-gray-300 hover:border-gray-400 ${isNight ? 'text-gray-300 border-gray-600 hover:border-gray-500' : ''}`
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isNight ? 'text-gray-100' : 'text-gray-900'}`}>Size</h3>
                <div className="flex space-x-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                        selectedSize === size
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : `border-gray-300 hover:border-gray-400 ${isNight ? 'text-gray-300 border-gray-600 hover:border-gray-500' : ''}`
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${isNight ? 'text-gray-100' : 'text-gray-900'}`}>Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className={`flex items-center border rounded-lg ${isNight ? 'border-gray-600' : 'border-gray-300'}`}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className={`px-3 py-2 transition-colors ${isNight ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100'}`}
                  >
                    -
                  </button>
                  <span className={`px-4 py-2 border-x ${isNight ? 'border-gray-600 text-gray-100' : 'border-gray-300'}`}>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className={`px-3 py-2 transition-colors ${isNight ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100'}`}
                  >
                    +
                  </button>
                </div>
                {product.inStock && product.stockCount <= 10 && (
                  <span className="text-sm text-orange-600">
                    Only {product.stockCount} left!
                  </span>
                )}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
                  product.inStock
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button className="w-full py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                Add to Wishlist
              </button>
            </div>

            {/* Product Info */}
            <div className={`border-t pt-6 ${isNight ? 'border-gray-800' : 'border-gray-200'}`}>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className={`font-medium ${isNight ? 'text-gray-300' : 'text-gray-900'}`}>SKU:</span>
                  <span className={`ml-2 ${isNight ? 'text-gray-400' : 'text-gray-600'}`}>{product.sku}</span>
                </div>
                {product.weight && (
                  <div>
                    <span className={`font-medium ${isNight ? 'text-gray-300' : 'text-gray-900'}`}>Weight:</span>
                    <span className={`ml-2 ${isNight ? 'text-gray-400' : 'text-gray-600'}`}>{product.weight}</span>
                  </div>
                )}
                {product.dimensions && (
                  <div>
                    <span className={`font-medium ${isNight ? 'text-gray-300' : 'text-gray-900'}`}>Dimensions:</span>
                    <span className={`ml-2 ${isNight ? 'text-gray-400' : 'text-gray-600'}`}>{product.dimensions}</span>
                  </div>
                )}
                <div>
                  <span className={`font-medium ${isNight ? 'text-gray-300' : 'text-gray-900'}`}>In Stock:</span>
                  <span className={`ml-2 ${isNight ? 'text-gray-400' : 'text-gray-600'}`}>{product.stockCount} units</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className={`border-b ${isNight ? 'border-gray-800' : 'border-gray-200'}`}>
            <nav className="-mb-px flex space-x-8">
              <button className="border-b-2 border-blue-500 py-4 px-1 text-sm font-medium text-blue-600">
                Features
              </button>
              <button className={`border-b-2 border-transparent py-4 px-1 text-sm font-medium hover:text-gray-700 ${isNight ? 'text-gray-400' : 'text-gray-500'}`}>
                Specifications
              </button>
              <button className={`border-b-2 border-transparent py-4 px-1 text-sm font-medium hover:text-gray-700 ${isNight ? 'text-gray-400' : 'text-gray-500'}`}>
                Reviews
              </button>
            </nav>
          </div>

          <div className="py-8">
            {/* Features */}
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${isNight ? 'text-gray-100' : 'text-gray-900'}`}>Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`${isNight ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}