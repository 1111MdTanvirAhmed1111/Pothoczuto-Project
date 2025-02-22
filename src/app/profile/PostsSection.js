import CreatePost from './CreatePost'
import PhotoGallery from './PhotoGallery'
import FriendsSection from './FriendsSection'
import Post from './Post'
import PostClient from './PostClient'

export default function PostsSection() {
  return (
    <div className="grid gap-6">
      <CreatePost />
      <PhotoGallery />
      <FriendsSection />
      <PostClient>
        <Post />
      </PostClient>
    </div>
  )
}