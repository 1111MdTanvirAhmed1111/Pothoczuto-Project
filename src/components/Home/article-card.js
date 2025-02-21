"use client"


import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ThumbsUp } from "lucide-react"
import { ArticlePreview } from "./article-preview"



export function ArticleCard({ title, excerpt, image, author, date, category, likes, comments }) {
  const [showPreview, setShowPreview] = useState(false)
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = rect.right + 20 // 20px offset from the card
    const y = rect.top

    // Check if preview would go off screen
    const viewportWidth = window.innerWidth
    const previewWidth = 400 // max preview width

    // If preview would go off right edge, show it on the left side instead
    const finalX = x + previewWidth > viewportWidth ? rect.left - previewWidth - 20 : x

    setPreviewPosition({ x: finalX, y })
    setShowPreview(true)
  }

  return (
    <>
      <Card
        className="overflow-hidden transition-shadow hover:shadow-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShowPreview(false)}
      >
        <div className="relative aspect-video sm:aspect-[2/1]">
          <img src={image || "/placeholder.svg"} alt="" className="object-cover w-full h-full" />
          <Badge className="absolute top-4 left-4">{category}</Badge>
        </div>
        <CardHeader>
          <h3 className="text-xl font-semibold tracking-tight hover:text-primary sm:text-2xl">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-2 sm:line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t p-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium">{author}</p>
              <p className="text-muted-foreground">{date}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-start">
            <Button variant="ghost" size="sm" className="space-x-2">
              <ThumbsUp className="h-4 w-4" />
              <span>{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>{comments}</span>
            </Button>
          </div>
        </CardFooter>
      </Card>

      <ArticlePreview
        title={title}
        excerpt={excerpt}
        image={image}
        author={author}
        date={date}
        category={category}
        likes={likes}
        comments={comments}
        isVisible={showPreview}
        onClose={() => setShowPreview(false)}
        position={previewPosition}
      />
    </>
  )
}

