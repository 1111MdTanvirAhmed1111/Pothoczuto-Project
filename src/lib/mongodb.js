import { Post } from '@/models/Post';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}


export const dbConnect =   async () =>{
 
mongoose.connect(MONGODB_URI).then(res=>console.log("connected to db")).catch(err=>console.log(err));



}



