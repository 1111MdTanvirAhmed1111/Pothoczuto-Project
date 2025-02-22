'use client'

import { motion } from 'framer-motion'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function FriendsSectionClient({ friend }) {
  const [isFollowing, setIsFollowing] = useState(friend.isFollowing)

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: friend.id * 0.1 }}
          className="absolute inset-0"
        />
      </HoverCardTrigger>
      <HoverCardContent className="w-80" align="center">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={friend.avatar} />
            <AvatarFallback>{friend.name[0]}</AvatarFallback>
          </Avatar>
          <div className="grid gap-1 text-center">
            <h4 className="text-base font-semibold">{friend.name}</h4>
            <p className="text-sm text-muted-foreground">{friend.mutualFriends} mutual friends</p>
            <p className="text-xs text-muted-foreground">Last active {friend.lastActive}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={isFollowing ? "secondary" : "default"}
              onClick={() => setIsFollowing(!isFollowing)}
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
            <Button size="sm" variant="outline">Message</Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}