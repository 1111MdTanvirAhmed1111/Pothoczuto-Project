"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { LayoutList, Newspaper, Bell, BookMarked, Home, Search, BookOpen, Settings, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FollowsSection } from "./follows-section"
import { NewsSlider } from "./news-slider"
import { DynamicSidebar } from "./dynamic-sidebar"

export function MobileSidebar() {
  return (
    <>
      {/* Top Menu Bar */}
      <div className="flex items-center justify-between gap-4 md:hidden bg-card rounded-lg p-2 shadow-sm">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <LayoutList className="h-5 w-5" />
              <span className="text-sm font-medium">মেনু</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Newspaper className="h-5 w-5" />
                নিউজ ফিড
              </SheetTitle>
            </SheetHeader>
            <div className="mt-4">
              <FollowsSection />
              <NewsSlider />
            </div>
          </SheetContent>
        </Sheet>

        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Search className="h-5 w-5" />
          <span className="text-sm font-medium">অনুসন্ধান</span>
        </Button>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-card border-t py-2 px-4 z-40">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <Home className="h-5 w-5" />
            <span className="text-xs">হোম</span>
          </Button>

          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <BookOpen className="h-5 w-5" />
            <span className="text-xs">ব্লগ</span>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
                <TrendingUp className="h-5 w-5" />
                <span className="text-xs">ট্রেন্ডিং</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  ট্রেন্ডিং নিউজ
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4">
                <DynamicSidebar />
              </div>
            </SheetContent>
          </Sheet>

          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <Settings className="h-5 w-5" />
            <span className="text-xs">সেটিংস</span>
          </Button>
        </div>
      </div>
    </>
  )
} 