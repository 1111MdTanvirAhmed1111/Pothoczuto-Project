import Link from 'next/link'
import Image from 'next/image'

const recentPosts = [
  { id: 1, title: 'বাংলাদেশের অর্থনীতি: ২০২৫ সালের লক্ষ্যমাত্রা' },
  { id: 2, title: 'ঢাকার যানজট: সমস্যা ও সমাধান' },
  { id: 3, title: 'বাংলা ভাষার ইতিহাস ও বিবর্তন' },
]

const authors = [
  { id: 1, name: 'ড. রফিকুল ইসলাম', image: '/author1.jpg', bio: 'বিশিষ্ট কলামিস্ট ও রাজনৈতিক বিশ্লেষক' },
  { id: 2, name: 'ফারহানা হক', image: '/author2.jpg', bio: 'পরিবেশ ও জলবায়ু বিষয়ক লেখক' },
]

export default function Sidebar() {
  return (
    <aside className="lg:w-1/3 space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">সাম্প্রতিক পোস্ট</h3>
        <ul className="space-y-2">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/post/${post.id}`} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">লেখক পরিচিতি</h3>
        <div className="space-y-4">
          {authors.map((author) => (
            <div key={author.id} className="flex items-center space-x-4">
              <Image src={author.image} alt={author.name} width={50} height={50} className="rounded-full" />
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">{author.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{author.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">নিউজলেটার</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">আমাদের নিউজলেটারে সাবস্ক্রাইব করুন এবং সর্বশেষ আপডেট পান।</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="আপনার ইমেইল"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            সাবস্ক্রাইব
          </button>
        </form>
      </div>
    </aside>
  )
}

