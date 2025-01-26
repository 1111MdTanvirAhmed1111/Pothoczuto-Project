
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function EditCommentForm({ comment }) {
  const [editingComment, setEditingComment] = useState(comment)

  async function handleUpdate(formData) {
  
    // This would be replaced with a database update in a real application
    console.log('Updating comment:', Object.fromEntries(formData))
    // Redirect or refresh the page after updating the comment
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Comment</DialogTitle>
        </DialogHeader>
        <form action={handleUpdate}>
          <input type="hidden" name="id" value={editingComment.id} />
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-author" className="text-right">
                Author
              </Label>
              <input
                id="edit-author"
                name="author"
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
                name="content"
                value={editingComment.content}
                onChange={(e) => setEditingComment({...editingComment, content: e.target.value})}
                className="col-span-3"
              />
            </div>
          </div>
          <Button type="submit">Update</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

