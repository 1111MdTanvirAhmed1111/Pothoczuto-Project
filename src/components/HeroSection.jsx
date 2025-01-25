import {NavLink} from 'react-router-dom'


export default  function HeroSection({data}) {



  return ( 
    data&&(<section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-xl">
      <img
        src={data.imageUrl}
        alt="বাংলাদেশের প্রাকৃতিক দৃশ্য"
        layout="fill"
        objectFit="cover"
        className='w-full h-full'        priority />
      <div
        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{data.title}</h1>
          <p className="text-lg md:text-xl mb-6">আমাদের দেশের অসাধারণ প্রাকৃতিক সৌন্দর্য ও সমৃদ্ধ ঐতিহ্যের গল্প</p>
          <NavLink
            href={`/blog/${data._id}`}
            className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors">
            আরও পড়ুন
          </NavLink>
        </div>
      </div>
    </section>)
  );
}

