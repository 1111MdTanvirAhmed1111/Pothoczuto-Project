import mongoose from 'mongoose';
const CommentSchema = new mongoose.Schema({
    content: String,
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    author: String,
    date: { type: Date, default: Date.now },
});
export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
