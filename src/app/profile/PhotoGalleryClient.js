'use client'

import { motion } from 'framer-motion'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Heart, MessageSquare } from 'lucide-react'

export default function PhotoGalleryClient({ image }) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: image.id * 0.1 }}
            className="w-full h-full"
          >
            {/* Empty button for trigger */}
          </motion.button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Photo</DialogTitle>
            <DialogDescription>Posted on January 20, 2024</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <Image
              src={image.src}
              alt={`Gallery image ${image.id}`}
              className="rounded-lg"
              width={800}
              height={600}
            />
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <Heart className="h-4 w-4" />
                {image.likes}
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                {image.comments}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute bottom-2 left-2 flex items-center gap-2 text-white">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 rounded-full p-0 text-white hover:text-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <span className="text-sm">{image.likes}</span>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 rounded-full p-0 text-white hover:text-white"
          >
            <MessageSquare className="h-4 w-4" />
          </Button>
          <span className="text-sm">{image.comments}</span>
        </div>
      </div>
    </>
  )
}