import Link from 'next/link'

const sections = [
  {
    title: 'সাম্প্রতিক সংবাদ',
    articles: [
      { id: 1, title: 'করোনা ভাইরাস: বাংলাদেশে নতুন ভ্যারিয়েন্ট শনাক্ত' },
      { id: 2, title: 'অর্থনৈতিক মন্দা কাটাতে সরকারের নতুন পদক্ষেপ' },
      { id: 3, title: 'শিক্ষা প্রতিষ্ঠান খোলার সিদ্ধান্ত নিয়ে বিতর্ক' },
    ]
  },
  {
    title: 'রাজনীতি',
    articles: [
      { id: 4, title: 'আসন্ন নির্বাচন: দলগুলোর প্রস্তুতি' },
      { id: 5, title: 'সংসদে নতুন আইন পাস' },
      { id: 6, title: 'বিরোধী দলের সমাবেশ: পুলিশের সাথে সংঘর্ষ' },
    ]
  },
  {
    title: 'বিনোদন',
    articles: [
      { id: 7, title: 'নতুন চলচ্চিত্রের মুক্তি: দর্শকদের প্রতিক্রিয়া' },
      { id: 8, title: 'বিখ্যাত সঙ্গীতশিল্পীর নতুন অ্যালবাম' },
      { id: 9, title: 'অনলাইন স্ট্রিমিং প্ল্যাটফর্মে বাংলা সিরিজের জনপ্রিয়তা' },
    ]
  },
]

export default function NewsSections() {
  return (
    <section className="mb-12">
      {sections.map((section) => (
        <div key={section.title} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <ul className="space-y-4">
              {section.articles.map((article) => (
                <li key={article.id}>
                  <Link href={`/article/${article.id}`} className="text-lg hover:text-blue-600">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}

