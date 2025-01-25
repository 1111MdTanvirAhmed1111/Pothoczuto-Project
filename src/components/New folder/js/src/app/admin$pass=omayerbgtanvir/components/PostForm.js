'use client';
import { useRef } from 'react';
import { createPost } from '../../../lib/post-actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CldUploadWidget } from "next-cloudinary";
export default function PostForm() {
    const formRef = useRef();
    async function handleSubmit(formData) {
        await createPost(formData);
        formRef.current.reset();
    }
    return (<form ref={formRef} action={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" required/>
      </div>
      <div>
        <Label htmlFor="content">Content</Label>
      <Textarea id="content" name="content" required/>
      </div>
      <div>
        <Label htmlFor="author">Author</Label>
        <Input id="author" name="author" required/>
      </div>
      <div>
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input id="imageUrl" name="imageUrl"/>
      </div>
      <div>

      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Input id="category" name="category"/>
      </div>
      <Button type="submit">Create Post</Button>
    </form>);
}
