"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, ThumbsUp, Clock, Eye } from "lucide-react"



export function ArticlePreview({
  title,
  excerpt,
  image,
  author,
  date,
  category,
  likes,
  comments,
  isVisible,
  onClose,
  position,
}) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          style={{
            position: "fixed",
            left: `${position.x}px`,
            top: `${position.y}px`,
            zIndex: 50,
          }}
          className="pointer-events-none"
        >
          <Card className="w-[300px] sm:w-[400px] shadow-2xl">
            <CardContent className="p-4 space-y-4">
              <div className="relative aspect-video">
                <img src={image || "/placeholder.svg"} alt="" className="rounded-md object-cover w-full h-full" />
                <Badge className="absolute top-2 left-2">{category}</Badge>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold line-clamp-2">{title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{author}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  {date}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <ThumbsUp className="mr-1 h-3 w-3" />
                    {likes}
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="mr-1 h-3 w-3" />
                    {comments}
                  </div>
                </div>
                <div className="flex items-center">
                  <Eye className="mr-1 h-3 w-3" />
                  {Math.floor(Math.random() * 1000) + 100} পাঠক
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

