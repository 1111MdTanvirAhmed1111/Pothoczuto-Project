import { useState } from "react"
import { UserAvatar } from "./UserAvatar"
import { CommentForm } from "./CommentForm"
import { Button } from "@/components/ui/button"
import { ThumbsUp } from "lucide-react"


export function Reply({ reply, onUpdate, onDelete, onLike, currentUser, users, onFollow }) {
  const [isEditing, setIsEditing] = useState(false)
  const replyUser = users[reply.userId]
  const isLiked = reply.likes.includes(currentUser.id)

  const handleUpdate = (content   ) => {
    onUpdate(reply.id, content)
    setIsEditing(false)
  }

  return (
    <div className="flex gap-4 mt-4 ml-8">
      <UserAvatar user={replyUser} currentUser={currentUser} onFollow={onFollow} />
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <span className="font-medium">{replyUser.name}</span>
          <span className="text-sm text-muted-foreground">{reply.createdAt}</span>
        </div>
        {isEditing ? (
          <CommentForm initialContent={reply.content} onSubmit={handleUpdate} onCancel={() => setIsEditing(false)} />
        ) : (
          <>
            <p className="mt-1">{reply.content}</p>
            <div className="mt-2 flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLike(reply.id)}
                className={`flex items-center gap-1 ${isLiked ? "text-blue-500" : ""}`}
              >
                <ThumbsUp size={16} />
                <span className="text-xs">{reply.likes.length}</span>
              </Button>
              {reply.userId === currentUser.id && (
                <>
                  <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => onDelete(reply.id)}>
                    Delete
                  </Button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

