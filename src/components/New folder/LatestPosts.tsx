import Image from 'next/image'
import Link from 'next/link'

const latestPosts = [
  {
    id: 1,
    title: 'সুন্দরবনের জীববৈচিত্র্য: একটি অনন্য পরিবেশ ব্যবস্থা',
    excerpt: 'সুন্দরবনের অসাধারণ জীববৈচিত্র্য এবং এর সংরক্ষণের গুরুত্ব সম্পর্কে জানুন...',
    image: '/sundarbans.jpg',
    category: 'প্রকৃতি',
  },
  {
    id: 2,
    title: 'বাংলাদেশের ঐতিহ্যবাহী খাবার: স্বাদ ও ঐতিহ্যের মিলন',
    excerpt: 'বাংলাদেশের বিভিন্ন অঞ্চলের ঐতিহ্যবাহী খাবার এবং তাদের ইতিহাস সম্পর্কে জানুন...',
    image: '/bengali-food.jpg',
    category: 'খাদ্য ও সংস্কৃতি',
  },
  {
    id: 3,
    title: 'ঢাকার ঐতিহাসিক স্থাপত্য: অতীতের সাক্ষী',
    excerpt: 'ঢাকার প্রাচীন ও ঐতিহাসিক স্থাপত্যের এক ঝলক, যা বাংলার ইতিহাস ও সংস্কৃতির প্রতিফলন...',
    image: '/dhaka-architecture.jpg',
    category: 'ইতিহাস',
  },
  // Add more posts as needed
]

export default function LatestPosts() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">সাম্প্রতিক পোস্ট</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestPosts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{post.category}</span>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <Link href={`/post/${post.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                আরও পড়ুন
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

