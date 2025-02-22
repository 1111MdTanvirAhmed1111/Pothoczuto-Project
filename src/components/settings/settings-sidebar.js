"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Bell, Globe, HelpCircle, KeyRound, LayoutGrid, Lock, Settings, User } from "lucide-react"

const sidebarNavItems = [
  {
    title: "Account",
    href: "/settings",
    icon: User,
  },
  {
    title: "Security",
    href: "/settings/security",
    icon: Lock,
  },
  {
    title: "Notifications",
    href: "/settings/notifications",
    icon: Bell,
  },
  {
    title: "Display",
    href: "/settings/display",
    icon: LayoutGrid,
  },
  {
    title: "Language",
    href: "/settings/language",
    icon: Globe,
  },
  {
    title: "Privacy",
    href: "/settings/privacy",
    icon: KeyRound,
  },
  {
    title: "Help",
    href: "/settings/help",
    icon: HelpCircle,
  },
  {
    title: "Advanced",
    href: "/settings/advanced",
    icon: Settings,
  },
]

export function SettingsSidebar() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col space-y-1">
      {sidebarNavItems.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "secondary" : "ghost"}
          className={cn("w-full justify-start", pathname === item.href && "bg-muted")}
          asChild
        >
          <Link href={item.href}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}

