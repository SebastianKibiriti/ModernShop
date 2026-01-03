export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  altImage: string;
  images: string[];
  category: string;
  subcategory?: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  stockCount: number;
  features: string[];
  specifications: Record<string, string>;
  tags: string[];
  brand: string;
  sku: string;
  weight?: string;
  dimensions?: string;
  colors?: string[];
  sizes?: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface ProductFilters {
  category?: string;
  priceRange?: [number, number];
  rating?: number;
  inStock?: boolean;
  brand?: string;
  sortBy?: 'name' | 'price' | 'rating' | 'newest';
  sortOrder?: 'asc' | 'desc';
}