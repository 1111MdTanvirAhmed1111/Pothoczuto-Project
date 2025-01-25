'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Heart} from 'lucide-react'


export default function PostLiker({slug}) {

 const [likes, setLikes] = useState(false)

 const handleLike = () => {

    setLikes(!likes)
  }


  return (
    <Button 
    variant="outline" 
    size="sm" 
    onClick={handleLike} 
    className="mb-8"
  >
    <Heart className={`mr-2 h-4 w-4 ${likes ? 'fill-red-500 text-red-500' : ''}`} />
    {likes} {!likes  ? 'Like' : 'Liked'}
  </Button>
  )
}
