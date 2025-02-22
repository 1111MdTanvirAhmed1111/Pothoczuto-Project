import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Trophy } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

export default function Achievements() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between p-6">
        <h3 className="font-semibold">Achievements</h3>
        <Trophy className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent className="grid gap-4 p-4 sm:p-6 pt-0">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="font-medium">Social Butterfly</div>
            <span className="text-sm text-muted-foreground">85/100</span>
          </div>
          <Progress value={85} className="h-2" />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="font-medium">Content Creator</div>
            <span className="text-sm text-muted-foreground">45/50</span>
          </div>
          <Progress value={90} className="h-2" />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="font-medium">Trendsetter</div>
            <span className="text-sm text-muted-foreground">28/30</span>
          </div>
          <Progress value={93} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}