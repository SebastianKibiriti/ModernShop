import { Product, ProductCategory } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort padding.",
    price: 299.99,
    originalPrice: 399.99,
    image: "/nighttime_headphones.png",
    altImage: "/daytime_headphones.png",
    images: [
      "/nighttime_headphones.png",
      "/daytime_headphones.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ae1d16de-8b02-47d6-9656-55e8ed510a1f.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7cfe9eb-fe43-4c24-9f35-0d1eefa3050d.png"
    ],
    category: "Electronics",
    subcategory: "Audio",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    stockCount: 45,
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge (5 min = 3 hours)",
      "Premium comfort padding",
      "Bluetooth 5.2 connectivity",
      "Touch controls"
    ],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      "Impedance": "32 ohms",
      "Weight": "250g",
      "Connectivity": "Bluetooth 5.2, 3.5mm jack",
      "Battery": "30 hours with ANC off, 20 hours with ANC on"
    },
    tags: ["wireless", "noise-cancelling", "premium", "audio"],
    brand: "AudioTech",
    sku: "AT-WH-001",
    weight: "250g",
    dimensions: "18 x 15 x 8 cm",
    colors: ["Black", "White", "Silver"]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS tracking, sleep analysis, and 7-day battery life.",
    price: 249.99,
    originalPrice: 329.99,
    image: "/nighttime_watch.png",
    altImage: "/daytime_watch.jpg",
    images: [
      "/nighttime_watch.png",
      "/daytime_watch.jpg",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bd35776d-5b34-48dc-ad6a-2f51bf6d5f76.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c7f06492-40a4-4341-89dd-0617c6d94c16.png"
    ],
    category: "Electronics",
    subcategory: "Wearables",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    stockCount: 32,
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Sleep analysis",
      "7-day battery life",
      "Water resistant (50m)",
      "100+ workout modes"
    ],
    specifications: {
      "Display": "1.4\" AMOLED",
      "Battery": "7 days typical use",
      "Water Resistance": "5ATM (50m)",
      "Sensors": "Heart rate, GPS, Accelerometer, Gyroscope",
      "Connectivity": "Bluetooth 5.0, Wi-Fi",
      "Compatibility": "iOS 12+, Android 6+"
    },
    tags: ["fitness", "smartwatch", "health", "gps"],
    brand: "FitTech",
    sku: "FT-SW-002",
    weight: "45g",
    dimensions: "4.5 x 3.8 x 1.2 cm",
    colors: ["Black", "Silver", "Rose Gold"]
  },
  {
    id: 4,
    name: "Professional Camera Lens",
    description: "Capture stunning portraits with this professional 85mm f/1.4 lens. Features advanced optical design, fast autofocus, and exceptional image quality.",
    price: 599.99,
    originalPrice: 799.99,
    image: "/nighttime_lens.png",
    altImage: "/daytime_lens.jpg",
    images: [
      "/nighttime_lens.png",
      "/daytime_lens.jpg",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5066db8a-56ca-4144-9b10-3e4c6625941f.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/335804d6-822b-468c-b5dc-dd56823b94fa.png"
    ],
    category: "Electronics",
    subcategory: "Photography",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    stockCount: 12,
    features: [
      "85mm focal length",
      "f/1.4 maximum aperture",
      "Advanced optical design",
      "Fast and silent autofocus",
      "Weather sealing",
      "Professional build quality"
    ],
    specifications: {
      "Focal Length": "85mm",
      "Maximum Aperture": "f/1.4",
      "Minimum Aperture": "f/16",
      "Lens Elements": "12 elements in 8 groups",
      "Filter Thread": "77mm",
      "Weight": "950g"
    },
    tags: ["photography", "lens", "portrait", "professional"],
    brand: "OpticsPro",
    sku: "OP-85-004",
    weight: "950g",
    dimensions: "8.9 x 10.5 cm"
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    description: "Transform your workspace with this premium ergonomic office chair featuring lumbar support, adjustable height, and breathable mesh design.",
    price: 349.99,
    originalPrice: 449.99,
    image: "/nighttime_chair.png",
    altImage: "/daytime_chair.png",
    images: [
      "/nighttime_chair.png",
      "/daytime_chair.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4615fbdf-cf6d-4768-af05-2f9ed72a7dac.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/900a1a2a-0d10-4355-aa02-68987b524875.png"
    ],
    category: "Home & Garden",
    subcategory: "Furniture",
    rating: 4.5,
    reviews: 203,
    inStock: true,
    stockCount: 28,
    features: [
      "Lumbar support system",
      "Breathable mesh back",
      "Adjustable height",
      "360-degree swivel",
      "Smooth-rolling casters",
      "Weight capacity: 300lbs"
    ],
    specifications: {
      "Seat Height": "17-21 inches",
      "Seat Width": "20 inches",
      "Seat Depth": "20 inches",
      "Back Height": "26 inches",
      "Weight Capacity": "300 lbs",
      "Material": "Mesh, Steel, Plastic"
    },
    tags: ["office", "ergonomic", "furniture", "workspace"],
    brand: "WorkComfort",
    sku: "WC-EC-005",
    weight: "22kg",
    dimensions: "66 x 66 x 107-117 cm",
    colors: ["Black", "Gray", "White"]
  }
];

export const categories: ProductCategory[] = [
  {
    id: "electronics",
    name: "Electronics",
    description: "Latest technology and gadgets",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3af85f48-18c0-42ee-850e-fc666e6e95b3.png",
    productCount: products.filter(p => p.category === "Electronics").length
  },
  {
    id: "fashion",
    name: "Fashion",
    description: "Stylish clothing and accessories",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b6286f9c-563e-4793-9239-0a228a3b2ad2.png",
    productCount: products.filter(p => p.category === "Fashion").length
  },
  {
    id: "home-garden",
    name: "Home & Garden",
    description: "Furniture and home improvement",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6ae1662c-6561-42de-b5a1-738aa750d236.png",
    productCount: products.filter(p => p.category === "Home & Garden").length
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (limit: number = 4): Product[] => {
  return products.slice(0, limit);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};