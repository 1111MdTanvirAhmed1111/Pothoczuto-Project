'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const popularPosts = [
    {
        id: 1,
        title: 'বাংলাদেশের স্বাধীনতা যুদ্ধ: একটি ঐতিহাসিক পর্যালোচনা',
        image: '/liberation-war.jpg',
        views: 15000,
    },
    {
        id: 2,
        title: 'বাঙালি সংস্কৃতি ও ঐতিহ্য: আমাদের গর্বের উৎস',
        image: '/bengali-culture.jpg',
        views: 12500,
    },
    {
        id: 3,
        title: 'বাংলাদেশের পর্যটন: অজানা গন্তব্যের সন্ধানে',
        image: '/bangladesh-tourism.jpg',
        views: 10000,
    },
];
export default function PopularPostsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % popularPosts.length);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + popularPosts.length) % popularPosts.length);
    };
    return (<section className="mb-12 relative">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">জনপ্রিয় পোস্ট</h2>
      <div className="relative overflow-hidden rounded-lg">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {popularPosts.map((post) => (<div key={post.id} className="w-full flex-shrink-0">
              <div className="relative h-64 md:h-80">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover"/>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-300">{post.views.toLocaleString()} বার দেখা হয়েছে</p>
                  </div>
                </div>
              </div>
            </div>))}
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
          <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white"/>
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
          <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white"/>
        </button>
      </div>
    </section>);
}
