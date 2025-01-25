"use client"

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// Mock data for comments
const initialComments = [
  { id: 1, author: "Alice", content: "Great article!", date: "2023-06-25", status: "approved" },
  { id: 2, author: "Bob", content: "Very informative, thanks!", date: "2023-06-26", status: "pending" },
  { id: 3, author: "Charlie", content: "I have a question about...", date: "2023-06-27", status: "approved" },
]

export default function CommentsPage() {
  const params = useParams()
  const postId = params.id

  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState({ author: '', content: '' })
  const [editingComment, setEditingComment] = useState(null)

  const handleCreate = () => {
    setComments([...comments, { ...newComment, id: Date.now(), date: new Date().toISOString().split('T')[0], status: 'pending' }])
    setNewComment({ author: '', content: '' })
  }

  const handleEdit = (comment) => {
    setEditingComment(comment)
  }

  const handleUpdate = () => {
    setComments(comments.map(comment => comment.id === editingComment.id ? editingComment : comment))
    setEditingComment(null)
  }

  const handleDelete = (id) => {
    setComments(comments.filter(comment => comment.id !== id))
  }

  const handleStatusChange = (id, newStatus) => {
    setComments(comments.map(comment => 
      comment.id === id ? {...comment, status: newStatus} : comment
    ))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Comments for Post {postId}</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Comment</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Comment</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="author" className="text-right">
                  Author
                </Label>
                <Input
                  id="author"
                  value={newComment.author}
                  onChange={(e) => setNewComment({...newComment, author: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="content" className="text-right">
                  Content
                </Label>
                <Textarea
                  id="content"
                  value={newComment.content}
                  onChange={(e) => setNewComment({...newComment, content: e.target.value})}
                  className="col-span-3"
                />
              </div>
            </div>
            <Button onClick={handleCreate}>Add Comment</Button>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Author</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comments.map((comment) => (
            <TableRow key={comment.id}>
              <TableCell>{comment.author}</TableCell>
              <TableCell>{comment.content}</TableCell>
              <TableCell>{comment.date}</TableCell>
              <TableCell>{comment.status}</TableCell>
              <TableCell>
                <Button variant="outline" className="mr-2" onClick={() => handleEdit(comment)}>Edit</Button>
                <Button variant="destructive" className="mr-2" onClick={() => handleDelete(comment.id)}>Delete</Button>
                {comment.status === 'pending' ? (
                  <Button variant="secondary" onClick={() => handleStatusChange(comment.id, 'approved')}>Approve</Button>
                ) : (
                  <Button variant="secondary" onClick={() => handleStatusChange(comment.id, 'pending')}>Unapprove</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {editingComment && (
        <Dialog open={!!editingComment} onOpenChange={() => setEditingComment(null)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Comment</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-author" className="text-right">
                  Author
                </Label>
                <Input
                  id="edit-author"
                  value={editingComment.author}
                  onChange={(e) => setEditingComment({...editingComment, author: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-content" className="text-right">
                  Content
                </Label>
                <Textarea
                  id="edit-content"
                  value={editingComment.content}
                  onChange={(e) => setEditingComment({...editingComment, content: e.target.value})}
                  className="col-span-3"
                />
              </div>
            </div>
            <Button onClick={handleUpdate}>Update</Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

