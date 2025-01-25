import Image from 'next/image'
import Link from 'next/link'

const authors = [
  { id: 1, name: 'ড. রফিকুল ইসলাম', image: '/author1.jpg', bio: 'বিশিষ্ট কলামিস্ট ও রাজনৈতিক বিশ্লেষক' },
  { id: 2, name: 'ফারহানা হক', image: '/author2.jpg', bio: 'পরিবেশ ও জলবায়ু বিষয়ক লেখক' },
  { id: 3, name: 'আহমেদ জামান', image: '/author3.jpg', bio: 'প্রখ্যাত সাহিত্যিক ও গবেষক' },
]

export default function AuthorHighlight() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">আমাদের লেখকগণ</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {authors.map((author) => (
          <div key={author.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image src={author.image} alt={author.name} width={120} height={120} className="rounded-full mb-4" />
            <h3 className="text-lg font-semibold mb-2">{author.name}</h3>
            <p className="text-gray-600 text-center mb-4">{author.bio}</p>
            <Link href={`/author/${author.id}`} className="text-blue-600 hover:underline">
              আরও পড়ুন
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

