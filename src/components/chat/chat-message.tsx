import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ChatMessageProps {
  content: string
  sender: {
    name: string
    avatar?: string
  }
  timestamp: Date
  status?: "sent" | "delivered" | "read"
  isCurrentUser: boolean
}

export function ChatMessage({ content, sender, timestamp, status, isCurrentUser }: ChatMessageProps) {
  return (
    <div className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
      <div className={`flex gap-2 max-w-[70%] ${isCurrentUser ? "flex-row-reverse" : ""}`}>
        <Avatar className="h-6 w-6">
          <AvatarImage src={sender.avatar} />
          <AvatarFallback>{sender.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <div className={`rounded-lg px-3 py-2 ${isCurrentUser ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
            {content}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-muted-foreground">
              {timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </span>
            {isCurrentUser && status && <span className="text-xs text-muted-foreground">{status}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

