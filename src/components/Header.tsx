"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`shadow-sm border-b sticky top-0 z-50 transition-colors duration-500 ${theme === 'night' ? 'bg-[#0f172a] border-[#1e293b]' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold transition-colors duration-500 ${theme === 'night' ? 'text-blue-400' : 'text-blue-600'}`}>
              ModernShop
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`font-medium transition-colors duration-300 ${theme === 'night' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
              Home
            </Link>
            <Link href="/products" className={`font-medium transition-colors duration-300 ${theme === 'night' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
              Products
            </Link>
            <Link href="#" className={`font-medium transition-colors duration-300 ${theme === 'night' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
              Categories
            </Link>
            <Link href="#" className={`font-medium transition-colors duration-300 ${theme === 'night' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
              About
            </Link>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-6">
            {/* Day/Night Slider Toggle */}
            <div 
              onClick={toggleTheme}
              className={`relative w-16 h-8 rounded-full cursor-pointer transition-colors duration-500 shadow-inner ${theme === 'night' ? 'bg-blue-900' : 'bg-blue-100'}`}
              title={`Switch to ${theme === 'day' ? 'Night' : 'Day'} Mode`}
            >
              {/* Slider Thumb */}
              <div className={`absolute top-1 w-6 h-6 rounded-full shadow-md transform transition-transform duration-500 flex items-center justify-center ${
                theme === 'night' 
                  ? 'translate-x-9 bg-[#0f172a]' 
                  : 'translate-x-1 bg-white'
              }`}>
                {/* Icon */}
                <span className="text-xs">
                  {theme === 'night' ? '🌙' : '☀️'}
                </span>
              </div>
            </div>

            <button className={`transition-colors duration-300 ${theme === 'night' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
              Search
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Cart (0)
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}