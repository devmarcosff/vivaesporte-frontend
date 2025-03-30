'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { GraduationCap, Settings, X, LayoutDashboard, MessageCircleQuestion, UserPen } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Badge } from '../ui/badge'
import { RouteMap } from '../../routes/route-map'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Label } from '../ui/label'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function SidebarWrapper({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const t = useTranslations('sidebar')

  const routes = [
    {
      label: t("dashboard"),
      icon: LayoutDashboard,
      href: RouteMap.dashboard,
    },
    {
      label: 'Alunos',
      icon: GraduationCap,
      href: RouteMap.students,
      badge: '0'
    },
    {
      label: "Professores",
      icon: UserPen,
      href: RouteMap.teachers,
      badge: '0'
    }
  ]

  const routesBottom = [
    {
      label: t('settings'),
      icon: Settings,
      href: RouteMap.profile,
      matches: [RouteMap.profile]
    },
    {
      label: "Ajuda",
      icon: MessageCircleQuestion,
      href: RouteMap.tutorials
    }
  ]

  function isActive(route: (typeof routesBottom)[0]) {
    if (route.matches) return route.matches.some((match) => pathname === match)
    return new RegExp(`${route.href}`).test(pathname)
  }

  return (
    <div
      className={cn(
        'fixed inset-y-0 left-0 z-50 md:relative md:z-0',
        'flex flex-col h-full bg-card border-r w-72',
        'transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      )}
    >
      <div className="px-3 py-2 flex-1">
        <div className="flex items-center justify-between pl-3 h-18 mb-2">
          <div className="py-3">
            <h1 className="text-2xl font-bold text-esporte-soft-purple">Conecta Esporte</h1>
            <Label>Bom Jesus do Itabapoana</Label>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="px-3 mb-8">
          <Select defaultValue="personal">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select account" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="personal">Acesso Profissional</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant={isActive(route) ? 'secondary' : 'ghost'}
              className={cn('w-full justify-start', isActive(route) && 'bg-secondary')}
              asChild
            >
              <Link href={route.href} className="flex items-center justify-between">
                <div className="flex items-center">
                  <route.icon className="h-5 w-5 mr-3" />
                  {route.label}
                </div>
                {route.badge && (
                  <Badge variant="secondary" className="ml-auto">
                    {route.badge}
                  </Badge>
                )}
              </Link>
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-auto p-4 border-t">
        <div className="space-y-1">
          {routesBottom.map((route) => (
            <Button
              key={route.href}
              variant={isActive(route) ? 'secondary' : 'ghost'}
              className={cn('w-full justify-start', isActive(route) && 'bg-secondary')}
              asChild
            >
              <Link href={route.href}>
                <route.icon className="h-5 w-5 mr-3" />
                {route.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
