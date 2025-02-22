import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Camera } from 'lucide-react'

export default function Header() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden">
      <Image
        src="/placeholder.svg"
        alt="Cover photo"
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        width={1200}
        height={300}
        priority
      />
      <Button variant="ghost" size="icon" className="absolute right-4 top-4 bg-background/80 backdrop-blur-sm">
        <Camera className="h-4 w-4" />
      </Button>
    </div>
  )
}