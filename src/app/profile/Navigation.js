import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Home, Bell, MessageSquare, Music } from 'lucide-react'
import NavigationClient from './NavigationClient'

export default function Navigation() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <nav className="flex flex-1 items-center gap-6">
          <Link href="#" className="flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">SocialHub</span>
          </Link>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Home className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Music className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
        <NavigationClient />
      </div>
    </header>
  )
}