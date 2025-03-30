"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, MessageCircle } from 'lucide-react'
import { PageTitle } from '@/components/page-title/page-title'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

export function DashboardPageContent() {
  const t = useTranslations('dashboard')

  const items = [
    { title: 'Futsal', description: 'Terças e quintas, às 17h' },
    { title: 'Capoeira', description: 'Segundas e quartas, às 18h' },
    { title: 'Jiu-jitsu', description: 'Sábados, às 9h' },
    { title: 'Jiu-jitsu', description: 'Sábados, às 9h' },
    { title: 'Jiu-jitsu', description: 'Sábados, às 9h' },
  ]


  return (
    <div className="flex-1 space-y-4 p-8">
      <PageTitle title={t('title')} />

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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

      {/* <div className="grid gap-4 grid-cols-5 lg:grid-cols-5">
        <CarouselList items={items} />
      </div> */}

      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
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
      </div> */}
    </div>
  )
}

export function CarouselList({ items }: { items: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full overflow-hidden">
      <div ref={scrollRef} className="flex overflow-x-auto gap-4 scroll-smooth px-4 py-2" style={{ scrollSnapType: 'x mandatory' }}>
        {items.map((item, index) => (
          <Card className="flex-shrink-0 w-[250px] snap-start rounded-2xl shadow-md p-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Chats</CardTitle>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">22</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    // <div className="w-full overflow-hidden">
    //   <div
    //     ref={scrollRef}
    //     className="flex overflow-x-auto space-x-4 scroll-smooth px-4 py-2"
    //     style={{ scrollSnapType: 'x mandatory' }}
    //   >
    //     {items.map((item, index) => (
    //       <div
    //         key={index}
    //         className="flex-shrink-0 w-[250px] snap-start rounded-2xl shadow-md bg-white p-4"
    //       >
    //         <h4 className="font-bold text-lg">{item.title}</h4>
    //         <p className="text-sm text-muted-foreground">{item.description}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  )
}