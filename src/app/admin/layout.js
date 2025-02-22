'use client'

import { Inter } from 'next/font/google'

import { Sidebar } from "./components/Sidebar"

const inter = Inter({ subsets: ['latin'] })

export default function AdminLayout({ children }) {
  return (
    <div className={inter.className}>
        
        <div className="flex h-screen mt-28">

          <Sidebar />
          <div className="flex-1 flex flex-col">
            <main className="flex-1 overflow-y-auto p-4 md:p-8">
              {children}
            </main>
          </div>
        </div>

    </div>
  )
}

