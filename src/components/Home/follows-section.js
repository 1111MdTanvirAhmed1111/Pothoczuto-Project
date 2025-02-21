"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { MessageSquare, UserPlus, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback } from "react"



const followers = [
  {
    id: 1,
    name: "রহিম আহমেদ",
    image: "/placeholder-user.jpg",
    isOnline: true,
    mutualFriends: 12,
    isFollowing: true,
  },
  {
    id: 2,
    name: "ফাতেমা খাতুন",
    image: "/placeholder-user.jpg",
    isOnline: true,
    mutualFriends: 8,
  },
  {
    id: 3,
    name: "করিম মিয়া",
    image: "/placeholder-user.jpg",
    isOnline: false,
    lastSeen: "১০ মিনিট আগে",
    mutualFriends: 15,
    isFollowing: true,
  },
  {
    id: 4,
    name: "জান্নাত আরা",
    image: "/placeholder-user.jpg",
    isOnline: true,
    mutualFriends: 6,
  },
]

const FOLLOWERS_PER_SLIDE = 3

export function FollowsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = Math.ceil(followers.length / FOLLOWERS_PER_SLIDE)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <Card className="mb-6">
      <CardHeader className="border-b pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">আপনার অনুসরণকারী</h2>
            <p className="text-sm text-muted-foreground">সর্বমোট {followers.length} জন</p>
          </div>
          <Badge variant="secondary" className="px-2 py-1">
            <span className="animate-pulse mr-1.5 inline-block h-2 w-2 rounded-full bg-green-500" />
            {followers.filter((f) => f.isOnline).length} অনলাইন
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `${-currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-none space-y-3" style={{ flex: "0 0 100%" }}>
                  {followers
                    .slice(slideIndex * FOLLOWERS_PER_SLIDE, (slideIndex + 1) * FOLLOWERS_PER_SLIDE)
                    .map((follower) => (
                      <motion.div
                        key={follower.id}
                        className="group relative rounded-lg border p-3 transition-all hover:bg-muted/50"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.01 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative flex-shrink-0">
                            <Avatar className="h-12 w-12 border-2 border-background">
                              <AvatarImage src={follower.image} />
                              <AvatarFallback>{follower.name[0]}</AvatarFallback>
                            </Avatar>
                            {follower.isOnline ? (
                              <motion.span
                                className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background bg-green-500"
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  repeat: Number.POSITIVE_INFINITY,
                                  repeatType: "reverse",
                                  duration: 1,
                                }}
                              />
                            ) : (
                              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background bg-gray-300" />
                            )}
                          </div>
                          <div className="flex flex-1 items-center justify-between">
                            <div className="space-y-1">
                              <p className="font-medium leading-none">{follower.name}</p>
                              {!follower.isOnline && follower.lastSeen && (
                                <p className="text-xs text-muted-foreground">{follower.lastSeen}</p>
                              )}
                              <div className="flex items-center gap-2">
                                <p className="text-xs text-muted-foreground">{follower.mutualFriends} মিউচুয়াল</p>
                                {follower.isFollowing && (
                                  <Badge variant="secondary" className="text-xs">
                                    ফলোয়িং
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
                              >
                                <MessageSquare className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
                              >
                                <UserPlus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              ))}
            </motion.div>
          </div>

          <Button variant="ghost" size="icon" className="absolute -left-4 top-1/2 -translate-y-1/2" onClick={prevSlide}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="mt-4 flex justify-center gap-1">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide ? "w-4 bg-primary" : "w-1.5 bg-muted"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

