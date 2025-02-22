"use client"

import { useState } from 'react'
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
import { Label } from "@/components/ui/label"

// Mock data for categories
const initialCategories = [
  { id: 1, name: "Web Development", postCount: 15 },
  { id: 2, name: "React", postCount: 10 },
  { id: 3, name: "CSS", postCount: 8 },
  { id: 4, name: "JavaScript", postCount: 12 },
]

export default function CategoriesPage() {
  const [categories, setCategories] = useState(initialCategories)
  const [newCategory, setNewCategory] = useState({ name: '' })
  const [editingCategory, setEditingCategory] = useState(null)

  const handleCreate = () => {
    setCategories([...categories, { ...newCategory, id: Date.now(), postCount: 0 }])
    setNewCategory({ name: '' })
  }

  const handleEdit = (category) => {
    setEditingCategory(category)
  }

  const handleUpdate = () => {
    setCategories(categories.map(category => category.id === editingCategory.id ? editingCategory : category))
    setEditingCategory(null)
  }

  const handleDelete = (id) => {
    setCategories(categories.filter(category => category.id !== id))
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Categories</h1>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button>Create New Category</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Category</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={newCategory.name}
                onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                className="col-span-3"
              />
            </div>
          </div>
          <Button onClick={handleCreate}>Create</Button>
        </DialogContent>
      </Dialog>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Post Count</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
            <TableCell>{category.name}</TableCell>
              <TableCell>{category.postCount}</TableCell>
              <TableCell>
                <Button variant="outline" className="mr-2" onClick={() => handleEdit(category)}>Edit</Button>
                <Button variant="destructive" onClick={() => handleDelete(category.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {editingCategory && (
        <Dialog open={!!editingCategory} onOpenChange={() => setEditingCategory(null)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Category</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">
                  Name
                </Label>
                <Input
                  id="edit-name"
                  value={editingCategory.name}
                  onChange={(e) => setEditingCategory({...editingCategory, name: e.target.value})}
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

