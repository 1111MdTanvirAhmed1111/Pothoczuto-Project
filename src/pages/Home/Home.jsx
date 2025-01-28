import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import LatestPosts from '@/components/LatestPosts'
import CategoriesSection from '@/components/CategoriesSection'
import PopularPostsCarousel from '@/components/PopularPostsCarousel'
import Sidebar2 from '@/components/Sidebar2'
import Footer from '@/components/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import RecommendedPosts from '@/components/RecommendedPosts'
import TrendingTopics from '@/components/TrendingTopics'
import LiveChat from '@/components/LiveChat'
import { Suspense, useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"


export default function Home() {
    const [re,setRe] = useState([])

    const feData = async ()=>{
      const res = await fetch(`${import.meta.env.VITE_bApi}/posts?limit=3`)
      const re2 = await res.json()
      setRe(re2)
      console.log(re2)
    }

useEffect(()=>{
  feData()
},[])
 

  return (
    (<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
  
      <main className="container mx-auto px-4 py-8">
      <Suspense fallback={ <Skeleton className="h-[125px] w-[250px] rounded-xl" />}>
      <HeroSection data={re[0]}/>
      </Suspense>
      
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          <div className="lg:w-2/3">
          <Suspense fallback={
               <div className="flex flex-col space-y-3">
               <Skeleton className="h-[125px] w-[250px] rounded-xl" />
               <div className="space-y-2">
                 <Skeleton className="h-4 w-[250px]" />
                 <Skeleton className="h-4 w-[200px]" />
               </div>
             </div>
            
            }>
          <LatestPosts datas={re}/>
        </Suspense>
         
            <RecommendedPosts />
            <CategoriesSection />
            <PopularPostsCarousel />
          </div>
          <Sidebar2 datas={re}/>
        </div>
      </main>
      <Footer />
      <LiveChat />
    </div>)
  );
}

