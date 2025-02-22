import { Card, CardContent } from '@/components/ui/card'
import { Users, Trophy, Award } from 'lucide-react'

export default function StatsSection() {
  return (
    <div className="grid gap-2 sm:gap-4 sm:grid-cols-3">
      <Card>
        <CardContent className="flex flex-col items-center gap-2 p-6">
          <Users className="h-8 w-8 text-primary" />
          <div className="text-2xl font-bold">2.5k</div>
          <p className="text-xs text-muted-foreground">Connections</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-center gap-2 p-6">
          <Trophy className="h-8 w-8 text-primary" />
          <div className="text-2xl font-bold">15</div>
          <p className="text-xs text-muted-foreground">Achievements</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-center gap-2 p-6">
          <Award className="h-8 w-8 text-primary" />
          <div className="text-2xl font-bold">98</div>
          <p className="text-xs text-muted-foreground">Endorsements</p>
        </CardContent>
      </Card>
    </div>
  )
}