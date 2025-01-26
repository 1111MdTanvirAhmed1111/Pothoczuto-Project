
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogCard({ title, author, excerpt, date, imageUrl, category }) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">

      
      <div className="relative w-full h-64 flex overflow-hidden items-center ">
        <img
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-all duration-300 hover:scale-110 "
        />
        <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">{category}</Badge>
      </div>
      <CardHeader className="pb-4">
        <h2 className="text-xl font-semibold line-clamp-2">{title}</h2>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-2">{author}</p>
        <p className="line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">{date}</CardFooter>
    </Card>
  )
}

