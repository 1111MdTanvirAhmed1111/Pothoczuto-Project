"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NewsSlider } from "@/components/Home/news-slider"
import { FollowsSection } from "@/components/Home/follows-section"
import { ArticleCard } from "@/components/Home/article-card"
import { DynamicSidebar } from "@/components/Home/dynamic-sidebar"
import { MobileSidebar } from "@/components/Home/mobile-sidebar"
import { PhotoShorts } from "@/components/Home/photo-shorts"

const articles = [
  {
    title: "কৃত্রিম বুদ্ধিমত্তার ভবিষ্যৎ: নতুন দিগন্ত",
    excerpt: "কৃত্রিম বুদ্ধিমত্তা অভূতপূর্ব গতিতে বিকশিত হচ্ছে, শিল্প ও সমাজকে পুনর্গঠন করছে...",
    image: "/placeholder.svg?height=200&width=400",
    author: "জন ডো",
    date: "২ ঘণ্টা আগে",
    category: "প্রযুক্তি",
    likes: 234,
    comments: 45,
  },
  {
    title: "বিশ্ব জলবায়ু সম্মেলনে ঐতিহাসিক চুক্তি",
    excerpt: "বিশ্ব নেতারা একটি যুগান্তকারী জলবায়ু চুক্তিতে স্বাক্ষর করেছেন যা প্রতিশ্রুতি দেয়...",
    image: "/placeholder.svg?height=200&width=400",
    author: "জেন স্মিথ",
    date: "৪ ঘণ্টা আগে",
    category: "পরিবেশ",
    likes: 567,
    comments: 89,
  },
  {
    title: "ক্যান্সার গবেষণায় বিপ্লবী সাফল্য",
    excerpt: "বিজ্ঞানীরা ক্যান্সার চিকিৎসায় একটি বড় আবিষ্কার করেছেন যা সম্ভাব্য পরিবর্তন আনতে পারে...",
    image: "/placeholder.svg?height=200&width=400",
    author: "ডা. সারাহ জনসন",
    date: "৬ ঘণ্টা আগে",
    category: "স্বাস্থ্য",
    likes: 789,
    comments: 123,
  },
  {
    title: "নতুন প্রজন্মের স্মার্টফোন বাজারে",
    excerpt: "আধুনিক প্রযুক্তির সর্বশেষ উদ্ভাবন নিয়ে আসছে নতুন স্মার্টফোন...",
    image: "/placeholder.svg?height=200&width=400",
    author: "তানভীর রহমান",
    date: "৮ ঘণ্টা আগে",
    category: "প্রযুক্তি",
    likes: 432,
    comments: 67,
  },
  {
    title: "বাংলাদেশের অর্থনীতির নতুন মাইলফলক",
    excerpt: "দেশের অর্থনৈতিক প্রবৃদ্ধি নতুন উচ্চতায় পৌঁছেছে...",
    image: "/placeholder.svg?height=200&width=400",
    author: "আরিফ হাসান",
    date: "১০ ঘণ্টা আগে",
    category: "অর্থনীতি",
    likes: 345,
    comments: 56,
  },
  {
    title: "নতুন শিক্ষা পদ্ধতির সাফল্য",
    excerpt: "আধুনিক শিক্ষা পদ্ধতি শিক্ষার্থীদের মধ্যে ইতিবাচক প্রভাব ফেলছে...",
    image: "/placeholder.svg?height=200&width=400",
    author: "নাজমুল হক",
    date: "১২ ঘণ্টা আগে",
    category: "শিক্ষা",
    likes: 678,
    comments: 98,
  },
]

export default function NewsHomepage() {
  return (
    <div className="min-h-screen  bg-background">
      <main className="container px-4 py-8 pb-24 md:pb-8">
        {/* Mobile Sidebar Navigation */}
        <div className="sticky top-[4.5rem] z-40 mb-6">
          <MobileSidebar />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr_400px]">
          {/* Left Sidebar - Hidden on Mobile */}
          <aside className="hidden md:block">
            <div className="sticky top-[7rem]">
              <Card>
                <CardContent className="p-0">
                  <FollowsSection />
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <div className="space-y-6">
            <Tabs defaultValue="latest" className="w-full">
              <TabsList className="w-full justify-start overflow-x-auto">
                <TabsTrigger value="latest">সর্বশেষ</TabsTrigger>
                <TabsTrigger value="trending">ট্রেন্ডিং</TabsTrigger>
                <TabsTrigger value="most-commented">সর্বাধিক মন্তব্য</TabsTrigger>
              </TabsList>
              <TabsContent value="latest" className="mt-6 space-y-6">
                {articles.map((article, index) => (
                  <div key={index}>
                    <ArticleCard {...article} />
                    {(index + 1) % 3 === 0 && <PhotoShorts />}
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="trending" className="mt-6">
                {/* Trending content */}
              </TabsContent>
              <TabsContent value="most-commented" className="mt-6">
                {/* Most commented content */}
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar - Hidden on Mobile */}
          <aside className="hidden md:block">
            <div className="sticky top-[7rem]">
              <DynamicSidebar />
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
