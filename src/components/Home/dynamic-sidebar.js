"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  ChevronRight,
  Users,
  FlameIcon as Fire,
  ArrowUp,
  ArrowDown,
} from "lucide-react"
import { ScrollIndicator } from "@/components/Home/scroll-indicator"

const topics = [
  {
    id: 1,
    topic: "জলবায়ু পরিবর্তন",
    category: "পরিবেশ",
    mentions: "২৩.৫হা",
    percentage: 85,
    trending: "up",
    hot: true,
  },
  {
    id: 2,
    topic: "কৃত্রিম বুদ্ধিমত্তা",
    category: "প্রযুক্তি",
    mentions: "১৯.২হা",
    percentage: 75,
    trending: "up",
    hot: true,
  },
  {
    id: 3,
    topic: "মহাকাশ অভিযান",
    category: "বিজ্ঞান",
    mentions: "১৫.৭হা",
    percentage: 65,
    trending: "down",
    hot: false,
  },
  {
    id: 4,
    topic: "বিশ্ব অর্থনীতি",
    category: "অর্থনীতি",
    mentions: "১২.৩হা",
    percentage: 55,
    trending: "up",
    hot: false,
  },
  {
    id: 5,
    topic: "স্বাস্থ্য উদ্ভাবন",
    category: "স্বাস্থ্য",
    mentions: "১০.১হা",
    percentage: 45,
    trending: "down",
    hot: false,
  },
]

const socialUpdates = [
  {
    id: 1,
    type: "trending",
    category: "প্রযুক্তি",
    title: "স্বাস্থ্যসেবায় কৃত্রিম বুদ্ধিমত্তার উত্থান",
    image: "/placeholder.svg?height=200&width=300",
    engagement: { likes: 1234, comments: 89 },
    trending: true,
  },
  {
    id: 2,
    type: "social",
    user: {
      name: "সারাহ জনসন",
      avatar: "/placeholder-user.jpg",
      handle: "@সারাহজে",
    },
    content: "নবায়নযোগ্য শক্তি নিয়ে আমার সর্বশেষ গবেষণা প্রকাশিত হলো! 🌱 #টেকসই",
    time: "১০মি আগে",
    engagement: { likes: 456, comments: 23 },
  },
  {
    id: 3,
    type: "live",
    title: "সর্বশেষ: স্পেসএক্স উৎক্ষেপণ",
    viewers: 15234,
    status: "লাইভ",
    image: "/placeholder.svg?height=150&width=250",
  },
]

const categoryColors = {
  পরিবেশ: "bg-green-500",
  প্রযুক্তি: "bg-blue-500",
  বিজ্ঞান: "bg-purple-500",
  অর্থনীতি: "bg-yellow-500",
  স্বাস্থ্য: "bg-red-500",
}

export function DynamicSidebar() {
  const [expandedCard, setExpandedCard] = useState(null)

  return (
    <ScrollArea className="h-[800px]">
      <div className="grid gap-4 p-4">
        <Card className="overflow-hidden">
          <div className="border-b bg-muted/50 p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <h2 className="text-lg font-semibold">ট্রেন্ডিং বিষয়সমূহ</h2>
                <p className="text-sm text-muted-foreground">মানুষ কি নিয়ে আলোচনা করছে</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <ScrollArea className="h-[300px]">
              <div className="space-y-4 p-4">
                {topics.map((topic) => (
                  <motion.div
                    key={topic.id}
                    className="group relative space-y-3 rounded-lg border p-4 transition-all hover:bg-muted/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`h-2 w-2 rounded-full ${categoryColors[topic.category]}`} />
                        <span className="text-sm font-medium text-muted-foreground">{topic.category}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {topic.hot && <Fire className="h-4 w-4 text-red-500" />}
                        {topic.trending === "up" ? (
                          <ArrowUp className="h-4 w-4 text-green-500" />
                        ) : (
                          <ArrowDown className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold tracking-tight">{topic.topic}</h4>
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{topic.mentions} উল্লেখ</span>
                        <Badge variant="secondary" className="group-hover:bg-background">
                          #{topic.id}
                        </Badge>
                      </div>
                    </div>
                    <Progress value={topic.percentage} className="h-1.5" />
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
            <ScrollIndicator />
          </div>
        </Card>

        <div className="relative grid gap-4">
          {socialUpdates.map((update) => (
            <motion.div
              key={update.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card
                className="group relative overflow-hidden"
                onMouseEnter={() => setExpandedCard(update.id)}
                onMouseLeave={() => setExpandedCard(null)}
              >
                {update.type === "trending" && (
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={update.image || "/placeholder.svg"}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 p-4">
                      <Badge className="mb-2" variant="secondary">
                        {update.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-white">{update.title}</h3>
                      <div className="mt-2 flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4 text-white" />
                          <span className="text-sm text-white">{update.engagement.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4 text-white" />
                          <span className="text-sm text-white">{update.engagement.comments}</span>
                        </div>
                      </div>
                    </div>
                    {update.trending && (
                      <div className="absolute right-2 top-2 flex items-center space-x-1 rounded-full bg-black/60 px-2 py-1">
                        <Fire className="h-4 w-4 text-orange-500" />
                        <span className="text-xs text-white">ট্রেন্ডিং</span>
                      </div>
                    )}
                  </div>
                )}

                {update.type === "social" && (
                  <div className="p-4">
                    <div className="flex items-start space-x-3">
                      <Avatar>
                        <AvatarImage src={update.user.avatar} />
                        <AvatarFallback>{update.user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{update.user.name}</p>
                            <p className="text-sm text-muted-foreground">{update.user.handle}</p>
                          </div>
                          <p className="text-xs text-muted-foreground">{update.time}</p>
                        </div>
                        <p className="mt-2">{update.content}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm" className="h-8 space-x-1">
                              <Heart className="h-4 w-4" />
                              <span>{update.engagement.likes}</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 space-x-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>{update.engagement.comments}</span>
                            </Button>
                          </div>
                          <Button variant="ghost" size="sm" className="h-8">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {update.type === "live" && (
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={update.image || "/placeholder.svg"}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 p-4">
                      <div className="mb-2 flex items-center space-x-2">
                        <Badge variant="destructive" className="animate-pulse">
                          {update.status}
                        </Badge>
                        <div className="flex items-center space-x-1 text-white">
                          <Users className="h-4 w-4" />
                          <span className="text-sm">{update.viewers.toLocaleString()}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{update.title}</h3>
                    </div>
                  </div>
                )}

                <AnimatePresence>
                  {expandedCard === update.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity"
                    >
                      <Button variant="secondary" className="space-x-2">
                        <span>আরো পড়ুন</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
          <ScrollIndicator />
        </div>
      </div>
    </ScrollArea>
  )
}

