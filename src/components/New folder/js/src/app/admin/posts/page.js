"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// Mock data for blog posts
const initialBlogPosts = [
    { id: 1, title: "Getting Started with Next.js", author: "John Doe", date: "2023-05-15", views: 1234, comments: 23, category: "Web Development" },
    { id: 2, title: "React Hooks Explained", author: "Jane Smith", date: "2023-06-02", views: 2345, comments: 45, category: "React" },
    { id: 3, title: "CSS Grid Layout Tutorial", author: "Bob Johnson", date: "2023-06-20", views: 3456, comments: 34, category: "CSS" },
];
export default function PostsPage() {
    const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
    const [newPost, setNewPost] = useState({ title: '', author: '', date: '', category: '', content: '' });
    const [editingPost, setEditingPost] = useState(null);
    const handleCreate = () => {
        setBlogPosts([...blogPosts, { ...newPost, id: Date.now(), views: 0, comments: 0 }]);
        setNewPost({ title: '', author: '', date: '', category: '', content: '' });
    };
    const handleEdit = (post) => {
        setEditingPost(post);
    };
    const handleUpdate = () => {
        setBlogPosts(blogPosts.map(post => post.id === editingPost.id ? editingPost : post));
        setEditingPost(null);
    };
    const handleDelete = (id) => {
        setBlogPosts(blogPosts.filter(post => post.id !== id));
    };
    return (<div className="space-y-4">
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button>Create New Post</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Blog Post</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input id="title" value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} className="col-span-3"/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="author" className="text-right">
                Author
              </Label>
              <Input id="author" value={newPost.author} onChange={(e) => setNewPost({ ...newPost, author: e.target.value })} className="col-span-3"/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <Input id="date" type="date" value={newPost.date} onChange={(e) => setNewPost({ ...newPost, date: e.target.value })} className="col-span-3"/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input id="category" value={newPost.category} onChange={(e) => setNewPost({ ...newPost, category: e.target.value })} className="col-span-3"/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="content" className="text-right">
                Content
              </Label>
              <Textarea id="content" value={newPost.content} onChange={(e) => setNewPost({ ...newPost, content: e.target.value })} className="col-span-3"/>
            </div>
          </div>
          <Button onClick={handleCreate}>Create</Button>
        </DialogContent>
      </Dialog>

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
          {blogPosts.map((post) => (<TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.author}</TableCell>
              <TableCell>{post.date}</TableCell>
              <TableCell>{post.views}</TableCell>
              <TableCell>{post.comments}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>
                <Button variant="outline" className="mr-2" onClick={() => handleEdit(post)}>Edit</Button>
                <Button variant="destructive" onClick={() => handleDelete(post.id)}>Delete</Button>
              </TableCell>
            </TableRow>))}
        </TableBody>
      </Table>

      {editingPost && (<Dialog open={!!editingPost} onOpenChange={() => setEditingPost(null)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Blog Post</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-title" className="text-right">
                  Title
                </Label>
                <Input id="edit-title" value={editingPost.title} onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })} className="col-span-3"/>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-author" className="text-right">
                  Author
                </Label>
                <Input id="edit-author" value={editingPost.author} onChange={(e) => setEditingPost({ ...editingPost, author: e.target.value })} className="col-span-3"/>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-date" className="text-right">
                  Date
                </Label>
                <Input id="edit-date" type="date" value={editingPost.date} onChange={(e) => setEditingPost({ ...editingPost, date: e.target.value })} className="col-span-3"/>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-category" className="text-right">
                  Category
                </Label>
                <Input id="edit-category" value={editingPost.category} onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })} className="col-span-3"/>
              </div>
            </div>
            <Button onClick={handleUpdate}>Update</Button>
          </DialogContent>
        </Dialog>)}
    </div>);
}
