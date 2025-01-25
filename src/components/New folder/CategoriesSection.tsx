import Link from 'next/link'
import { Globe, Tv, Cpu, Coffee, Utensils, Plane } from 'lucide-react'

const categories = [
  { name: 'রাজনীতি', icon: Globe, href: '/category/politics' },
  { name: 'বিনোদন', icon: Tv, href: '/category/entertainment' },
  { name: 'প্রযুক্তি', icon: Cpu, href: '/category/technology' },
  { name: 'জীবনযাপন', icon: Coffee, href: '/category/lifestyle' },
  { name: 'খাদ্য', icon: Utensils, href: '/category/food' },
  { name: 'ভ্রমণ', icon: Plane, href: '/category/travel' },
]

export default function CategoriesSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">বিভাগসমূহ</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <category.icon className="w-8 h-8 mb-2 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-gray-800 dark:text-white">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

