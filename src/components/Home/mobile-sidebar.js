"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { LayoutList, Newspaper, Bell, Home, BookOpen, Settings, TrendingUp, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FollowsSection } from "./follows-section"
import { NewsSlider } from "./news-slider"
import { DynamicSidebar } from "./dynamic-sidebar"

export function MobileSidebar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-card border-t py-1 z-40">
      <div className="flex items-center justify-between px-2 mx-auto">
        <Button variant="ghost" size="sm" className="flex flex-col items-center py-1 px-2 h-auto min-w-[3rem]">
          <Home className="h-4 w-4" />
          <span className="text-[10px] mt-0.5">হোম</span>
        </Button>

        <Button variant="ghost" size="sm" className="flex flex-col items-center py-1 px-2 h-auto min-w-[3rem]">
          <BookOpen className="h-4 w-4" />
          <span className="text-[10px] mt-0.5">ব্লগ</span>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="flex flex-col items-center py-1 px-2 h-auto min-w-[3rem]">
              <User className="h-4 w-4" />
              <span className="text-[10px] mt-0.5">আপনি</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] sm:w-[350px]">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 text-base">
                <Newspaper className="h-4 w-4" />
                নিউজ ফিড
              </SheetTitle>
            </SheetHeader>
            <div className="mt-2">
              <FollowsSection />
              <NewsSlider />
            </div>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="flex flex-col items-center py-1 px-2 h-auto min-w-[3rem]">
              <TrendingUp className="h-4 w-4" />
              <span className="text-[10px] mt-0.5">ট্রেন্ডিং</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px]">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 text-base">
                <TrendingUp className="h-4 w-4" />
                ট্রেন্ডিং নিউজ
              </SheetTitle>
            </SheetHeader>
            <div className="mt-2">
              <DynamicSidebar />
            </div>
          </SheetContent>
        </Sheet>

        <Button variant="ghost" size="sm" className="flex flex-col items-center py-1 px-2 h-auto min-w-[3rem]">
          <Settings className="h-4 w-4" />
          <span className="text-[10px] mt-0.5">সেটিংস</span>
        </Button>
      </div>
    </div>
  )
} 