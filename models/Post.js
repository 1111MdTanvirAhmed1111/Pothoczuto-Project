const { default: mongoose } = require("mongoose");


const PostSchema = mongoose.Schema({
  title: String,
  content: String,
  author: String,
  imageUrl: String,
  category: String,
  date: { type: Date, default: Date.now },
  
});
module.exports = new mongoose.model('Post', PostSchema);


