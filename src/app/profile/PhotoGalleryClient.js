// app/profile/PhotoGalleryClient.js
'use client'

import { motion } from 'framer-motion'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

export default function PhotoGalleryClient({ children, image }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-lg">
      <Dialog>
        <DialogTrigger asChild>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: image.id * 0.1 }}
            className="w-full h-full"
          >
            {children}
          </motion.button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          {/* Dialog content */}
        </DialogContent>
      </Dialog>
      {/* Hover overlay */}
    </div>
  )
}
