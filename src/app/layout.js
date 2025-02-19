import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/Navbar"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "পথচ্যুত",
  description: "আমাদের মত পথ হারা সকল মানুষের জন্য আল্লাহ পাঠিয়েছেন ইসলাম। তবে পাশ্চ্যাত্তের লাগাতার আগ্রাশনের পথে আমরা আরো পথ থেকে সরে গিয়েছি। ইসলামের ইতিহাস, পাশ্চাত্যের ব্যার্থ সমাজ, কবরের সদকায়ে জারিয়ার জন্যের আমাদের এই আয়োজন।",
  keywords: "ইসলাম, পথচ্যুত, ইসলামের ইতিহাস, সদকায়ে জারিয়া, ইসলামিক কনটেন্ট",
  author: "পথচ্যুত টিম",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "পথচ্যুত - ইসলামিক কনটেন্ট প্লাটফর্ম",
    description: "আমাদের মত পথ হারা সকল মানুষের জন্য আল্লাহ পাঠিয়েছেন ইসলাম।",
    type: "website",
    locale: "bn_BD",
    url: "https://pathochut.com",
    siteName: "পথচ্যুত",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "পথচ্যুত",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "পথচ্যুত - ইসলামিক কনটেন্ট প্লাটফর্ম",
    description: "আমাদের মত পথ হারা সকল মানুষের জন্য আল্লাহ পাঠিয়েছেন ইসলাম।",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          suppressHydrationWarning
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
