"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ModeToggle } from "./theme-toggler"
import { Search, LogIn, Menu, X } from "lucide-react"
import { Noto_Sans_Bengali } from "next/font/google"
import { useUser } from "@/contexts/User"
import { SettingsBar } from "@/components/Home/settings-bar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

const bengali = Noto_Sans_Bengali({ 
  subsets: ["bengali"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const navigationLinks = [
  { href: "/", label: "হোম" },
  { href: "/blog", label: "ব্লগ" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
  { href: "/contact", label: "যোগাযোগ" },
]

export function Navbar() {
  const {user, setUser} = useUser()
  const [hasToken, setHasToken] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)



  useEffect(() => {
    if (user) {
      setHasToken(true)
    } else {
      setHasToken(false)
    }
  }, [user])

  useEffect(() => {
    setHasToken(!!user)



    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Search Overlay - Moved outside nav */}
      <div 
        className={`
          fixed inset-0 bg-black/20 backdrop-blur-sm
          transition-opacity duration-300 ease-in-out
          z-40
          ${isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsSearchOpen(false)}
      />

      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-white dark:bg-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center transition-transform duration-300 hover:scale-105">
              <Link href="/" className="flex flex-col">
                <span className={`text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent ${bengali.className}`}>
                  পথচ্যুত
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className={`flex items-center space-x-8 ${bengali.className}`}>
                {navigationLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="relative text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors duration-300 group font-medium"
                  >
                    {link.label}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side items with mobile menu button */}
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>

              <DropdownMenu open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                <DropdownMenuTrigger asChild>
                  <button className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300">
                    <Search className="w-5 h-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-[300px] p-3 z-50 bg-white dark:bg-gray-900" 
                  align="end"
                >
                  <div className="flex items-center space-x-2">
                    <Input 
                      type="search" 
                      placeholder="অনুসন্ধান করুন..." 
                      className={`${bengali.className} w-full`}
                      onChange={(e) => {
                        console.log(e.target.value)
                      }}
                      autoFocus
                    />
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {hasToken ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <Avatar className="w-8 h-8 transition-transform duration-300 hover:scale-105">
                      <AvatarImage src="/default-avatar.png" alt="Profile" />
                      <AvatarFallback>ব</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem className="cursor-pointer">
                      <Link href="/profile" className="flex w-full">
                        প্রোফাইল
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Link href="/settings" className="flex w-full">
                        সেটিংস
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="cursor-pointer text-red-600 dark:text-red-400"
                      onClick={() => {
                        localStorage.removeItem("token")
                        setUser(null)
                        setHasToken(false)
                      }}
                    >
                      লগ আউট
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link 
                  href="/auth" 
                  className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300"
                >
                  <LogIn className="w-5 h-5" />
                </Link>
              )}
              
              <div className="transition-transform duration-300 hover:scale-105">
                <ModeToggle />
              
              </div>
              <SettingsBar />
            </div>
          </div>
        </div>

        {/* Overlay - Place it before the mobile menu */}
        <div 
          className={`
            fixed inset-0 bg-black/20 backdrop-blur-sm
            transition-opacity duration-300 ease-in-out
            md:hidden z-40
            ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Navigation Menu */}
        <div 
          className={`
            fixed top-0 left-0 h-full w-64 
            bg-white dark:bg-gray-900 shadow-lg
            transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            md:hidden z-50
          `}
        >
          {/* Add padding top to account for the navbar */}
          <div className={`flex flex-col space-y-1 p-4 pt-20 ${bengali.className}`}>
            {navigationLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
} 
