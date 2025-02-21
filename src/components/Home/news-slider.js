"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const news = [
  {
    id: 1,
    title: "Breaking: Major Tech Breakthrough",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Sports: Championship Finals Today",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Weather: Storm Warning Issued",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function NewsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % news.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[400px] overflow-hidden">
      {news.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "absolute inset-0 transition-transform duration-500 ease-in-out",
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full",
          )}
        >
          <img src={item.image || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h3 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white">{item.title}</h3>
        </div>
      ))}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={() => setCurrentSlide((prev) => (prev - 1 + news.length) % news.length)}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % news.length)}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

