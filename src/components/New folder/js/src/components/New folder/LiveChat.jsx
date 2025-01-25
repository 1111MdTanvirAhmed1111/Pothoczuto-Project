'use client';
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
export default function LiveChat() {
    const [isOpen, setIsOpen] = useState(false);
    return (<>
      {!isOpen && (<button onClick={() => setIsOpen(true)} className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
          <MessageCircle size={24}/>
        </button>)}
      {isOpen && (<div className="fixed bottom-4 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">লাইভ চ্যাট</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <X size={24}/>
            </button>
          </div>
          <div className="h-64 overflow-y-auto p-4">
            {/* Chat messages would go here */}
            <p className="text-gray-600 dark:text-gray-300">আপনাকে স্বাগতম! আমরা কীভাবে আপনাকে সাহায্য করতে পারি?</p>
          </div>
          <div className="p-4 border-t dark:border-gray-700">
            <input type="text" placeholder="আপনার বার্তা লিখুন..." className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"/>
          </div>
        </div>)}
    </>);
}
