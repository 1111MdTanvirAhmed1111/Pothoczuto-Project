import { Noto_Sans_Bengali } from "next/font/google"
import Link from "next/link"

const bengali = Noto_Sans_Bengali({ 
  subsets: ["bengali"],
  weight: ['400', '500', '600', '700'],
})

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        {/* লোগো এবং টাইটেল */}
        <div className="text-center">
          <Link href="/" className="inline-block">
            <h2 className={`text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent ${bengali.className}`}>
              পথচ্যুত
            </h2>
          </Link>
          <p className={`mt-2 text-sm text-gray-600 dark:text-gray-400 ${bengali.className}`}>
            আমাদের মত পথ হারা সকল মানুষের জন্য আল্লাহ পাঠিয়েছেন ইসলাম
          </p>
        </div>

        {/* মূল কনটেন্ট */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 sm:px-6">
          {children}
        </div>

        {/* ফুটার */}
        <div className="text-center">
          <p className={`text-xs text-gray-500 dark:text-gray-400 ${bengali.className}`}>
            &copy; {new Date().getFullYear()} পথচ্যুত। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </div>
  )
}    