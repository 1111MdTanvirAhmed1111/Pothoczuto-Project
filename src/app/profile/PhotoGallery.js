import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import PhotoGalleryClient from './PhotoGalleryClient'

export default function PhotoGallery() {
  const galleryImages = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    src: "/placeholder.svg",
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 20),
  }))

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between p-6">
        <h3 className="font-semibold">Photos</h3>
        <Button variant="ghost" size="sm">View All</Button>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={`Gallery image ${image.id}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                width={300}
                height={300}
              />
              <PhotoGalleryClient image={image} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}