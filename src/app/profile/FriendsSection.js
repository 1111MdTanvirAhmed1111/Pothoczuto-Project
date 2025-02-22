import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import FriendsSectionClient from './FriendsSectionClient'

export default function FriendsSection() {
  const friends = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    name: `Friend ${i + 1}`,
    avatar: "/placeholder.svg",
    mutualFriends: Math.floor(Math.random() * 10),
    status: "Online",
    lastActive: "2 hours ago",
    isFollowing: true,
  }))

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between p-6">
        <div className="grid gap-1">
          <h3 className="font-semibold">Friends</h3>
          <p className="text-sm text-muted-foreground">You have {friends.length} friends</p>
        </div>
        <Button variant="ghost" size="sm">View All</Button>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {friends.map((friend) => (
            <div key={friend.id} className="grid gap-2">
              <div className="group relative w-full">
                <Avatar className="h-20 w-20 mx-auto border-2 border-background transition-transform duration-300 group-hover:scale-105">
                  <AvatarImage src={friend.avatar} />
                  <AvatarFallback>{friend.name[0]}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-background bg-green-500" />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium truncate">{friend.name}</div>
                <div className="text-xs text-muted-foreground">{friend.status}</div>
              </div>
              <FriendsSectionClient friend={friend} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}