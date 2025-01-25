import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';
export default function AboutPage() {
    return (<div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">আমার সম্পর্কে</h1>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
            <Image src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/471051872_1148239986914088_1620763672240984843_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGXqsqGfGm-LQsuNXJZiPH9uTWOvSiUg7G5NY69KJSDsflLm1hD39iKnBEA5TeSLZxOZQmuu7zrQoorxP6-vIrT&_nc_ohc=Oee8c1PC9UIQ7kNvgENYYC3&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AEsFTO8OPxCwN7J8BoBBXoM&oh=00_AYCt1c_Z2Lb3pM1x-asftRCJQ8AgW4OEX5c1bVt3wGadbw&oe=67857C37" alt="Jane Doe" fill style={{ objectFit: 'cover' }}/>
          </div>
        </div>
        <Card className="md:col-span-2">
          <CardContent className="prose max-w-none p-6">
            <h2 className="text-2xl font-semibold mb-4">আসসালামু আলাইকুম,</h2>
            <p>
             আমি ওমায়ের। জন্ম চাঁদপুরে, আমি ঢাকায় থাকি। আমি পড়তে ও লিখতে ভালোবাসি, এটাকে হোবি বললে হয়তো ভুল হবে লেখাকে আমার পেসান বলা যায়। আমার চিন্তা ও প্রশ্ন নিয়ে এই সাইটতি তৈরি করা হয়েছে। আমার লেখা কোনোভাবে উপক্রিত করতে পারলে তার সম্পুর্ন ক্রেডিট আল্লাহ সুবহানাহুয়া তায়ালার আর সকল ভুল নিতান্তই আমার। ওয়ামা তাওফিকি ইল্লাহ বিল্লাহ

দোয়ায় মনে রাখবেন। জাজাকুমুল্লাহু খাইরান।
            </p>
          
            <Button className="mt-4">
              <Mail className="mr-2 h-4 w-4"/> Get in touch
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">My Expertise</h2>
            <ul className="space-y-2">
              <li>• Frontend Development (React, Next.js)</li>
              <li>• Backend Development (Node.js, Express)</li>
              <li>• Database Management (MongoDB, PostgreSQL)</li>
              <li>• UI/UX Design Principles</li>
              <li>• Performance Optimization</li>
              <li>• SEO Best Practices</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
          আমাদের মত পথ হারা সকল মানুষের জন্য আল্লাহ পাঠিয়েছেন ইসলাম। তবে পাশ্চ্যাত্তের লাগাতার আগ্রাশনের পথে আমরা আরো পথ থেকে সরে গিয়েছি। ইসলামের ইতিহাস, পাশ্চাত্যের ব্যার্থ সমাজ, কবরের সদকায়ে জারিয়ার জন্যের আমাদের এই আয়োজন। আল্লাহকে খুশি করার নিয়তে উম্মাহর সাথে থাকুন, নিজের সর্বচ্চ দিয়ে সাহায্য করুন। জাজাকুমুল্লাহ খাইরান।
          </CardContent>
        </Card>
      </div>
    </div>);
}
