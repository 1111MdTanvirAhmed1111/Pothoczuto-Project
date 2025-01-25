import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedPosts() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">নির্বাচিত পোস্ট</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image src="/placeholder.svg" alt="Featured post" width={600} height={400} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">বাংলাদেশের ঐতিহ্যবাহী খাবার</h3>
            <p className="text-gray-600 mb-4">বাংলাদেশের বিভিন্ন অঞ্চলের ঐতিহ্যবাহী খাবার সম্পর্কে জানুন...</p>
            <Link href="/post/1" className="text-blue-600 hover:underline">আরও পড়ুন</Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image src="/placeholder.svg" alt="Featured post" width={600} height={400} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">বাংলা সাহিত্যের শ্রেষ্ঠ ১০ উপন্যাস</h3>
            <p className="text-gray-600 mb-4">বাংলা সাহিত্যের বিখ্যাত ১০টি উপন্যাস সম্পর্কে বিস্তারিত আলোচনা...</p>
            <Link href="/post/2" className="text-blue-600 hover:underline">আরও পড়ুন</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

