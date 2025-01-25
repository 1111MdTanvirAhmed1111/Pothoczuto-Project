import { getPosts, deletePost } from '../../../lib/post-actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import EditPostForm from './EditPostForm';
export default async function PostList() {
    const data = await fetch('https://mukhboddho.vercel.app/api/posts/', { cache: 'no-store' });
    const posts = await data.json();
    return (<div className="space-y-4">
      {posts.map((post) => (<Card key={post._id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              By {post.author} | {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="mt-2">{post.content.substring(0, 100)}...</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <EditPostForm post={post}/>
            <form action={deletePost.bind(null, post._id)}>
              <Button type="submit" variant="destructive">Delete</Button>
            </form>
          </CardFooter>
        </Card>))}
    </div>);
}
