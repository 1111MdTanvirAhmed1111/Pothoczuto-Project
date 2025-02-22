import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ImageIcon, Smile, LinkIcon } from 'lucide-react'
import CreatePostClient from './CreatePostClient'

export default function CreatePost() {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <div className="grid gap-4">
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Input placeholder="What's on your mind?" className="border-0 bg-muted px-3 py-2 text-sm" />
            </div>
          </div>
          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <ImageIcon className="h-4 w-4" />
                Photo
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Smile className="h-4 w-4" />
                Feeling
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <LinkIcon className="h-4 w-4" />
                Link
              </Button>
            </div>
            <CreatePostClient />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}