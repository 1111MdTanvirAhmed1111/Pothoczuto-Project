'use server';
import { revalidatePath } from 'next/cache';
import { dbConnect } from '@/lib/mongodb';
import { Post } from '@/models/Post';
export async function getPosts() {
    await dbConnect();
    const posts = await Post.find({}).sort({ date: -1 });
    return JSON.parse(JSON.stringify(posts));
    ;
}
export async function createPost(formData) {
    await dbConnect();
    const post = await Post.create(Object.fromEntries(formData));
    revalidatePath('/');
    return JSON.parse(JSON.stringify(post));
    ;
}
export async function updatePost(id, formData) {
    await dbConnect();
    const post = await Post.findByIdAndUpdate(id, Object.fromEntries(formData), { new: true });
    revalidatePath('/');
    return JSON.parse(JSON.stringify(post));
    ;
}
export async function deletePost(id) {
    await dbConnect();
    await Post.findByIdAndDelete(id);
    revalidatePath('/');
}
