"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "./theme-toggler"
import { Search, User, LogIn } from "lucide-react"
import { Noto_Sans_Bengali } from "next/font/google"

const bengali = Noto_Sans_Bengali({ 
  subsets: ["bengali"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export function Navbar() {
  const [hasToken, setHasToken] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("jwt")
    setHasToken(!!token)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-white dark:bg-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* লোগো */}
          <div className="flex items-center transition-transform duration-300 hover:scale-105">
            <Link href="/" className="flex flex-col">
              <span className={`text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent ${bengali.className}`}>
                পথচ্যুত
              </span>
   
            </Link>
          </div>

          {/* নেভিগেশন লিংক */}
          <div className="hidden md:block">
            <div className={`flex items-center space-x-8 ${bengali.className}`}>
              <Link 
                href="/" 
                className="relative text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors duration-300 group font-medium"
              >
                হোম
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
              <Link 
                href="/blog" 
                className="relative text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors duration-300 group font-medium"
              >
                ব্লগ
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
              <Link 
                href="/about" 
                className="relative text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors duration-300 group font-medium"
              >
                আমাদের সম্পর্কে
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
              <Link 
                href="/contact" 
                className="relative text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors duration-300 group font-medium"
              >
                যোগাযোগ
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* রাইট সাইড আইটেম */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
            
            {hasToken ? (
              <Link 
                href="/profile" 
                className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300"
              >
                <User className="w-5 h-5" />
              </Link>
            ) : (
              <Link 
                href="/auth/login" 
                className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300"
              >
                <LogIn className="w-5 h-5" />
              </Link>
            )}
            
            <div className="transition-transform duration-300 hover:scale-105">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 