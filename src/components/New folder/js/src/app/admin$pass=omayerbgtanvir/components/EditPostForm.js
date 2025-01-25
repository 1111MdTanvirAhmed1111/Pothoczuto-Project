'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from '@/components/ui/dialog';
import { updatePost } from '../../../lib/post-actions';
export default function EditPostForm({ post }) {
    const [open, setOpen] = useState(false);
    async function handleSubmit(formData) {
        await updatePost(post._id, formData);
        setOpen(false);
    }
    return (<Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Post</DialogTitle>
        </DialogHeader>
        <form action={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" defaultValue={post.title} required/>
          </div>
          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" className="whitespace-pre-wrap" name="content" defaultValue={post.content} required/>
          </div>
          <div>
            <Label htmlFor="author">Author</Label>
            <Input id="author" name="author" defaultValue={post.author} required/>
          </div>
          <div>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input id="imageUrl" name="imageUrl" defaultValue={post.imageUrl}/>
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Input id="category" name="category" defaultValue={post.category}/>
          </div>
          <Button type="submit">Update Post</Button>
        </form>
      </DialogContent>
    </Dialog>);
}
