import Image from 'next/image'
import Link from 'next/link'

export default function RecentPosts() {
  const posts = [
    { id: 1, title: 'সুন্দরবনের জীববৈচিত্র্য', excerpt: 'সুন্দরবনের অসাধারণ জীববৈচিত্র্য সম্পর্কে জানুন...' },
    { id: 2, title: 'বাংলাদেশের পর্যটন স্পট', excerpt: 'বাংলাদেশের সেরা ১০টি পর্যটন স্পট...' },
    { id: 3, title: 'বাঙালি সংস্কৃতি ও ঐতিহ্য', excerpt: 'বাঙালি সংস্কৃতি ও ঐতিহ্যের বিভিন্ন দিক...' },
    { id: 4, title: 'বাংলাদেশের স্বাধীনতা যুদ্ধ', excerpt: 'বাংলাদেশের স্বাধীনতা যুদ্ধের ইতিহাস...' },
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">সাম্প্রতিক পোস্ট</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src="/placeholder.svg" alt={post.title} width={400} height={200} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href={`/post/${post.id}`} className="text-blue-600 hover:underline">আরও পড়ুন</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

