"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { MessageSquare, UserPlus } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"

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

export function FollowsSection() {
  const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)
  const totalItems = followers.length

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Card className="mb-2 p-2"> {/* Reduced margin-bottom to mb-2 and added p-2 for external padding */}
      <CardHeader className="border-b pb-3"> {/* Reduced padding-bottom to pb-3 */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">আপনার অনুসরণকারী</h2>
            <p className="text-sm text-muted-foreground">সর্বমোট {followers.length} জন</p>
          </div>
          <Badge variant="secondary" className="px-2 py-0.5"> {/* Reduced py-1 to py-0.5 */}
            <span className="animate-pulse mr-1 inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
            {followers.filter((f) => f.isOnline).length} অনলাইন
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-2 relative"> {/* Reduced padding to p-2 */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent className="flex gap-4"> {/* Reduced gap to 4 for tighter spacing */}
            {followers.map((follower) => (
              <CarouselItem
                key={follower.id}
                className="basis-[300px] flex-shrink-0"
              >
                <motion.div
                  className="group relative rounded-lg border p-3 transition-all hover:bg-muted/50"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="space-y-2"> {/* Reduced space-y-3 to space-y-2 */}
                    <div className="flex items-center justify-between gap-2"> {/* Reduced gap-3 to gap-2 */}
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
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="space-y-0.5"> {/* Reduced space-y-1 to space-y-0.5 */}
                          <p className="font-medium leading-none">{follower.name}</p>
                          {!follower.isOnline && follower.lastSeen && (
                            <p className="text-xs text-muted-foreground">{follower.lastSeen}</p>
                          )}
                          <div className="flex items-center gap-1"> {/* Reduced gap-2 to gap-1 */}
                            <p className="text-xs text-muted-foreground">{follower.mutualFriends} মিউচুয়াল</p>
                            {follower.isFollowing && (
                              <Badge variant="secondary" className="text-xs">
                                ফলোয়িং
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="mt-1 flex items-center justify-end gap-1"> {/* Reduced mt-2 to mt-1 and gap-2 to gap-1 */}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-75 transition-opacity group-hover:opacity-100"
                          >
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-75 transition-opacity group-hover:opacity-100"
                          >
                            <UserPlus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Position slider buttons inside the carousel */}
          <CarouselPrevious className="absolute left-2 top-1/2 translate-y-14 z-10 bg-black dark:bg-white text-white hover:text-black dark:hover:text-white dark:text-black hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-1" />
          <CarouselNext className="absolute right-2 top-1/2 translate-y-14 z-10 bg-black dark:bg-white text-white hover:text-black dark:hover:text-white dark:text-black hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-1" />
        </Carousel>
        {/* Add carousel dots/indicators */}
        <div className="mt-2 flex justify-center gap-2">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                current === index ? "bg-primary" : "bg-muted"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}