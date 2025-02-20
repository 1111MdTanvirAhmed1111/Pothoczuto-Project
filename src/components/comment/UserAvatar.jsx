
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"



export function UserAvatar({ user, currentUser, onFollow, showName = false }) {
  const isFollowing = currentUser.following.includes(user.id)

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar className="w-10 h-10">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          {showName && <span className="font-medium">{user.name}</span>}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{user.name}</h4>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground mr-2">
                <span className="font-medium text-foreground">{user.followers.length}</span> followers
              </span>
              <span className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{user.following.length}</span> following
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm">{user.bio}</p>
        </div>
        {user.id !== currentUser.id && (
          <Button
            onClick={() => onFollow(user.id)}
            variant={isFollowing ? "outline" : "default"}
            className="mt-4 w-full"
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </Button>
        )}
      </HoverCardContent>
    </HoverCard>
  )
}

