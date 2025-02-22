'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, MessageSquare, Users, BarChart, Settings, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'

const sidebarNavItems = [
  {
    title: "Menu",
    items: [
      {
        title: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
      },
      {
        title: "Blog Posts",
        href: "/admin/blog-posts",
        icon: FileText,
      },
      {
        title: "Comments",
        href: "/admin/comments",
        icon: MessageSquare,
      },
      {
        title: "Users",
        href: "/admin/users",
        icon: Users,
      },
      {
        title: "Analytics",
        href: "/admin/analytics",
        icon: BarChart,
      },
      {
        title: "Settings",
        href: "/admin/settings",
        icon: Settings,
      },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden fixed left-4 top-4 z-40">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-[300px]">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-4 py-2 border-b">
              <h2 className="text-lg font-semibold">Blog Admin</h2>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <ScrollArea className="flex-1">
              <div className="space-y-4 py-4">
                {sidebarNavItems.map((item, index) => (
                  <div key={index} className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                      {item.title}
                    </h2>
                    <div className="space-y-1">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          onClick={() => setOpen(false)}
                        >
                          <Button
                            variant={pathname === subItem.href ? "secondary" : "ghost"}
                            className="w-full justify-start"
                          >
                            <subItem.icon className="mr-2 h-4 w-4" />
                            {subItem.title}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </SheetContent>
      </Sheet>
      <div className={cn(
        "hidden md:flex flex-col border-r bg-background transition-all duration-300",
        collapsed ? "w-[80px]" : "w-64"
      )}>
        <div className="flex h-14 items-center justify-between border-b px-4">
          {!collapsed && <h2 className="text-lg font-semibold">Blog Admin</h2>}
          <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <div className="space-y-4 py-4">
            {sidebarNavItems.map((item, index) => (
              <div key={index} className="px-3 py-2">
                {!collapsed && (
                  <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                    {item.title}
                  </h2>
                )}
                <div className="space-y-1">
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                    >
                      <Button
                        variant={pathname === subItem.href ? "secondary" : "ghost"}
                        className={cn(
                          "w-full justify-start",
                          collapsed && "justify-center px-2"
                        )}
                        title={collapsed ? subItem.title : undefined}
                      >
                        <subItem.icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
                        {!collapsed && subItem.title}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </>
  )
}

