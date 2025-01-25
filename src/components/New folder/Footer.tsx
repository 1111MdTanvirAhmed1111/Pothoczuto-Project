import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const quickLinks = [
  { name: 'হোম', href: '/' },
  { name: 'আমাদের সম্পর্কে', href: '/about' },
  { name: 'যোগাযোগ', href: '/contact' },
  { name: 'গোপনীয়তা নীতি', href: '/privacy' },
  { name: 'ব্যবহারের শর্তাবলী', href: '/terms' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Youtube', icon: Youtube, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">বাংলা ব্লগ</h3>
            <p className="text-sm">আমাদের ব্লগে আপনাকে স্বাগতম। এখানে আপনি বাংলা ভাষা, সাহিত্য, ও সংস্কৃতি সম্পর্কিত নানা বিষয়ে পড়তে পারবেন।</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">দ্রুত লিঙ্ক</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-gray-800 dark:hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">সামাজিক যোগাযোগ</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-gray-800 dark:hover:text-white transition-colors">
                  <link.icon className="w-6 h-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} বাংলা ব্লগ। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  )
}

