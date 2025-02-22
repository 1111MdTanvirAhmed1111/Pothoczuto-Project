import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { BookMarked } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'

export default function Trending() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between p-6">
        <h3 className="font-semibold">Trending</h3>
        <BookMarked className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[300px]">
          <div className="grid">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="grid gap-2 border-b p-4 transition-colors hover:bg-muted/50"
              >
                <div className="font-medium">Design Trends {2024 - i}</div>
                <p className="text-sm text-muted-foreground">
                  The latest design trends that are shaping the industry...
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">Design</Badge>
                  <Badge variant="secondary">Trends</Badge>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}