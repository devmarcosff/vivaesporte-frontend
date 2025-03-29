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
import { StudentInput } from './students'
import { deleteStudent, getAllStudent } from '@/views/students/students-service'
import StudentSkeleton from '@/views/students/students-skeleton'

export function StudentsPageContent() {
  const { push } = useRouter();
  const [students, setStudents] = useState<StudentInput[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllStudent().then((response) => {
      setStudents(response)
    }).catch().finally(() => setLoading(false));
  }, []);

  const handleNewStudent = () => push(`${RouteMap.students}/new`)

  const handleDeleteStudent = async (id: string) => {
    try {
      await deleteStudent(id);
      setStudents((prev) => prev.filter(student => `${student.id}` !== id));
    } catch (error) {
    }
  };

  return (
    <div className="flex-1">
      <PageTitle
        title='Lista de alunos'
        description='Gerencie, adicione ou remova informações de alunos'
        primaryButton={{
          label: "Novo aluno",
          icon: <Users2 />,
          action: handleNewStudent
        }}
      />

      <div className="flex flex-col gap-2">
        {/* Student Loading */}
        {loading && <StudentSkeleton />}
        {/* Student Table */}
        {students.length > 0 && students.map((student) => (
          <Card
            className="bg-transparent w-full flex items-center justify-between gap-3 cursor-pointer hover:bg-secondary/50 group p-4"
            key={student.id}
          >
            <Avatar className="w-8 h-8 bg-esporte-neutral-lighter shadow-md flex justify-center items-center dark:bg-neutral-950">
              <AvatarImage src="https://github.com/shadcn.png" className="w-8 h-8 rounded-full" alt="@shadcn" />
              <AvatarFallback>{student.name}</AvatarFallback>
            </Avatar>
            <div className="flex gap-3 items-center flex-1">
              <Label>{student.name}</Label>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => push(`${RouteMap.students}/${student.id}`)}
                className="bg-secondary  border text-muted-foreground
                      hover:bg-esporte-neutral-lighter group-hover:border-esporte-neutral-light
                      dark:hover:bg-neutral-900 dark:group-hover:border-neutral-700"
              >
                <Settings2 />
              </Button>
              <Button
                onClick={() => handleDeleteStudent(`${student.id}`)}
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
