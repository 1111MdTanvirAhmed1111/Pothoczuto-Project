import type { Comment, User } from "../types/comment"

export const addComment = (comments: Comment[], content: string, currentUser: User): Comment[] => {
  const newComment: Comment = {
    id: Date.now().toString(),
    content,
    userId: currentUser.id,
    createdAt: new Date().toISOString(),
    likes: [],
    replies: [],
  }
  return [newComment, ...comments]
}

export const updateComment = (comments: Comment[], id: string, content: string, currentUserId: string): Comment[] => {
  return comments.map((comment) =>
    comment.id === id && comment.userId === currentUserId ? { ...comment, content } : comment,
  )
}

export const deleteComment = (comments: Comment[], id: string, currentUserId: string): Comment[] => {
  return comments.filter((comment) => !(comment.id === id && comment.userId === currentUserId))
}

export const likeComment = (comments: Comment[], id: string, currentUserId: string): Comment[] => {
  return comments.map((comment) =>
    comment.id === id
      ? {
          ...comment,
          likes: comment.likes.includes(currentUserId)
            ? comment.likes.filter((userId) => userId !== currentUserId)
            : [...comment.likes, currentUserId],
        }
      : comment,
  )
}

export const addReply = (comments: Comment[], commentId: string, content: string, currentUser: User): Comment[] => {
  return comments.map((comment) =>
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
  )
}

export const updateReply = (
  comments: Comment[],
  commentId: string,
  replyId: string,
  content: string,
  currentUserId: string,
): Comment[] => {
  return comments.map((comment) =>
    comment.id === commentId
      ? {
          ...comment,
          replies: comment.replies.map((reply) =>
            reply.id === replyId && reply.userId === currentUserId ? { ...reply, content } : reply,
          ),
        }
      : comment,
  )
}

export const deleteReply = (
  comments: Comment[],
  commentId: string,
  replyId: string,
  currentUserId: string,
): Comment[] => {
  return comments.map((comment) =>
    comment.id === commentId
      ? {
          ...comment,
          replies: comment.replies.filter((reply) => !(reply.id === replyId && reply.userId === currentUserId)),
        }
      : comment,
  )
}

export const likeReply = (
  comments: Comment[],
  commentId: string,
  replyId: string,
  currentUserId: string,
): Comment[] => {
  return comments.map((comment) =>
    comment.id === commentId
      ? {
          ...comment,
          replies: comment.replies.map((reply) =>
            reply.id === replyId
              ? {
                  ...reply,
                  likes: reply.likes.includes(currentUserId)
                    ? reply.likes.filter((userId) => userId !== currentUserId)
                    : [...reply.likes, currentUserId],
                }
              : reply,
          ),
        }
      : comment,
  )
}

export const followUser = (
  users: Record<string, User>,
  currentUserId: string,
  targetUserId: string,
): Record<string, User> => {
  const currentUser = users[currentUserId]
  const targetUser = users[targetUserId]

  const updatedCurrentUser = {
    ...currentUser,
    following: currentUser.following.includes(targetUserId)
      ? currentUser.following.filter((id) => id !== targetUserId)
      : [...currentUser.following, targetUserId],
  }

  const updatedTargetUser = {
    ...targetUser,
    followers: targetUser.followers.includes(currentUserId)
      ? targetUser.followers.filter((id) => id !== currentUserId)
      : [...targetUser.followers, currentUserId],
  }

  return {
    ...users,
    [currentUserId]: updatedCurrentUser,
    [targetUserId]: updatedTargetUser,
  }
}

