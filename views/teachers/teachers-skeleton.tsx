import React from 'react'
import { Card } from '../../components/ui/card'
import { Avatar } from '../../components/ui/avatar'
import { Skeleton } from '../../components/ui/skeleton'
import { Button } from '../../components/ui/button'

export default function TeachersSkeleton() {
  return (
    <Card className="bg-transparent w-full flex items-center justify-between gap-3 p-4">
      {/* Avatar Skeleton */}
      <Avatar className="w-8 h-8 bg-esporte-neutral-lighter shadow-md flex justify-center items-center dark:bg-neutral-950">
        <Skeleton className="w-8 h-8 rounded-full" />
      </Avatar>

      {/* Nome Skeleton */}
      <div className="flex gap-3 items-center flex-1">
        <Skeleton className="h-4 w-16 rounded-md" />
        <Skeleton className="h-4 w-16 rounded-md" />
      </div>

      {/* Botões Skeleton */}
      <div className="flex gap-3">
        <Button
          className="bg-secondary border text-muted-foreground hover:bg-esporte-neutral-lighter 
            dark:hover:bg-neutral-900 w-full h-full flex items-center justify-center"
          disabled
        >
          <Skeleton className="w-4 h-6" />
        </Button>
        <Button
          className="bg-secondary border text-muted-foreground hover:bg-esporte-neutral-lighter 
            dark:hover:bg-neutral-900 w-full h-full flex items-center justify-center"
          disabled
        >
          <Skeleton className="w-4 h-6" />
        </Button>
      </div>
    </Card>
  )
}
