'use server';
import mongoose from 'mongoose';
const PostSchema = mongoose.Schema({
    title: String,
    content: String,
    author: String,
    imageUrl: String,
    category: String,
    date: { type: Date, default: Date.now },
});
export const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);
