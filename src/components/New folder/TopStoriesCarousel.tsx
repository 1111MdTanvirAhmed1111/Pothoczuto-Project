'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const stories = [
  { id: 1, title: 'বাংলাদেশে নতুন শিক্ষানীতি চালু', image: '/placeholder1.jpg', category: 'জাতীয়' },
  { id: 2, title: 'আন্তর্জাতিক ক্রিকেটে বাংলাদেশের নতুন সাফল্য', image: '/placeholder2.jpg', category: 'খেলাধুলা' },
  { id: 3, title: 'জলবায়ু পরিবর্তন: বাংলাদেশের উপর প্রভাব', image: '/placeholder3.jpg', category: 'পরিবেশ' },
]

export default function TopStoriesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length)
  }

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      {stories.map((story, index) => (
        <div
          key={story.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image src={story.image} alt={story.title} layout="fill" objectFit="cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <span className="inline-block bg-blue-600 text-white px-2 py-1 rounded-md text-sm mb-2">
              {story.category}
            </span>
            <h2 className="text-2xl font-bold">{story.title}</h2>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

