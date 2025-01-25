'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const slides = [
  {
    title: "Welcome to EduLMS",
    description: "Your gateway to online learning excellence",
    cta: "Explore Courses",
    image: "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg",
  },
  {
    title: "New Course: Machine Learning Basics",
    description: "Start your journey into AI and ML",
    cta: "Enroll Now",
    image: "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg",
  },
  {
    title: "Community Spotlight",
    description: "Join our thriving learning community",
    cta: "Join Community",
    image: "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg/placeholder.svg?height=600&width=1600",
  },
]

export default function HeaderSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 relative">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
     
                <Image
                      src={slide.image}
                      alt={slide.title}
                      style={{ objectFit: 'cover' }}
                      className='w-full'
      width={500}
      height={500}
    />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">{slide.title}</h2>
                  <p className="text-xl md:text-2xl text-white mb-6 md:mb-8 max-w-2xl">{slide.description}</p>
                  <Button size="lg" className="text-lg px-8 py-3">
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

