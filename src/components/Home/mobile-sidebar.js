"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { LayoutList, Newspaper, Bell, Home, BookOpen, Settings, TrendingUp, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FollowsSection } from "./follows-section"
import { NewsSlider } from "./news-slider"
import { DynamicSidebar } from "./dynamic-sidebar"
import Link from "next/link"
const navs = [
  {
    icon: Home,
    label: "হোম",
    href: "/",
  },
  {
    icon: BookOpen,
    label: "ব্লগ",
    href: "/blog",
  },
  {
    icon: User,
    label: "আপনি",
    href: "/profile",
  },
  {
    icon: Settings,
    label: "সেটিংস",
    href: "/settings",
  },
]


export function MobileSidebar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-card border-t py-2 z-40">
      <div className="flex items-center justify-between px-2 mx-auto">

        {navs.map((nav) => (
          <Button key={nav.href} variant="ghost" size="sm" >
            <Link href={nav.href} className="flex flex-col items-center py-1 px-2 h-auto min-w-[3rem]">
              <nav.icon className="h-4 w-4" />
              <span className="text-[10px] mt-0.5">{nav.label}</span>
            </Link>
          </Button>
        ))}

      </div>
    </div>
  )
} 