"use client"

import AuthTabs  from "@/components/Auth/Auth-tabs"
import { useUser } from '@/contexts/User'
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Page() {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user, router])

  return <AuthTabs />
}
