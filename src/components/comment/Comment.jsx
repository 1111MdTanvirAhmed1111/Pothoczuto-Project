import { useState } from "react"
import { UserAvatar } from "./UserAvatar"
import { CommentForm } from "./CommentForm"
import { Reply } from "./Reply"
import { Button } from "@/components/ui/button"
import { ThumbsUp, MessageSquare } from "lucide-react"


export function Comment({
  comment,
  onUpdate,
  onDelete,
  onLike,
  onAddReply,
  onUpdateReply,
  onDeleteReply,
  onLikeReply,
  currentUser,
  users,
  onFollow,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [isReplying, setIsReplying] = useState(false)
  const commentUser = users[comment.userId]
  const isLiked = comment.likes.includes(currentUser.id)

  const handleUpdate = (content) => {
    onUpdate(comment.id, content)
    setIsEditing(false)
  }

  const handleAddReply = (content ) => {
    onAddReply(comment.id, content)
    setIsReplying(false)
  }

  return (
    <div className="flex items-start gap-4 mt-6">
      <UserAvatar user={commentUser} currentUser={currentUser} onFollow={onFollow} />
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <span className="font-medium">{commentUser.name}</span>
          <span className="text-sm text-muted-foreground">{comment.createdAt}</span>
        </div>
        {isEditing ? (
          <CommentForm initialContent={comment.content} onSubmit={handleUpdate} onCancel={() => setIsEditing(false)} />
        ) : (
          <>
            <p className="mt-1">{comment.content}</p>
            <div className="mt-2 flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLike(comment.id)}
                className={`flex items-center gap-1 ${isLiked ? "text-blue-500" : ""}`}
              >
                <ThumbsUp size={16} />
                <span className="text-xs">{comment.likes.length}</span>
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsReplying(!isReplying)}>
                <MessageSquare size={16} className="mr-1" />
                <span className="text-xs">Reply</span>
              </Button>
              {comment.userId === currentUser.id && (
                <>
                  <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => onDelete(comment.id)}>
                    Delete
                  </Button>
                </>
              )}
            </div>
          </>
        )}
        {isReplying && <CommentForm onSubmit={handleAddReply} onCancel={() => setIsReplying(false)} />}
        {comment.replies.map((reply) => (
          <Reply
            key={reply.id}
            reply={reply}
            onUpdate={(replyId, content) => onUpdateReply(comment.id, replyId, content)}
            onDelete={(replyId) => onDeleteReply(comment.id, replyId)}
            onLike={(replyId) => onLikeReply(comment.id, replyId)}
            currentUser={currentUser}
            users={users}
            onFollow={onFollow}
          />
        ))}
      </div>
    </div>
  )
}

