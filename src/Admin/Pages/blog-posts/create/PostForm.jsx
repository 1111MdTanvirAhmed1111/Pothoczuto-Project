"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ImageUpload } from "./image-upload"
import { MultiSelect } from "./multi-select"


const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"]

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(10, {
    message: "Content must be at least 10 characters.",
  }),
  authorName: z.string().min(2, {
    message: "Author name must be at least 2 characters.",
  }),
  image: z
    .any()
    .refine((file) => file instanceof File || file === null, "Please upload a file or remove the current one.")
    .refine((file) => !file || file.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only .jpg, .png, and .webp formats are supported.",
    ),
  categories: z.array(z.string()).min(1, { message: "Please select at least one category." }),
})

const categories = [
  { label: "Technology", value: "technology" },
  { label: "Lifestyle", value: "lifestyle" },
  { label: "Travel", value: "travel" },
  { label: "Food", value: "food" },
  { label: "Fashion", value: "fashion" },
  { label: "Sports", value: "sports" },
  { label: "Science", value: "science" },
  { label: "Health", value: "health" },
]

export default function PostForm() {
  const [imagePreview, setImagePreview] = useState(null)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      authorName: "",
      image: null,
      categories: [],
    },
  })

  function onSubmit(values) {
    
    fetchPostData(values)
    // Here you would typically send the form data to your backend
  }

  const fetchPostData = async ({title,content,authorName,image,categories})=>{
   try {
    const formsend = new FormData()
    formsend.append("Pdata",JSON.stringify({
      title,content,author:authorName,category:categories[0]
    }))
    formsend.append("PostImg",image)

    const res = await axios.post(`${import.meta.env.VITE_bApi}/posts`,formsend)
    console.log(res)
   } catch (error) {
    console.log(error)
   }

  }


  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
   
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-2xl">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your blog post title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post Content</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write your blog post content here" className="min-h-[200px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="authorName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter author's name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post Image</FormLabel>
                <FormControl>
                  <ImageUpload
                    onChange={(file) => {
                      field.onChange(file)
                      if (file) {
                        const reader = new FileReader()
                        reader.onloadend = () => {
                          setImagePreview(reader.result)
                        }
                        reader.readAsDataURL(file)
                      } else {
                        setImagePreview(null)
                      }
                    }}
                    value={field.value}
                    imagePreview={imagePreview}
                  />
                </FormControl>
                <FormDescription>Upload an image for your blog post (max 5MB, .jpg, .png, or .webp)</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categories"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categories</FormLabel>
                <FormControl>
                  <MultiSelect
                    options={categories}
                    selected={field.value}
                    onChange={(value) => field.onChange(value)}
                  />
                </FormControl>
                <FormDescription>Select one or more categories for your blog post</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit Blog Post
          </Button>
        </form>
      </Form>
    </div>
  )
}

