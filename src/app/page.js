import React from 'react'
import { ModeToggle } from '@/components/theme-toggler'

async function page() {
    const data = await fetch('https://api.pothoczuto.xyz/api/posts')
    const posts = await data.json()
    console.log(posts)
  return (
    <div>
<ModeToggle />
    </div>
  )
}

export default page 