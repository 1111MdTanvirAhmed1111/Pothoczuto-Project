'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentPosts() {
  const posts = [
    { title: "Top 10 React Hooks", author: "John Doe", views: 5234 },
    { title: "CSS Grid Mastery", author: "Jane Smith", views: 3879 },
    { title: "Next.js 13 Features", author: "Robert Johnson", views: 2456 },
    { title: "TypeScript Best Practices", author: "Alice Lee", views: 1987 },
  ]

  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/avatars/0${index + 1}.png`} alt="Avatar" />
            <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{post.title}</p>
            <p className="text-sm text-muted-foreground">
              By {post.author}
            </p>
          </div>
          <div className="ml-auto font-medium">{post.views.toLocaleString()} views</div>
        </div>
      ))}
    </div>
  )
}

