import CreatePost from './CreatePost'
import PhotoGallery from './PhotoGallery'
import FriendsSection from './FriendsSection'
import Post from './Post'

export default function PostsSection() {
  return (
    <div className="grid gap-6">
      <CreatePost />
      <PhotoGallery />
      <FriendsSection />
      <Post />
    </div>
  )
}