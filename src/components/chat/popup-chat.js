"use client"

import * as React from "react"
import { Minus, Maximize2, X, Send, Image, Smile, Paperclip } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useChat } from '@/contexts/chat-context'


export default function PopupChat() {
  const {chat,setChat} = useChat()
  const [isMinimized, setIsMinimized] = React.useState(false)
  const [messages, setMessages] = React.useState([
    {
      id: "1",
      content: "Hey! How are you?",
      sender: "other",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
    {
      id: "2",
      content: "I'm good, thanks! Just working on some code.",
      sender: "user",
      timestamp: new Date(Date.now() - 1000 * 60 * 2),
    },
  ])
  const [input, setInput] = React.useState("")

  const scrollRef = React.useRef(null)

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMessage = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])
    setInput("")
  }

  return (
chat &&
    <Card className="fixed bottom-4 right-4 w-80 shadow-lg">
      {/* Chat Header */}
      <CardHeader className="p-3 border-b flex flex-row items-center space-x-2 space-y-0">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="text-sm font-semibold">Jane Smith</div>
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Active now
          </div>
        </div>
        <div className="flex items-center gap-0.5">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsMinimized(!isMinimized)}>
            <Minus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Maximize2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      {/* Chat Content */}
      {!isMinimized && (
        <>
          <CardContent className="p-0">
            <ScrollArea ref={scrollRef} className="h-[320px] p-3">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.sender === "other" && (
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                    )}
                    <div className="flex flex-col gap-1">
                      <div
                        className={`rounded-lg px-3 py-2 max-w-[80%] ${
                          message.sender === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"
                        }`}
                      >
                        {message.content}
                      </div>
                      <span className="text-[10px] text-muted-foreground px-2">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-3 border-t">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                    <Image className="h-4 w-4" />
                  </Button>
                  <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                </div>
                <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Aa" className="h-8" />
                <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button type="submit" size="icon" className="h-8 w-8 px-10">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  )
}
