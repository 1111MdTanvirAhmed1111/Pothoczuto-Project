"use server";

import { dbConnect } from '@/lib/mongodb';
import { Post } from '@/models/Post';
import { revalidatePath } from 'next/cache';

export async function getPosts() {
  try {
    await dbConnect();
    const posts = await Post.find({}).sort({ date: -1 });
    return { posts };
  } catch (error) {
    return { error: error.message };
  }
}

export async function createPost(data) {
  try {
    await dbConnect();
    const post = await Post.create(data);
    revalidatePath('/admin/posts');
    return { post };
  } catch (error) {
    return { error: error.message };
  }
}

export async function updatePost(id, data) {
  try {
    await dbConnect();
    const post = await Post.findByIdAndUpdate(id, data, { new: true });
    revalidatePath('/admin/posts');
    return { post };
  } catch (error) {
    return { error: error.message };
  }
}

export async function deletePost(id) {
  try {
    await dbConnect();
    await Post.findByIdAndDelete(id);
    revalidatePath('/admin/posts');
    return { success: true };
  } catch (error) {
    return { error: error.message };
  }
} 