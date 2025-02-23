"use client"

import * as React from "react"
import { Send, Paperclip, Image, Smile, MoreVertical, Phone, Video } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Message {
  id: string
  content: string
  sender: string
  timestamp: Date
  status: "sent" | "delivered" | "read"
  type: "text" | "image"
  senderAvatar?: string
}

interface ChatUser {
  id: string
  name: string
  avatar?: string
  status: "online" | "offline"
  lastSeen?: Date
}

export default function ChatLayout() {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      content: "Hey, how are you?",
      sender: "user1",
      timestamp: new Date(),
      status: "read",
      type: "text",
    },
    {
      id: "2",
      content: "I'm good! Just working on some new features.",
      sender: "user2",
      timestamp: new Date(),
      status: "read",
      type: "text",
    },
  ])
  const [isTyping, setIsTyping] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("")
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const currentUser: ChatUser = {
    id: "user1",
    name: "John Doe",
    status: "online",
    avatar: "/placeholder.svg?height=32&width=32",
  }

  const otherUser: ChatUser = {
    id: "user2",
    name: "Jane Smith",
    status: "online",
    avatar: "/placeholder.svg?height=32&width=32",
  }

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: currentUser.id,
      timestamp: new Date(),
      status: "sent",
      type: "text",
    }

    setMessages((prev) => [...prev, newMessage])
    setInputValue("")
  }

  return (
    <Card className="w-full max-w-4xl mx-auto h-[80vh] grid grid-cols-[280px_1fr]">
      {/* Conversations Sidebar */}
      <div className="border-r">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={currentUser.avatar} />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-sm font-semibold">{currentUser.name}</h2>
              <p className="text-xs text-muted-foreground">Active</p>
            </div>
          </div>
        </div>
        <ScrollArea className="h-[calc(80vh-73px)]">
          <div className="p-2 space-y-2">
            {/* Active conversation */}
            <div className="flex items-center gap-2 p-2 bg-accent rounded-lg">
              <Avatar>
                <AvatarImage src={otherUser.avatar} />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{otherUser.name}</p>
                  <span className="text-xs text-muted-foreground">12m</span>
                </div>
                <p className="text-xs text-muted-foreground truncate">{messages[messages.length - 1]?.content}</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={otherUser.avatar} />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-sm font-semibold">{otherUser.name}</h2>
              <p className="text-xs text-muted-foreground">Active now</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View profile</DropdownMenuItem>
                <DropdownMenuItem>Mute notifications</DropdownMenuItem>
                <DropdownMenuItem>Block user</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea ref={scrollRef} className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === currentUser.id ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex gap-2 max-w-[70%] ${message.sender === currentUser.id ? "flex-row-reverse" : ""}`}
                >
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={message.sender === currentUser.id ? currentUser.avatar : otherUser.avatar} />
                    <AvatarFallback>{message.sender === currentUser.id ? "JD" : "JS"}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div
                      className={`rounded-lg px-3 py-2 ${
                        message.sender === currentUser.id ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      {message.content}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                      {message.sender === currentUser.id && (
                        <span className="text-xs text-muted-foreground">{message.status}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={otherUser.avatar} />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg px-3 py-2">
                  <span className="text-sm">Typing...</span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 border-t">
          <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <Button type="button" variant="ghost" size="icon">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button type="button" variant="ghost" size="icon">
              <Image className="h-4 w-4" />
            </Button>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button type="button" variant="ghost" size="icon">
              <Smile className="h-4 w-4" />
            </Button>
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </Card>
  )
}

