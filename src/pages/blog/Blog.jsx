


import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BlogCard from '../../components/Blog-card'

 function Blog() {
const [arr,setArr] = useState([])

    const feData = async ()=>{
      const res = await fetch(`https://api.pothoczuto.xyz/posts`)
      const re2 = await res.json()
      setArr(re2)
      console.log(re2)
    }

useEffect(()=>{
  feData()
},[])

  return (
    <main className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {arr.map((post,i) => (
        <NavLink to={`/blog/${post.id}`} key={post.id} className="transform transition duration-300 hover:scale-105">
          <BlogCard
          key={i}
            title={post.title}
            author={post.author}
            excerpt={post.content.slice(0, 100)}
            date={post.date}
            imageUrl={post.imageUrl}
            category={post.category}
          />
        </NavLink>
      ))}
    </div>
  </main>
  )
}

export default Blog