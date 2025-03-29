'use client'

import { Settings2, Trash, Users2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RouteMap } from '@/routes/route-map'
import { useRouter } from 'next/navigation'
import { PageTitle } from '@/components/page-title/page-title'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useEffect, useState } from 'react'
import { TeachersInput } from './teachers'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { deleteTeachers, getAllTeachers } from './teachers-service'
import TeachersSkeleton from './teachers-skeleton'
import { Badge } from '@/components/ui/badge'

export function TeachersPageContent() {
  const { push } = useRouter();
  const [teachers, setTeachers] = useState<TeachersInput[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllTeachers().then((response) => {
      setTeachers(response)
    }).catch().finally(() => setLoading(false));
  }, []);

  const handleNewTeachers = () => push(`${RouteMap.teachers}/new`)

  const handleDeleteTeachers = async (id: string) => {
    try {
      await deleteTeachers(id);
      setTeachers((prev) => prev.filter(teacher => `${teacher.id}` !== id));
    } catch (error) {
    }
  };

  return (
    <div className="flex-1">
      <PageTitle
        title='Lista de professores'
        description='Informações de professores'
        primaryButton={{
          label: "Novo professor",
          icon: <FaChalkboardTeacher />,
          action: handleNewTeachers
        }}
      />

      <div className="flex flex-col gap-2">
        {/* Student Loading */}
        {loading && <TeachersSkeleton />}
        {/* Student Table */}
        {teachers.length > 0 && teachers.map((teacher) =>
          teacher.role !== "SUPER_ADMIN" &&
          (
            <Card
              className="bg-transparent w-full flex items-center justify-between gap-3 cursor-pointer hover:bg-secondary/50 group p-4"
              key={teacher.id}
            >
              <Avatar className="w-8 h-8 bg-esporte-neutral-lighter shadow-md flex justify-center items-center dark:bg-neutral-950">
                <AvatarImage src="https://github.com/shadcn.png" className="w-8 h-8 rounded-full" alt="@shadcn" />
                <AvatarFallback>{teacher.name}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-3 flex-1">
                <div className='flex items-center gap-3'>
                  <Label>{teacher.name}</Label>
                  <Badge variant="secondary" className={`${teacher.role ? 'dark:bg-green-900/20 dark:text-green-300' : 'dark:bg-blue-900/20 dark:text-blue-300 bg-blue-100 text-blue-700'}`}>
                    {teacher.role}
                  </Badge>
                </div>
                <Label className='text-esporte-neutral-default'>{teacher.email}</Label>
              </div>
              <div className="flex gap-3">
                <Button
                  // onClick={() => push(`${RouteMap.teachers}/${teacher.id}`)}
                  className="bg-secondary  border text-muted-foreground
                      hover:bg-esporte-neutral-lighter group-hover:border-esporte-neutral-light
                      dark:hover:bg-neutral-900 dark:group-hover:border-neutral-700"
                >
                  <Settings2 />
                </Button>
                <Button
                  onClick={() => handleDeleteTeachers(`${teacher.id}`)}
                  className="bg-secondary  border text-muted-foreground
                      hover:bg-esporte-neutral-lighter group-hover:border-esporte-neutral-light
                      dark:hover:bg-neutral-900 dark:group-hover:border-neutral-700"
                >
                  <Trash />
                </Button>
              </div>
            </Card>
          ))}
      </div>
    </div>
  )
}
