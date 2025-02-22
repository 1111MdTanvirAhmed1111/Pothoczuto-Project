'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Heart, MessageSquare, Share2, BookMarked } from 'lucide-react'

export default function PostClient({ children }) {
  const [reactions, setReactions] = useState({
    likes: 2500,
    comments: 45,
    shares: 12,
    isLiked: false,
    isBookmarked: false,
  })

  const toggleLike = () => {
    setReactions((prev) => ({
      ...prev,
      likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1,
      isLiked: !prev.isLiked,
    }))
  }

  const toggleBookmark = () => {
    setReactions((prev) => ({
      ...prev,
      isBookmarked: !prev.isBookmarked,
    }))
  }

  return (
    <div>
      {children}
      <div className="flex items-center gap-4 mt-4 px-4 sm:px-6">
        <Button variant="ghost" size="sm" className="gap-2" onClick={toggleLike}>
          <Heart
            className={`h-4 w-4 ${reactions.isLiked ? "fill-red-500 text-red-500" : ""} transition-colors`}
          />
          <span className="text-sm">{reactions.likes.toLocaleString()}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <MessageSquare className="h-4 w-4" />
          <span className="text-sm">{reactions.comments}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <Share2 className="h-4 w-4" />
          <span className="text-sm">{reactions.shares}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2 ml-auto" onClick={toggleBookmark}>
          <BookMarked
            className={`h-4 w-4 ${reactions.isBookmarked ? "fill-primary text-primary" : ""}`}
          />
        </Button>
      </div>
    </div>
  )
}