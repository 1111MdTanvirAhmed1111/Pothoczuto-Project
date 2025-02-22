import Header from './Header'
import ProfileInfo from './ProfileInfo'
import StatsSection from './StatsSection'
import PostsSection from './PostsSection'
import SidePanel from './SidePanel'
import Navigation from './Navigation'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Header />
      <ProfileInfo />
      <main className="container py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_300px]">
          <div className="grid gap-8">
            <StatsSection />
            <PostsSection />
          </div>
          <SidePanel />
        </div>
      </main>
    </div>
  )
}