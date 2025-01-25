import Image from 'next/image';
import { Heart, Calendar, User } from 'lucide-react';
import { WriterInfo } from '@/components/writer-info';
import { SharePost } from '@/components/share-post';
import { Badge } from "@/components/ui/badge";
import { Post } from '@/models/Post';
import { dbConnect } from '@/lib/mongodb';
import CommentArea from '../../../components/comment/comment-area';
export default async function BlogPost({ params }) {
    const iparams = await params;
    await dbConnect();
    const post = JSON.parse(JSON.stringify(await Post.findOne({ _id: iparams.slug })));
    if (!post) {
        return <div>
      No Post Found
    </div>;
    }
    return (<article className="container mx-auto px-4 py-12 max-w-3xl">
      <Badge className="mb-4">{post.category}</Badge>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 text-muted-foreground mb-8">
        <span className="flex items-center gap-1"><User size={16}/> {post.author}</span>
        <span className="flex items-center gap-1"><Calendar size={16}/> {post.date}</span>
      </div>
      <div className="relative w-full h-96 mb-8">
        <Image src={post.imageUrl} alt={post.title} fill style={{ objectFit: 'cover' }} className="rounded-lg"/>
      </div>
      {/* <PostLiker /> */}
      <div className="prose max-w-none mb-12">
        <p className='whitespace-pre-wrap'>{post.content}</p>
      </div>
      <WriterInfo author={post.author} date={post.date}/>
      <SharePost slug={iparams.slug}/>





      <CommentArea id={iparams.slug}/>

    </article>);
}
async function UserComments() {
    dbConnect();
    const datas = await Comment.find({}, (err, comments) => { });
    console.log(datas);
    return <div>

  </div>;
}
