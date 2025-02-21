"use client"

import Link from "next/link"
import { Noto_Sans_Bengali } from "next/font/google"
import { useEffect, useState } from "react"

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

export function Navigation({ isOpen, onClose }) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768) // 768px is the md breakpoint
        }

        // Initial check
        checkMobile()

        // Add event listener
        window.addEventListener('resize', checkMobile)

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    if (isMobile) {
        return (
            <>
                {/* Mobile Overlay */}
                <div 
                    className={`
                        fixed inset-0 bg-black/20 backdrop-blur-sm
                        transition-opacity duration-300 ease-in-out z-40
                        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                    `}
                    onClick={onClose}
                />

                {/* Mobile Navigation Menu */}
                <div 
                    className={`
                        fixed top-0 left-0 h-full w-64 
                        bg-white dark:bg-gray-900 shadow-lg
                        transform transition-transform duration-300 ease-in-out z-50
                        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                    `}
                >
                    <div className={`flex flex-col space-y-1 p-4 pt-20 ${bengali.className}`}>
                        {navigationLinks.map((link) => (
                            <Link 
                                key={link.href}
                                href={link.href} 
                                className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-300"
                                onClick={onClose}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </>
        )
    }

    return (
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
    )
} 