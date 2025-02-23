import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ConversationList({ conversations, activeId, onSelect }) {
  return (
    <ScrollArea className="h-[calc(80vh-73px)]">
      <div className="p-2 space-y-2">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => onSelect(conversation.id)}
            className={`flex items-center gap-2 p-2 w-full rounded-lg hover:bg-accent ${
              activeId === conversation.id ? "bg-accent" : ""
            }`}
          >
            <Avatar>
              <AvatarImage src={conversation.user.avatar} />
              <AvatarFallback>{conversation.user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{conversation.user.name}</p>
                <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
              </div>
              <p className="text-xs text-muted-foreground truncate">{conversation.lastMessage}</p>
            </div>
            {conversation.unread && <div className="w-2 h-2 rounded-full bg-primary" />}
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}
