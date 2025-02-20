


import { Heart, Calendar, User } from 'lucide-react'
import { WriterInfo } from '@/components/writer-info'
import { SharePost } from '@/components/share-post'
import { Badge } from "@/components/ui/badge"
// import CommentArea from '../../../components/comment/comment-area';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CommentSection } from './../../components/comment/CommentSection';

export default function BlogPost() {

 const {id} = useParams()
const [post,setPost] = useState([])

    const feData = async ()=>{
      const res = await axios.get(`${import.meta.env.VITE_bApi}/posts/${id}`)

      setPost(res.data)
      
    }

useEffect(()=>{
  feData()
},[])


  if (!post) {
    return <div>
      No Post Found
    </div>
  }



  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <Badge className="mb-4">{post.category}</Badge>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 text-muted-foreground mb-8">
        <span className="flex items-center gap-1"><User size={16} /> {post.author}</span>
        <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
      </div>
      <div className="relative w-full flex justify-center items-center  overflow-hidden h-96 mb-8">
      <img
          src={post.imageUrl}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg "
        />
      </div>
      {/* <PostLiker /> */}
      <div className="prose max-w-none mb-12">
        <p className='whitespace-pre-wrap' dangerouslySetInnerHTML={{__html: post.content}}></p>
      </div>
      <WriterInfo author={post.author} date={post.date} />
      <SharePost slug={id} />




<CommentSection id={id} />
      {/* <CommentArea /> */}

    </article>
  )
}




async function UserComments() {
  dbConnect()
  const datas = await Comment.find({}, (err, comments) => {})
  console.log(datas)
  return <div>

  </div>
}