"use server";
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import CommentsCard from './commentCard';
import { createComment, getComments } from '@/lib/comment-actions';
async function CommentArea({ id }) {
    const comnt = await getComments(id);
    return (<div>


    <form className="mb-8" action={createComment.bind(null, id)}>
    <h2 className="text-2xl md:text-3xl font-bold text-center my-5">পোস্ট সম্পর্কে আপনার মন্তব্য করুন।</h2>
    <p className='text-gray-500 text-center block text-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'>পোস্ট সম্পর্কে আপনার মন্তব্য করুন। এই রিলেটেড কোনো সমস্যা থাকলে মেনু অপসন থেকে কাউন্সিলিং এ আমাদের জানান। আমরা সামর্থের সর্বোচ্চ চেষ্টা করবো। ওয়ামা তাওফিকি ইল্লাহ বিল্লাহ।</p>

    <Textarea placeholder="Write a comment..." name="content" className="my-6 "/>
    <Button type="submit">Post Comment</Button>
  </form>

        {comnt.map((comment) => {
            return <CommentsCard key={comment._id} _id={comment._id} author={comment.author} date={comment.date} content={comment.content}/>;
        })}

  </div>);
}
export default CommentArea;
