"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Heart, MessageCircle } from "lucide-react"



const photoShorts= [
  {
    id: 1,
    title: "সূর্যাস্তের রঙে রাঙানো ঢাকার আকাশ",
    image: "/placeholder.svg?height=400&width=300",
    category: "প্রকৃতি",
    author: {
      name: "আনিকা রহমান",
      avatar: "/placeholder-user.jpg",
    },
    likes: 245,
    comments: 23,
  },
  {
    id: 2,
    title: "পদ্মা সেতুর অপরূপ দৃশ্য",
    image: "/placeholder.svg?height=400&width=300",
    category: "ভ্রমণ",
    author: {
      name: "তানভীর হাসান",
      avatar: "/placeholder-user.jpg",
    },
    likes: 189,
    comments: 15,
  },
  {
    id: 3,
    title: "বর্ষায় সবুজ বাংলাদেশ",
    image: "/placeholder.svg?height=400&width=300",
    category: "প্রকৃতি",
    author: {
      name: "সাদিয়া আক্তার",
      avatar: "/placeholder-user.jpg",
    },
    likes: 312,
    comments: 28,
  },
  {
    id: 4,
    title: "কক্সবাজারের সূর্যোদয়",
    image: "/placeholder.svg?height=400&width=300",
    category: "ভ্রমণ",
    author: {
      name: "রাফি আহমেদ",
      avatar: "/placeholder-user.jpg",
    },
    likes: 276,
    comments: 19,
  },
  {
    id: 5,
    title: "ঐতিহ্যবাহী লালবাগ কেল্লা",
    image: "/placeholder.svg?height=400&width=300",
    category: "ঐতিহ্য",
    author: {
      name: "নাফিসা ইসলাম",
      avatar: "/placeholder-user.jpg",
    },
    likes: 198,
    comments: 17,
  },
  {
    id: 6,
    title: "শীতের সকালে ধানক্ষেত",
    image: "/placeholder.svg?height=400&width=300",
    category: "প্রকৃতি",
    author: {
      name: "জাহিদ হাসান",
      avatar: "/placeholder-user.jpg",
    },
    likes: 234,
    comments: 21,
  },
]

export  function PhotoShorts() {
  return (
    <Card className="mt-6">
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">ফটো শর্টস</h2>
            <p className="text-sm text-muted-foreground">দৃষ্টিনন্দন মুহূর্তগুলো</p>
          </div>
          <Badge variant="secondary" className="px-2 py-1">
            নতুন {photoShorts.length}
          </Badge>
        </div>
      </div>
      <ScrollArea className="h-[400px]">
        <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3">
          {photoShorts.map((short) => (
            <motion.div
              key={short.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={short.image || "/placeholder.svg"}
                alt={short.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Author Avatar */}
              <div className="absolute left-2 top-2 z-10">
                <Avatar className="h-8 w-8 border-2 border-white/50">
                  <AvatarImage src={short.author.avatar} />
                  <AvatarFallback>{short.author.name[0]}</AvatarFallback>
                </Avatar>
              </div>

              {/* Category Badge */}
              <Badge variant="secondary" className="absolute right-2 top-2 bg-black/50 text-white hover:bg-black/60">
                {short.category}
              </Badge>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="mb-2 line-clamp-2 text-sm font-medium text-white">{short.title}</h3>
                <div className="flex items-center justify-between text-xs text-white/80">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Heart className="mr-1 h-3 w-3" />
                      <span>{short.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="mr-1 h-3 w-3" />
                      <span>{short.comments}</span>
                    </div>
                  </div>
                  <span className="text-xs opacity-75">{short.author.name}</span>
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"
                initial={false}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  className="rounded-full bg-white/10 p-3 backdrop-blur-sm"
                >
                  <Heart className="h-6 w-6 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}

