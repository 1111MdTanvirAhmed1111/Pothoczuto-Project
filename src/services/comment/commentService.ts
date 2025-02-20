import type { Comment, User } from "../types/comment"

/**
 * Adds a new comment to the list of comments
 * @param comments - The current list of comments
 * @param content - The content of the new comment
 * @param currentUser - The user creating the comment
 * @returns A new list of comments including the new comment
 */
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

/**
 * Updates an existing comment
 * @param comments - The current list of comments
 * @param id - The ID of the comment to update
 * @param content - The new content for the comment
 * @param currentUserId - The ID of the current user
 * @returns A new list of comments with the updated comment
 */
export const updateComment = (comments: Comment[], id: string, content: string, currentUserId: string): Comment[] => {
  return comments.map((comment) =>
    comment.id === id && comment.userId === currentUserId ? { ...comment, content } : comment,
  )
}

/**
 * Deletes a comment from the list
 * @param comments - The current list of comments
 * @param id - The ID of the comment to delete
 * @param currentUserId - The ID of the current user
 * @returns A new list of comments without the deleted comment
 */
export const deleteComment = (comments: Comment[], id: string, currentUserId: string): Comment[] => {
  return comments.filter((comment) => !(comment.id === id && comment.userId === currentUserId))
}

/**
 * Toggles a like on a comment
 * @param comments - The current list of comments
 * @param id - The ID of the comment to like/unlike
 * @param currentUserId - The ID of the current user
 * @returns A new list of comments with the updated like status
 */
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

/**
 * Adds a new reply to a comment
 * @param comments - The current list of comments
 * @param commentId - The ID of the comment to reply to
 * @param content - The content of the new reply
 * @param currentUser - The user creating the reply
 * @returns A new list of comments including the new reply
 */
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

/**
 * Updates an existing reply
 * @param comments - The current list of comments
 * @param commentId - The ID of the parent comment
 * @param replyId - The ID of the reply to update
 * @param content - The new content for the reply
 * @param currentUserId - The ID of the current user
 * @returns A new list of comments with the updated reply
 */
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

/**
 * Deletes a reply from a comment
 * @param comments - The current list of comments
 * @param commentId - The ID of the parent comment
 * @param replyId - The ID of the reply to delete
 * @param currentUserId - The ID of the current user
 * @returns A new list of comments without the deleted reply
 */
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

/**
 * Toggles a like on a reply
 * @param comments - The current list of comments
 * @param commentId - The ID of the parent comment
 * @param replyId - The ID of the reply to like/unlike
 * @param currentUserId - The ID of the current user
 * @returns A new list of comments with the updated like status on the reply
 */
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

