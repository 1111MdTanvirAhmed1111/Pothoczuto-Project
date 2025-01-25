'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function NewsletterSignup() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    (<div
      className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
        <X size={24} />
      </button>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">নিউজলেটার সাবস্ক্রাইব করুন</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        আমাদের নিয়মিত আপডেট পেতে নিউজলেটারে সাইন আপ করুন।
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
        <input
          type="email"
          placeholder="আপনার ইমেইল ঠিকানা"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white" />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
          সাবস্ক্রাইব
        </button>
      </form>
    </div>)
  );
}

