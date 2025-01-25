'use server';
import { revalidatePath } from 'next/cache';
import { dbConnect } from '@/lib/mongodb';
import Comment from '@/models/Comment';
export async function getComments(id) {
    await dbConnect();
    const Comments = await Comment.find({ post: id }).sort({ date: -1 });
    return JSON.parse(JSON.stringify(Comments));
    ;
}
export async function createComment(id, formData) {
    formData.append("post", id);
    formData.append("author", "পথনুসন্ধানী");
    await dbConnect();
    const comment = await Comment.create(Object.fromEntries(formData));
    revalidatePath('/admin');
    return JSON.parse(JSON.stringify(comment));
    ;
}
export async function updateComment(id, formData) {
    await dbConnect();
    const comment = await Comment.findByIdAndUpdate(id, Object.fromEntries(formData), { new: true });
    revalidatePath('/admin');
    return JSON.parse(JSON.stringify(comment));
    ;
}
export async function deleteComment(_id) {
    await dbConnect();
    await Comment.findByIdAndDelete(_id);
    revalidatePath('/admin');
}
