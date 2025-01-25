import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Verify from './verify';
export default function AdminPage() {
    return (<div className="container mx-auto p-4">
      <Verify />
      <h1 className="text-2xl font-bold mb-4">Blog Admin Panel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Create New Post</h2>
          <PostForm />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">All Posts</h2>
          <PostList />
        </div>
      </div>
    </div>);
}
