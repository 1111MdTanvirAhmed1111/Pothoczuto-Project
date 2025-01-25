import Image from 'next/image';
import Link from 'next/link';
const recommendedPosts = [
    {
        id: 1,
        title: 'বাংলাদেশের ঐতিহাসিক স্থানগুলি: একটি ভ্রমণ গাইড',
        excerpt: 'বাংলাদেশের প্রাচীন ও ঐতিহাসিক স্থানগুলি সম্পর্কে জানুন এবং আপনার পরবর্তী ভ্রমণের পরিকল্পনা করুন...',
        image: '/historical-places.jpg',
        category: 'ভ্রমণ',
    },
    {
        id: 2,
        title: 'বাংলা সাহিত্যের আধুনিক ধারা: নতুন লেখকদের উত্থান',
        excerpt: 'বাংলা সাহিত্যের নতুন প্রজন্মের লেখকদের সৃষ্টিশীল কাজ এবং তাদের প্রভাব সম্পর্কে জানুন...',
        image: '/modern-literature.jpg',
        category: 'সাহিত্য',
    },
    // Add more recommended posts as needed
];
export default function RecommendedPosts() {
    return (<section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">আপনার জন্য প্রস্তাবিত</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendedPosts.map((post) => (<div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{post.category}</span>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <Link href={`/post/${post.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                আরও পড়ুন
              </Link>
            </div>
          </div>))}
      </div>
    </section>);
}
