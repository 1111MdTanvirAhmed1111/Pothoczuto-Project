"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updateComment } from "@/lib/comment-actions"
import { useState } from 'react';


function EditComment({content,id}) {
const [newComment, setNewComment] = useState(content)

    
  return (
    <Dialog>
       
    <DialogTrigger asChild>
      <Button variant="outline">Edit</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">


    <form action={updateComment.bind(null,id)}>


      <DialogHeader>
        <DialogTitle>Edit Your Comment</DialogTitle>
        <DialogDescription>
          Editing your comment will update it for everyone.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
      
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="content" className="text-right">
            New Comment
          </Label>
          <Input value={newComment} onChange={e=>setNewComment(e.target.value)} id="username" name="content" className="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <DialogTrigger>
        <Button type="submit">Save changes</Button>
        </DialogTrigger>
      </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
  )
}

export default EditComment