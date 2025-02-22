import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { MoreHorizontal } from 'lucide-react'
import PostClient from './PostClient'

export default function Post() {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 gap-4">
            <div className="flex items-start justify-between">
              <div className="grid gap-1">
                <div className="font-semibold">Jane Doe</div>
                <div className="text-sm text-muted-foreground">2 hours ago</div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-4">
              <p>Just achieved a major milestone in our latest design project! 🎉</p>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Post image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                />
              </div>
            </div>
            <PostClient />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}