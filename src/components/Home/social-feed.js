// Server Component
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react"

const updates = [
  {
    id: 1,
    user: "Sarah K.",
    avatar: "/placeholder-user.jpg",
    action: "shared",
    time: "2m ago",
    content: "This is a must-read piece on sustainable energy!",
    likes: 45,
    comments: 12,
    category: "Energy",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 2,
    user: "Mike R.",
    avatar: "/placeholder-user.jpg",
    action: "commented on",
    time: "5m ago",
    content: "Interesting perspective on the future of work...",
    likes: 32,
    comments: 8,
    category: "Work",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 3,
    user: "Emily W.",
    avatar: "/placeholder-user.jpg",
    action: "reacted to",
    time: "10m ago",
    content: "Breaking news: Tech giant announces new innovation",
    likes: 67,
    comments: 15,
    category: "Tech",
    image: "/placeholder.svg?height=100&width=200",
  },
]

export function SocialFeed() {
  return (
    <ScrollArea className="h-[500px]">
      <div className="space-y-4 p-4">
        {updates.map((update) => (
          <div
            key={update.id}
            className="group relative space-y-4 rounded-lg border p-4 transition-all hover:bg-muted/50"
          >
            <div className="flex items-start justify-between">
              <div className="flex space-x-3">
                <Avatar className="h-10 w-10 border-2 border-background">
                  <AvatarImage src={update.avatar} />
                  <AvatarFallback>{update.user[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">{update.user}</span>{" "}
                    <span className="text-muted-foreground">{update.action}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{update.time}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>

            <div className="relative rounded-md overflow-hidden">
              <img src={update.image || "/placeholder.svg"} alt="" className="w-full h-[100px] object-cover" />
              <Badge className="absolute top-2 left-2" variant="secondary">
                {update.category}
              </Badge>
            </div>

            <p className="text-sm">{update.content}</p>

            <div className="flex items-center justify-between border-t pt-3">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Heart className="h-4 w-4" />
                </Button>
                <span className="text-sm text-muted-foreground">{update.likes}</span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <span className="text-sm text-muted-foreground">{update.comments}</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

