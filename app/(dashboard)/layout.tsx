'use client'

import { SidebarWrapper } from '@/components/sidebar-wrapper/sidebar-wrapper'
import { Header } from '@/components/header/header'
import { useState } from 'react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="h-screen">
      <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
          <SidebarWrapper isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </div>
        <div className="md:hidden">
          <SidebarWrapper isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </div>
        <main className="md:pl-72">
          <Header onMobileMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          <div className="flex-1 space-y-4 bg-neutral-100 dark:bg-transparent">{children}</div>
        </main>
      </div>
    </div>
  )
}
