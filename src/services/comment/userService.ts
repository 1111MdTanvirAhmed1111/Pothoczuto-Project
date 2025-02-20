import type { User } from "../types/comment"

/**
 * Toggles the follow status between two users
 * @param users - The current record of all users
 * @param currentUserId - The ID of the user initiating the follow/unfollow action
 * @param targetUserId - The ID of the user being followed/unfollowed
 * @returns An updated record of all users with the new follow status
 */
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

