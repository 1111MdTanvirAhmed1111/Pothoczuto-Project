import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/Navbar"
import { Toaster } from "@/components/ui/toaster"
import { UserProvider } from '@/contexts/User'
import { FontSizeProvider } from '@/contexts/font-size-context';
import {MobileSidebar} from '@/components/Home/mobile-sidebar'
import PopupChat from './../components/chat/popup-chat';
import { ChatProvider } from './../contexts/chat-context';
const inter = Inter({ subsets: ["latin"] })


export const metadata = {
  title: "পথচ্যুত",
  description: "আমাদের মত পথ হারা সকল মানুষের জন্য আল্লাহ পাঠিয়েছেন ইসলাম। তবে পাশ্চ্যাত্তের লাগাতার আগ্রাশনের পথে আমরা আরো পথ থেকে সরে গিয়েছি। ইসলামের ইতিহাস, পাশ্চাত্যের ব্যার্থ সমাজ, কবরের সদকায়ে জারিয়ার জন্যের আমাদের এই আয়োজন। আল্লাহকে খুশি করার নিয়তে উম্মাহর সাথে থাকুন, নিজের সর্বচ্চ দিয়ে সাহায্য করুন। জাজাকুমুল্লাহ খাইরান।",
  keywords: "pothoczuto,পথচ্যুত,ওমায়ের,তানভীর,মুখবদ্ধ",
  icons: {
    icon: [
      { url: '/favicon.ico' },

    ],
   
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: "তানভীর ওমায়ের মুখবদ্ধ" }],
  metadataBase: new URL('https://pothoczuto.xyz'),
  openGraph: {
    title: "পথচ্যুত",
    description: "আমাদের মত পথ হারা সকল মানুষের জন্য আল্লাহ পাঠিয়েছেন ইসলাম।",
    url: 'https://pothoczuto.xyz',
    siteName: 'পথচ্যুত',
    locale: 'bn_BD',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
 
      <html lang="en" suppressHydrationWarning>
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap-0.xml" />
        <body className={inter.className}>
        
          <FontSizeProvider>
            
          <ChatProvider>

          
        <UserProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <MobileSidebar />
            <div className="min-h-screen bg-background mx-auto block w-fit mt-16">
     
            {children}
            </div>
            <PopupChat/>
            <Toaster />
          </ThemeProvider>
          </UserProvider>
          </ChatProvider>
          </FontSizeProvider>
      
        </body>
      </html>
    
  )
}
