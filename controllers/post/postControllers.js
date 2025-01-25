
const fs = require('fs')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const path = require('path');

async function GetPosts(req,res) {
const { id } = req.query;

    if(id){
        
        const Post = await prisma.posts.findUnique({
            where: {
              id:parseInt(id),
            },
          })


          if(!Post){
            res.status(404).json({"title":"Post Not Found"})
          }

          res.status(200).json(Post);

    }else{

        const Posts = await prisma.posts.findMany();
        res.status(200).json(Posts);

    }
    
}


// Create a new post
const createPost = async (req, res) => {


    if(!req.body.Pdata){
        res.status(400).json({"error":"Please Provide Details"})
    }
    
    const { title, content, author,  category } = JSON.parse(req.body.Pdata);
    
    const imageUrl ='https://api.pothoczuto.xyz/uploads/' + req.file.filename


 try {
    const Post = await prisma.posts.create({
        data: {title,content,author,imageUrl,category },
      })

      res.status(200).json(Post)
 } catch (error) {
    res.status(404).json(error)
 }
   

}
  
 async function updatePost(req, res) {

    const { id } = req.params;

    if(!req.body.Pdata){
        res.status(404).json({"error":"Please Provide Details"})
    }

    const { title, content, author,  category } = JSON.parse(req.body.Pdata);


    try {
        const Post = await prisma.posts.update({           
            where: {
                id:parseInt(id),
              },
              data: {
                title,content,author,imageUrl,category
              },
          })
          res.status(200).json(Post)
     } catch (error) {
        res.status(404).json(error)
     }
       
  
}
  
 async function deletePost(req,res) {
    const { id } = req.params;

    try {
        const Post = await prisma.posts.delete({           
            where: {
                id:parseInt(id),
              },
          })

        const newFileName = Post.imageUrl.slice(35,Post.imageUrl.length)

           
          const filePath = path.join(__dirname.slice(0,process.env.fileStorageSlicer), 'uploads', newFileName);
         
          let resultHandler = err=> err ? console.log(`Not Deleted!! Err:${err}`) : console.log(filePath)
          fs.unlink( filePath, resultHandler)

          res.status(200).json(Post)
        
    

     } catch (error) {
        res.status(404).json(error)
     }
    

}
  

module.exports = {GetPosts, createPost,updatePost,deletePost}