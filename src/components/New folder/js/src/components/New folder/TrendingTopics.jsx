import Link from 'next/link';
import { TrendingUp } from 'lucide-react';
const trendingTopics = [
    { id: 1, name: 'করোনা ভাইরাস', count: 1250 },
    { id: 2, name: 'জলবায়ু পরিবর্তন', count: 980 },
    { id: 3, name: 'ডিজিটাল বাংলাদেশ', count: 850 },
    { id: 4, name: 'স্টার্টআপ ইকোসিস্টেম', count: 720 },
    { id: 5, name: 'বাংলাদেশের ক্রিকেট', count: 650 },
];
export default function TrendingTopics() {
    return (<section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
        <TrendingUp className="w-6 h-6 mr-2"/>
        ট্রেন্ডিং বিষয়সমূহ
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <ul className="space-y-4">
          {trendingTopics.map((topic) => (<li key={topic.id} className="flex justify-between items-center">
              <Link href={`/topic/${topic.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {topic.name}
              </Link>
              <span className="text-gray-600 dark:text-gray-400 text-sm">{topic.count} পোস্ট</span>
            </li>))}
        </ul>
      </div>
    </section>);
}
