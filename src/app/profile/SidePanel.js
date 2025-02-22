import Achievements from './Achievements'
import Trending from './Trending'

export default function SidePanel() {
  return (
    <div className="grid gap-6">
      <Achievements />
      <Trending />
    </div>
  )
}