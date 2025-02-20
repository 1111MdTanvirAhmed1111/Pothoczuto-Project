import { useEffect, useState } from "react"
import { Comment } from "./Comment"
import { CommentForm } from "./CommentForm"
import axios from 'axios'
// Mock current user and other users
const currentUser = {
  id: "current-user",
  name: "Current User",
  avatar: "/placeholder.svg?height=40&width=40",
  email: "currentuser@example.com",
  bio: "I am the current user.",
  followers: [],
  following: [],
}

const otherUsers = {
  user1: {
    id: "user1",
    name: "Alice",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "alice@example.com",
    bio: "I love reading blogs.",
    followers: [],
    following: [],
  },
  user2: {
    id: "user2",
    name: "Bob",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "bob@example.com",
    bio: "Tech enthusiast.",
    followers: [],
    following: [],
  },
}

// Mock initial comments
const initialComments = [
  {
    id: "1",
    content: "This is a great blog post!",
    userId: "user1",
    createdAt: "2023-06-01T12:00:00Z",
    likes: [],
    replies: [
      {
        id: "2",
        content: "Thanks, Alice!",
        userId: "current-user",
        createdAt: "2023-06-01T12:30:00Z",
        likes: [],
      },
    ],
  },
]

export function CommentSection() {


  const fetchComments = async ()=>{
  
    const res = await axios.get(`${import.meta.env.VITE_bApi}/comments/677e950eb372d0f6cdebc07f`)
    console.log(res.data)
  }
  useEffect(()=>{
    fetchComments()
  },[])

  const [comments, setComments] = useState(initialComments)
  const [users, setUsers] = useState({ ...otherUsers, [currentUser.id]: currentUser })

  const addComment = (content) => {
    const newComment = {
      id: Date.now().toString(),
      content,
      userId: currentUser.id,
      createdAt: new Date().toISOString(),
      likes: [],
      replies: [],
    }
    setComments([newComment, ...comments])
  }

  const updateComment = (id  , content  ) => {
    setComments(
      comments.map((comment) =>
        comment.id === id && comment.userId === currentUser.id ? { ...comment, content } : comment,
      ),
    )
  }

  const deleteComment = (id  ) => {
    setComments(comments.filter((comment) => !(comment.id === id && comment.userId === currentUser.id)))
  }

  const likeComment = (id  ) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              likes: comment.likes.includes(currentUser.id)
                ? comment.likes.filter((userId) => userId !== currentUser.id)
                : [...comment.likes, currentUser.id],
            }
          : comment,
      ),
    )
  }

  const addReply = (commentId  , content  ) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: Date.now().toString(),
                  content,
                  userId: currentUser.id,
                  createdAt: new Date().toISOString(),
                  likes: [],
                },
              ],
            }
          : comment,
      ),
    )
  }

  const updateReply = (commentId  , replyId  , content  ) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === replyId && reply.userId === currentUser.id ? { ...reply, content } : reply,
              ),
            }
          : comment,
      ),
    )
  }

  const deleteReply = (commentId  , replyId  ) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: comment.replies.filter((reply) => !(reply.id === replyId && reply.userId === currentUser.id)),
            }
          : comment,
      ),
    )
  }

  const likeReply = (commentId  , replyId  ) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === replyId
                  ? {
                      ...reply,
                      likes: reply.likes.includes(currentUser.id)
                        ? reply.likes.filter((userId) => userId !== currentUser.id)
                        : [...reply.likes, currentUser.id],
                    }
                  : reply,
              ),
            }
          : comment,
      ),
    )
  }

  const followUser = (userId  ) => {
    setUsers((prevUsers) => {
      const targetUser = prevUsers[userId]
      const updatedCurrentUser = {
        ...currentUser,
        following: currentUser.following.includes(userId)
          ? currentUser.following.filter((id) => id !== userId)
          : [...currentUser.following, userId],
      }
      const updatedTargetUser = {
        ...targetUser,
        followers: targetUser.followers.includes(currentUser.id)
          ? targetUser.followers.filter((id) => id !== currentUser.id)
          : [...targetUser.followers, currentUser.id],
      }
      return {
        ...prevUsers,
        [currentUser.id]: updatedCurrentUser,
        [userId]: updatedTargetUser,
      }
    })
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <CommentForm onSubmit={addComment} />
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onUpdate={updateComment}
          onDelete={deleteComment}
          onLike={likeComment}
          onAddReply={addReply}
          onUpdateReply={updateReply}
          onDeleteReply={deleteReply}
          onLikeReply={likeReply}
          currentUser={currentUser}
          users={users}
          onFollow={followUser}
        />
      ))}
    </div>
  )
}

