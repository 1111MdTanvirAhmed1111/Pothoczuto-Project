
import {NavLink} from 'react-router-dom'



export default function LatestPosts({datas}) {
  return (
    (<section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">সাম্প্রতিক পোস্ট</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datas.length > 0 ? datas.map((post) => (
          <div
            key={post._id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <img
              src={post.imageUrl}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{post.category}</span>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.content.slice(0, 100)}</p>
              <NavLink
                to={`/blog/${post._id}`}
                className="text-blue-600 dark:text-blue-400 hover:underline">
                আরও পড়ুন
              </NavLink>
            </div>
          </div>
        )) : <p>No Posts Found</p>}
      </div>
    </section>)
  );
}

