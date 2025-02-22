import type React from "react"
import type { Metadata } from "next"
import { SettingsSidebar } from "@/components/settings/settings-sidebar"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your account settings and preferences.",
}

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container relative mx-auto flex min-h-screen w-full flex-col space-y-6 py-6 lg:flex-row lg:space-x-6 lg:space-y-0 lg:py-8">
      <aside className="lg:w-1/5">
        <SettingsSidebar />
      </aside>
      <Separator orientation="vertical" className="hidden lg:block" />
      <div className="flex-1 lg:max-w-3xl">{children}</div>
    </div>
  )
}

