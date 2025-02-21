import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, ArrowDown, FlameIcon as Fire } from "lucide-react"

const topics = [
  {
    id: 1,
    topic: "Climate Change",
    category: "Environment",
    mentions: "23.5K",
    percentage: 85,
    trending: "up",
    hot: true,
  },
  {
    id: 2,
    topic: "Artificial Intelligence",
    category: "Technology",
    mentions: "19.2K",
    percentage: 75,
    trending: "up",
    hot: true,
  },
  {
    id: 3,
    topic: "Space Exploration",
    category: "Science",
    mentions: "15.7K",
    percentage: 65,
    trending: "down",
    hot: false,
  },
  {
    id: 4,
    topic: "Global Economy",
    category: "Finance",
    mentions: "12.3K",
    percentage: 55,
    trending: "up",
    hot: false,
  },
  {
    id: 5,
    topic: "Healthcare Innovation",
    category: "Health",
    mentions: "10.1K",
    percentage: 45,
    trending: "down",
    hot: false,
  },
]

const categoryColors = {
  Environment: "bg-green-500",
  Technology: "bg-blue-500",
  Science: "bg-purple-500",
  Finance: "bg-yellow-500",
  Health: "bg-red-500",
}

export function TrendingTopics() {
  return (
    <ScrollArea className="h-[400px]">
      <div className="space-y-4 p-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="group relative space-y-3 rounded-lg border p-4 transition-all hover:bg-muted/50"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`h-2 w-2 rounded-full ${categoryColors[topic.category]}`} />
                <span className="text-sm font-medium text-muted-foreground">{topic.category}</span>
              </div>
              <div className="flex items-center space-x-2">
                {topic.hot && <Fire className="h-4 w-4 text-red-500" />}
                {topic.trending === "up" ? (
                  <ArrowUp className="h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDown className="h-4 w-4 text-red-500" />
                )}
              </div>
            </div>
            <div>
              <h4 className="font-semibold tracking-tight">{topic.topic}</h4>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{topic.mentions} mentions</span>
                <Badge variant="secondary" className="group-hover:bg-background">
                  #{topic.id}
                </Badge>
              </div>
            </div>
            <Progress value={topic.percentage} className="h-1.5" />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

