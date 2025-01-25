'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search, Sun, Moon, User } from 'lucide-react'
import { useTheme } from 'next-themes'

const navItems = [
  { name: 'হোম', href: '/' },
  { name: 'আমাদের সম্পর্কে', href: '/about' },
  { name: 'বিভাগসমূহ', href: '/categories' },
  { name: 'যোগাযোগ', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [language, setLanguage] = useState('bn')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="বাংলা ব্লগ" width={40} height={40} />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">বাংলা ব্লগ</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-700 rounded-md"
            >
              <option value="bn">বাংলা</option>
              <option value="en">English</option>
            </select>
            {isLoggedIn ? (
              <Link href="/profile" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                <User size={20} />
              </Link>
            ) : (
              <Link href="/login" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                লগ ইন
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 mt-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-700 rounded-md"
              >
                <option value="bn">বাংলা</option>
                <option value="en">English</option>
              </select>
              {isLoggedIn ? (
                <Link href="/profile" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                  <User size={20} />
                </Link>
              ) : (
                <Link href="/login" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                  লগ ইন
                </Link>
              )}
            </div>
          </nav>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4">
            <input
              type="text"
              placeholder="অনুসন্ধান করুন..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
      </div>
    </header>
  )
}

