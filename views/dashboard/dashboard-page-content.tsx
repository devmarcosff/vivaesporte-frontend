import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, CreditCard, Activity, DollarSign, MessageCircle } from 'lucide-react'
import { DashboardOverview } from './components/dashboard-overview'
import { DashboardRecentChats } from './components/dashboard-recent-chats'
import { PageTitle } from '@/components/page-title/page-title'
import { useTranslations } from 'next-intl'

export function DashboardPageContent() {
  const t = useTranslations('dashboard')
  return (
    <div className="flex-1 space-y-4 p-8">
      <PageTitle title={t('title')} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Chats</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contatos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <DashboardOverview />
        </div>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Chats recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <DashboardRecentChats />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
