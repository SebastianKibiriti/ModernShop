import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ModernShop - Premium Shopping Experience",
  description: "Discover amazing products with our modern shopping platform featuring the latest in electronics, fashion, and lifestyle items.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen transition-colors duration-500 bg-gray-50 dark:bg-[#020617] dark:text-gray-100">
            <Header />
            <main>
              {children}
            </main>
            
            <footer className="bg-gray-900 text-white transition-colors duration-500 dark:bg-[#0f172a] dark:border-t dark:border-[#1e293b]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">ModernShop</h3>
                    <p className="text-gray-400">
                      Your premium destination for quality products and exceptional shopping experience.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                      <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Customer Service</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Connect</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                  <p>&copy; 2024 ModernShop. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}