'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from 'next/link'
import { CreatePostForm } from '../components/CreatePostForm'
import { EditPostForm } from '../components/EditPostForm'

export default function BlogPostsPage() {
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    // Simulating an API call
    const fetchBlogPosts = async () => {
      // In a real application, this would be an API call
      const response = await new Promise(resolve => setTimeout(() => resolve([
        { id: 1, title: "Getting Started with Next.js", author: "John Doe", date: "2023-05-15", views: 1234, comments: 23, category: "Web Development" },
        { id: 2, title: "React Hooks Explained", author: "Jane Smith", date: "2023-06-02", views: 2345, comments: 45, category: "React" },
        { id: 3, title: "CSS Grid Layout Tutorial", author: "Bob Johnson", date: "2023-06-20", views: 3456, comments: 34, category: "CSS" },
      ]), 1000))
      setBlogPosts(response)
    }

    fetchBlogPosts()
  }, [])

  const handleDelete = async (id) => {
    // In a real application, this would be an API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setBlogPosts(blogPosts.filter(post => post.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <CreatePostForm onPostCreated={(newPost) => setBlogPosts([...blogPosts, newPost])} />
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Views</TableHead>
            <TableHead>Comments</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.author}</TableCell>
              <TableCell>{post.date}</TableCell>
              <TableCell>{post.views}</TableCell>
              <TableCell>{post.comments}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>
                <EditPostForm post={post} onPostUpdated={(updatedPost) => {
                  setBlogPosts(blogPosts.map(p => p.id === updatedPost.id ? updatedPost : p))
                }} />
                <Button variant="destructive" className="ml-2" onClick={() => handleDelete(post.id)}>Delete</Button>
                <Link href={`/adminNext2/blog-posts/${post.id}/comments`}>
                  <Button variant="link">Manage Comments</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

