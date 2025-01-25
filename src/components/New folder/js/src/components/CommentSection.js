'use client';
import { useState } from 'react';
import { User, ThumbsUp, ThumbsDown, Reply } from 'lucide-react';
const initialComments = [
    {
        id: 1,
        user: 'রহিম আহমেদ',
        content: 'দারুণ লেখা! আমি এই ধরনের আরও তথ্যপূর্ণ পোস্ট দেখতে চাই।',
        likes: 15,
        dislikes: 2,
        replies: [
            {
                id: 2,
                user: 'ফাতেমা বেগম',
                content: 'আমিও একমত। লেখকের দৃষ্টিভঙ্গি খুবই আকর্ষণীয়।',
                likes: 8,
                dislikes: 0,
                replies: [],
            },
        ],
    },
    {
        id: 3,
        user: 'কামাল হোসেন',
        content: 'এই বিষয়ে আরও গভীরে যাওয়া দরকার ছিল। তবে ভালো শুরু।',
        likes: 5,
        dislikes: 1,
        replies: [],
    },
];
export default function CommentSection({ postId }) {
    const [comments, setComments] = useState(initialComments);
    const [newComment, setNewComment] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            const comment = {
                id: comments.length + 1,
                user: 'বর্তমান ব্যবহারকারী',
                content: newComment,
                likes: 0,
                dislikes: 0,
                replies: [],
            };
            setComments([comment, ...comments]);
            setNewComment('');
        }
    };
    const handleLike = (commentId) => {
        setComments(comments.map((comment) => comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment));
    };
    const handleDislike = (commentId) => {
        setComments(comments.map((comment) => comment.id === commentId ? { ...comment, dislikes: comment.dislikes + 1 } : comment));
    };
    const renderComment = (comment) => (<div key={comment.id} className="mb-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <div className="flex items-center mb-2">
        <User className="w-6 h-6 mr-2"/>
        <span className="font-semibold">{comment.user}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{comment.content}</p>
      <div className="flex items-center space-x-4">
        <button onClick={() => handleLike(comment.id)} className="flex items-center text-gray-500 hover:text-blue-500">
          <ThumbsUp className="w-4 h-4 mr-1"/>
          <span>{comment.likes}</span>
        </button>
        <button onClick={() => handleDislike(comment.id)} className="flex items-center text-gray-500 hover:text-red-500">
          <ThumbsDown className="w-4 h-4 mr-1"/>
          <span>{comment.dislikes}</span>
        </button>
        <button className="flex items-center text-gray-500 hover:text-green-500">
          <Reply className="w-4 h-4 mr-1"/>
          <span>উত্তর দিন</span>
        </button>
      </div>
      {comment.replies.length > 0 && (<div className="ml-8 mt-4">
          {comment.replies.map(renderComment)}
        </div>)}
    </div>);
    return (<section className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">মন্তব্যসমূহ</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="আপনার মন্তব্য লিখুন..." className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" rows={4}/>
        <button type="submit" className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          মন্তব্য পোস্ট করুন
        </button>
      </form>
      <div className="space-y-4">
        {comments.map(renderComment)}
      </div>
    </section>);
}
