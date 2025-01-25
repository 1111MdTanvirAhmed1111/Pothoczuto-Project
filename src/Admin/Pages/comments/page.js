import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { EditCommentForm } from '@/components/EditCommentForm'

async function getComments() {
  // This would be replaced with a database query in a real application
  return [
    { id: 1, postTitle: "Getting Started with Next.js", author: "Alice", content: "Great article! Very helpful.", date: "2023-05-16", status: "Approved" },
    { id: 2, postTitle: "React Hooks Explained", author: "Bob", content: "Could you elaborate more on useEffect?", date: "2023-06-03", status: "Pending" },
    { id: 3, postTitle: "CSS Grid Layout Tutorial", author: "Charlie", content: "This cleared up a lot of confusion for me. Thanks!", date: "2023-06-21", status: "Approved" },
  ]
}

export default async function CommentsPage() {
  const comments = await getComments()

  async function handleDelete(formData) {
    'use server'
    const id = formData.get('id')
    // This would be replaced with a database delete in a real application
    console.log('Deleting comment:', id)
    // Redirect or refresh the page after deleting the comment
  }

  async function handleStatusChange(formData) {
    'use server'
    const id = formData.get('id')
    const newStatus = formData.get('status')
    // This would be replaced with a database update in a real application
    console.log('Changing comment status:', id, newStatus)
    // Redirect or refresh the page after updating the comment status
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Comments</h1>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Post</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Comment</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comments.map((comment) => (
            <TableRow key={comment.id}>
              <TableCell>{comment.postTitle}</TableCell>
              <TableCell>{comment.author}</TableCell>
              <TableCell>{comment.content.substring(0, 50)}...</TableCell>
              <TableCell>{comment.date}</TableCell>
              <TableCell>{comment.status}</TableCell>
              <TableCell>
                <EditCommentForm comment={comment} />
                <form action={handleDelete} className="inline">
                  <input type="hidden" name="id" value={comment.id} />
                  <Button type="submit" variant="destructive" className="ml-2">Delete</Button>
                </form>
                <form action={handleStatusChange} className="inline">
                  <input type="hidden" name="id" value={comment.id} />
                  <input type="hidden" name="status" value={comment.status === "Pending" ? "Approved" : "Pending"} />
                  <Button type="submit" variant="outline" className="ml-2">
                    {comment.status === "Pending" ? "Approve" : "Unapprove"}
                  </Button>
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

