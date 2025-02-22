import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Camera } from 'lucide-react'

export default function ProfileInfo() {
  return (
    <div className="container relative">
      <div className="absolute -top-24 flex items-end gap-4">
        <div className="relative">
          <Avatar className="h-32 w-32 border-4 border-background transition-transform duration-300 hover:scale-105">
            <AvatarImage src="/placeholder.svg" alt="Profile picture" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-background"
          >
            <Camera className="h-4 w-4" />
          </Button>
        </div>
        <div className="mb-4 grid gap-1">
          <h1 className="text-2xl font-bold">Jane Doe</h1>
          <p className="text-sm text-muted-foreground">Senior Product Designer • San Francisco, CA</p>
          <div className="flex gap-2 pt-2">
            <Badge variant="secondary">Product Design</Badge>
            <Badge variant="secondary">UX</Badge>
            <Badge variant="secondary">Leadership</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}