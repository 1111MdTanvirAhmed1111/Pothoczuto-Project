import {NavLink} from 'react-router-dom'

import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const quickNavLinks = [
  { name: 'হোম', to: '/' },
  { name: 'আমাদের সম্পর্কে', to: '/about' },
  { name: 'যোগাযোগ', to: '/contact' },
  { name: 'গোপনীয়তা নীতি', to: '/privacy' },
  { name: 'ব্যবহারের শর্তাবলী', to: '/terms' },
]

const socialNavLinks = [
  { name: 'Facebook', icon: Facebook, to: '#' },
  { name: 'Twitter', icon: Twitter, to: '#' },
  { name: 'Instagram', icon: Instagram, to: '#' },
  { name: 'Youtube', icon: Youtube, to: '#' },
]

export default function Footer() {
  return (
    (<footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">বাংলা ব্লগ</h3>
            <p className="text-sm">আমাদের ব্লগে আপনাকে স্বাগতম। এখানে আপনি বাংলা ভাষা, সাহিত্য, ও সংস্কৃতি সম্পর্কিত নানা বিষয়ে পড়তে পারবেন।</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">দ্রুত লিঙ্ক</h3>
            <ul className="space-y-2">
              
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">সামাজিক যোগাযোগ</h3>
            <div className="flex space-x-4">
              {socialNavLinks.map((NavLink) => (
                <a
                  key={NavLink.name}
                  to={NavLink.to}
                  className="hover:text-gray-800 dark:hover:text-white transition-colors">
                  <NavLink.icon className="w-6 h-6" />
                  <span className="sr-only">{NavLink.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} বাংলা ব্লগ। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>)
  );
}

