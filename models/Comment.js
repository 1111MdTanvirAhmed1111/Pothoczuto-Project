const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
  text: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  approved: { type: Boolean, default: false },
  replies: [
    {
      text: String,
      createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', commentSchema);