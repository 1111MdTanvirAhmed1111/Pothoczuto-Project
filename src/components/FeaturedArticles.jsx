import Image from 'next/image'
import Link from 'next/link'

const featuredArticles = [
  { id: 1, title: 'বাংলাদেশের ঐতিহ্যবাহী খাবার', image: '/food.jpg', excerpt: 'বাংলাদেশের বিভিন্ন অঞ্চলের ঐতিহ্যবাহী খাবার সম্পর্কে জানুন...' },
  { id: 2, title: 'বাংলা সাহিত্যের শ্রেষ্ঠ ১০ উপন্যাস', image: '/literature.jpg', excerpt: 'বাংলা সাহিত্যের বিখ্যাত ১০টি উপন্যাস সম্পর্কে বিস্তারিত আলোচনা...' },
  { id: 3, title: 'ঢাকার ঐতিহাসিক স্থাপত্য', image: '/architecture.jpg', excerpt: 'ঢাকার প্রাচীন ও ঐতিহাসিক স্থাপত্যের এক ঝলক...' },
  { id: 4, title: 'বাংলাদেশের পর্যটন: অজানা গন্তব্য', image: '/tourism.jpg', excerpt: 'বাংলাদেশের কিছু অপরিচিত কিন্তু মনোরম পর্যটন কেন্দ্র...' },
]

export default function FeaturedArticles() {
  return (
    (<section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">নির্বাচিত প্রবন্ধ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <Link href={`/article/${article.id}`} className="text-blue-600 hover:underline">
                আরও পড়ুন
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>)
  );
}

