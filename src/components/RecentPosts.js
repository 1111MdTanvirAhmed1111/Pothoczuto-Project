import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentPosts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Top 10 React Hooks</p>
              <p className="text-sm text-muted-foreground">
                By John Doe
              </p>
            </div>
            <div className="ml-auto font-medium">5,234 views</div>
          </div>
          <div className="flex items-center">
            <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
              <AvatarImage src="/avatars/02.png" alt="Avatar" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">CSS Grid Mastery</p>
              <p className="text-sm text-muted-foreground">By Jane Smith</p>
            </div>
            <div className="ml-auto font-medium">3,879 views</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/03.png" alt="Avatar" />
              <AvatarFallback>RJ</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Next.js 13 Features</p>
              <p className="text-sm text-muted-foreground">
                By Robert Johnson
              </p>
            </div>
            <div className="ml-auto font-medium">2,456 views</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/04.png" alt="Avatar" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">TypeScript Best Practices</p>
              <p className="text-sm text-muted-foreground">
                By Alice Lee
              </p>
            </div>
            <div className="ml-auto font-medium">1,987 views</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

