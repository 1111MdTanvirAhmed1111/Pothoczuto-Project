'use client';
import { useState, useEffect } from 'react';
const breakingNews = [
    'করোনা ভাইরাস: দেশে নতুন রেকর্ড সংক্রমণ',
    'জাতীয় নির্বাচন: ভোট গ্রহণ শুরু হয়েছে',
    'অর্থনীতি: বাংলাদেশের জিডিপি প্রবৃদ্ধি ৭% ছাড়িয়েছে',
    'আবহাওয়া: দেশের দক্ষিণাঞ্চলে ভারী বর্ষণের সম্ভাবনা',
];
export default function BreakingNewsTicker() {
    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % breakingNews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (<div className="bg-red-600 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <span className="font-bold mr-4">ব্রেকিং নিউজ:</span>
          <p className="animate-marquee whitespace-nowrap">
            {breakingNews[currentNewsIndex]}
          </p>
        </div>
      </div>
    </div>);
}
