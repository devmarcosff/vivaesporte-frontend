'use client'

import { useEffect, useState } from 'react'
import {
  Activity,
  ArrowLeft,
  ArrowLeftFromLine,
  BarChart3,
  Calendar,
  ChartBar,
  Clock,
  CodeXml,
  Droplet,
  Edit,
  Ellipsis,
  FileBarChart,
  FileText,
  GraduationCap,
  Hash,
  Info,
  InfoIcon,
  LibraryBig,
  LucideArrowLeftRight,
  MapPin,
  MessageSquare,
  MessageSquareText,
  MoreHorizontal,
  PanelsTopLeft,
  PanelsTopLeftIcon,
  Phone,
  Plus,
  School,
  Settings,
  Settings2,
  Share2,
  Square,
  SquareMousePointer,
  Trash,
  Trophy,
  UserCircle,
  Users
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Alert } from '@/components/ui/alert'
import { useForm } from 'react-hook-form'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { FaWhatsapp } from 'react-icons/fa'
import { PageTitle } from '@/components/page-title/page-title'
import { Card } from '@/components/ui/card'
import { RouteMap } from '@/routes/route-map'
import { Popover } from '@radix-ui/react-popover'
import { PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { deleteStudent, editStudentProfile, getStudentById, updateStudent } from '@/views/students/students-service'
import { ISport, StudentInput } from './students'
import { AgentEditProfile } from './components/agent-edit-profile'
import { toast } from 'sonner'

type Checked = DropdownMenuCheckboxItemProps['checked']

export function StudentsDetailPageContent() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false)
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)
  const [student, setStudent] = useState<StudentInput>();

  useEffect(() => {
    getStudentById(`${id}`).then((response) => {
      setStudent(response);
    });
  }, []);

  const handleDeleteStudent = async (id: string) => await deleteStudent(id);

  const onSubmit = (data: StudentInput) => {
    const payload = {
      name: data.name,
      birthDate: data.birthDate
    };

    updateStudent(`${id}`, payload).then((response) => {
      setLoading(true)
      setStudent(response)
    }).catch(err => console.log(err)).finally(() => setLoading(false));
  };

  const handleProfileUpdate = (updatedData: { name: string, birthDate: string }) => {
    setLoading(true)
    editStudentProfile(`${id}`, updatedData).then((response) => {
      setOpenEditModal(false)
      setLoading(false)
      setStudent(response)
    }).catch(err => console.log(err));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  const esportes = ['Futebol', 'Jiu-Jitsu', 'Natação'];

  return (
    <div className="flex-1 space-y-8">
      <AgentEditProfile
        openEditModal={openEditModal}
        closeEditModal={setOpenEditModal}
        name={`${student?.name}`}
        birthDate={`${student?.birthDate}`}
        onSave={handleProfileUpdate}
        loading={loading} />

      <PageTitle
        title="Detalhes do Aluno"
        backButtonUrl={RouteMap.students} />

      <div className="space-y-8 mx-auto">
        {/* Tutorial Link */}
        <Card className="flex items-start justify-between overflow-hidden dark:bg-neutral-900 p-6">
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24 bg-esporte-neutral-lighter shadow-md flex justify-center items-center dark:bg-neutral-950">
              {/* <AvatarImage src="https://github.com/shadcn.png" className="w-20 h-20 rounded-full" alt="@shadcn" /> */}
              <AvatarFallback>{getInitials(`${student?.name}`)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">{student?.name}</h1>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <Hash className="h-4 w-4" />
                <span>Matrícula: {student?.registrationNumber}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <School className="h-4 w-4" />
                <span>Escola: {student?.school}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                {student?.sports && student?.sports.map((sport) => (
                  <Badge key={sport.id} variant="secondary" className={`${sport.name === 'Futebol' ? 'dark:bg-green-900/20 dark:text-green-300' : sport.name === 'Jiu-Jitsu' ? 'dark:bg-orange-900/20 dark:text-orange-300' : 'dark:bg-blue-900/20 dark:text-blue-300 bg-blue-100 text-blue-700'}`}>
                    {sport.name}
                  </Badge>
                ))}
                {(!student?.sports || student?.sports.length === 0) && (
                  esportes.map((esporte) => (
                    <Badge
                      key={esporte}
                      variant="secondary"
                      className={`${esporte === 'Futebol' ? 'dark:bg-green-900/20 dark:text-green-300 bg-green-100 text-green-700' : esporte === 'Jiu-Jitsu' ? 'dark:bg-orange-900/20 dark:text-orange-300 bg-orange-100 text-orange-700' : 'dark:bg-blue-900/20 dark:text-blue-300 bg-blue-100 text-blue-700'}`}
                    >
                      {esporte}
                    </Badge>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-3 self-end md:self-auto">
            <Button variant="outline" className="flex items-center gap-2">
              <MessageSquareText className="h-4 w-4" />
              Agendar aula
            </Button>
            <Button className="flex items-center gap-2" onClick={() => setOpenEditModal(!openEditModal)}>
              <Edit className="h-4 w-4" />
              Editar
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Área do aluno</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='cursor-pointer'>
                  <FileBarChart className="h-4 w-4 mr-2" />
                  Gerar relatório
                </DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer'>
                  <Settings className="h-4 w-4 mr-2" />
                  Configurações
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 cursor-pointer" onClick={() => handleDeleteStudent(`${student?.id}`)}>
                  <Trash className="h-4 w-4 mr-2" />
                  Excluir aluno
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Card>
      </div>

      <div className="space-y-8 mx-auto">
        <Tabs defaultValue="personal" className="w-full relative">
          <TabsList className="flex bg-transparent w-full items-center justify-start transition-all gap-3 group overflow-hidden overflow-x-auto">
            <TabsTrigger value="personal" className="data-[state=active]:border-blue-500 border gap-2 data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/20 data-[state=active]:text-blue-700 dark:data-[state=active]:text-blue-300">
              <UserCircle className="group-data-[state=active]:!text-esporte-purple h-5 w-5" />
              Dados Pessoais
            </TabsTrigger>
            <TabsTrigger value="academic" className="data-[state=active]:border-blue-500 border gap-2 data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/20 data-[state=active]:text-blue-700 dark:data-[state=active]:text-blue-300">
              <School className="group-data-[state=active]:!text-esporte-purple h-5 w-5" />
              Acadêmico
            </TabsTrigger>
            <TabsTrigger value="activities" className="data-[state=active]:border-blue-500 border gap-2 data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/20 data-[state=active]:text-blue-700 dark:data-[state=active]:text-blue-300">
              <Activity className="group-data-[state=active]:!text-esporte-purple h-5 w-5" />
              Atividades
            </TabsTrigger>
            <TabsTrigger value="performance" className="data-[state=active]:border-blue-500 border gap-2 data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/20 data-[state=active]:text-blue-700 dark:data-[state=active]:text-blue-300">
              <BarChart3 className="group-data-[state=active]:!text-esporte-purple h-5 w-5" />
              Desempenho
            </TabsTrigger>

          </TabsList>

          <Card className="flex items-start justify-between dark:bg-neutral-900 mt-6 p-6">
            {/* Conteúdo da aba de Dados Pessoais */}
            <TabsContent value="personal" className="mt-0 w-full">
              <Card className="p-6 dark:bg-neutral-900">
                <h2 className="text-lg font-semibold mb-4">Informações Pessoais</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-neutral-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-500">Data de Nascimento</p>
                      {/* <p className="font-medium">{formatDate(student?.birthDate)}</p> */}
                      <p className="font-medium">{student?.birthDate}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-neutral-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-500">Documento</p>
                      <p className="font-medium">{student?.document}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-neutral-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-500">Endereço</p>
                      <p className="font-medium">{student?.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Droplet className="h-5 w-5 text-neutral-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-500">Tipo Sanguíneo</p>
                      <p className="font-medium">{student?.bloodType}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-neutral-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-500">Contato</p>
                      <p className="font-medium">{student?.contact}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-neutral-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-500">Filiação</p>
                      <p className="font-medium">{student?.filiation}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mt-6 dark:bg-neutral-900">
                <h2 className="text-lg font-semibold mb-4">Documentos</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    <Label>Histórico Eescolar não identificado</Label>
                  </Button>
                  <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    <span>Matrícula não identificada</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    <span>Ficha Médica não identificada</span>
                  </Button>
                </div>
              </Card>
            </TabsContent>

            {/* Conteúdo da aba Acadêmico */}
            <TabsContent value="academic" className="mt-0 w-full">
              <Card className="p-6 dark:bg-neutral-900">
                <h2 className="text-lg font-semibold mb-4">Informações Acadêmicas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  <div className="flex items-start gap-3">
                    <School className="h-5 w-5 text-neutral-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-500">Escola</p>
                      <p className="font-medium">{student?.school}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-neutral-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-500">Turno</p>
                      <p className="font-medium">{student?.shift}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Hash className="h-5 w-5 text-neutral-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-500">Matrícula</p>
                      <p className="font-medium">{student?.registrationNumber}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mt-6 dark:bg-neutral-900">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Disciplinas</h2>
                  <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    2º Ano - Ensino Médio
                  </Badge>
                </div>
                <div className="space-y-4">
                  {/* Mock de disciplinas */}
                  {[
                    { id: 1, name: 'Matemática', teacher: 'Prof. Carlos Silva', grade: '8.5' },
                    { id: 2, name: 'Português', teacher: 'Profa. Ana Oliveira', grade: '9.0' },
                    { id: 3, name: 'Física', teacher: 'Prof. Roberto Santos', grade: '7.8' },
                    { id: 4, name: 'Educação Física', teacher: 'Prof. Márcio Almeida', grade: '10.0' }
                  ].map((subject) => (
                    <div key={subject.id} className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                      <div>
                        <h3 className="font-medium">{subject.name}</h3>
                        <p className="text-sm text-neutral-500">{subject.teacher}</p>
                      </div>
                      <Badge className={`${parseFloat(subject.grade) >= 9
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : parseFloat(subject.grade) >= 7
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                        }`}>
                        Nota: {subject.grade}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Conteúdo da aba Atividades */}
            <TabsContent value="activities" className="mt-0 w-full">
              <Card className="p-6 dark:bg-neutral-900">
                <h2 className="text-lg font-semibold mb-4">Atividades Esportivas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {student?.sports && student?.sports.length > 0 ? (
                    student?.sports.map((sport, index: number) => (
                      <Card key={index} className="p-4 border border-neutral-200 dark:border-neutral-800">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                            <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="font-medium text-lg">{sport.name || "Test"}</h3>
                            <p className="text-sm text-neutral-500">Terça e Quinta - 14:00 às 16:00</p>
                            <p className="text-sm text-neutral-500">Professor: Ricardo Mendes</p>
                            <div className="mt-2">
                              <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                Avançado
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))
                  ) : (
                    <div className="col-span-2 p-6 text-center border border-dashed rounded-lg">
                      <Trophy className="h-10 w-10 text-neutral-400 mx-auto mb-2" />
                      <h3 className="text-neutral-600 dark:text-neutral-400 font-medium mb-1">Nenhuma atividade esportiva cadastrada</h3>
                      <p className="text-neutral-500 text-sm mb-4">O aluno não está matriculado em nenhuma atividade esportiva</p>
                      <Button>Adicionar Atividade</Button>
                    </div>
                  )}
                </div>
              </Card>

              <Card className="p-6 mt-6 dark:bg-neutral-900">
                <h2 className="text-lg font-semibold mb-4">Eventos e Competições</h2>
                <div className="space-y-4">
                  {/* Mock de eventos */}
                  {[
                    { id: 1, name: 'Campeonato Interescolar de Natação', date: '15/04/2025', status: 'Confirmado' },
                    { id: 2, name: 'Torneio Regional de Futebol', date: '22/05/2025', status: 'Pendente' },
                    { id: 3, name: 'Torneio Regional de Jiu-Jitsu', date: '07/04/2025', status: 'Realizado' },
                  ].map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <Calendar className="h-5 w-5 text-neutral-500" />
                        <div>
                          <h3 className="font-medium">{event.name}</h3>
                          <p className="text-sm text-neutral-500">Data: {event.date}</p>
                        </div>
                      </div>
                      <Badge variant={event.status === 'Confirmado' ? 'default' : 'secondary'}>
                        {event.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Conteúdo da aba Desempenho */}
            <TabsContent value="performance" className="mt-0 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 dark:bg-neutral-900">
                  <h2 className="text-lg font-semibold mb-4">Desempenho Acadêmico</h2>
                  <div className="h-64 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-md">
                    <BarChart3 className="h-16 w-16 text-neutral-400" />
                    <p className="text-neutral-500 ml-4">Gráfico de Desempenho</p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                      <p className="text-sm text-neutral-500">Média Geral</p>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">0</p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
                      <p className="text-sm text-neutral-500">Frequência</p>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">0%</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 dark:bg-neutral-900">
                  <h2 className="text-lg font-semibold mb-4">Desempenho Esportivo</h2>
                  <div className="space-y-4">
                    {student?.sports && student?.sports.length > 0 ? (
                      student?.sports.map((sport, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <h3 className="font-medium">{sport?.name}</h3>
                          <div className="mt-3 space-y-2">
                            <div className="flex justify-between items-center">
                              <p className="text-sm text-neutral-500">Técnica</p>
                              <div className="w-48 bg-neutral-200 dark:bg-neutral-700 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                              </div>
                              <span className="text-sm font-medium">8.5</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <p className="text-sm text-neutral-500">Resistência</p>
                              <div className="w-48 bg-neutral-200 dark:bg-neutral-700 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                              </div>
                              <span className="text-sm font-medium">7.0</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <p className="text-sm text-neutral-500">Disciplina</p>
                              <div className="w-48 bg-neutral-200 dark:bg-neutral-700 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                              </div>
                              <span className="text-sm font-medium">9.5</span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-6 text-center border border-dashed rounded-lg">
                        <Activity className="h-10 w-10 text-neutral-400 mx-auto mb-2" />
                        <h3 className="text-neutral-600 dark:text-neutral-400 font-medium">Sem dados de desempenho</h3>
                        <p className="text-neutral-500 text-sm">O aluno não está matriculado em nenhuma atividade esportiva</p>
                      </div>
                    )}
                  </div>
                </Card>
              </div>

              <Card className="p-6 mt-6 dark:bg-neutral-900">
                <h2 className="text-lg font-semibold mb-4">Histórico de Avaliações</h2>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="border-b dark:border-neutral-800">
                        <th className="text-left py-3 px-4 font-medium">Disciplina</th>
                        <th className="text-left py-3 px-4 font-medium">Tipo</th>
                        <th className="text-left py-3 px-4 font-medium">Data</th>
                        <th className="text-left py-3 px-4 font-medium">Nota</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: 1, subject: 'Matemática', type: 'Prova', date: '12/03/2025', grade: '8.5' },
                        { id: 2, subject: 'Português', type: 'Trabalho', date: '05/03/2025', grade: '9.5' },
                        { id: 3, subject: 'Física', type: 'Prova', date: '20/02/2025', grade: '7.0' },
                        { id: 4, subject: 'Educação Física', type: 'Avaliação Prática', date: '15/02/2025', grade: '10.0' }
                      ].map((assessment) => (
                        <tr key={assessment.id} className="border-b dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                          <td className="py-3 px-4">{assessment.subject}</td>
                          <td className="py-3 px-4">{assessment.type}</td>
                          <td className="py-3 px-4">{assessment.date}</td>
                          <td className="py-3 px-4">
                            <Badge className={`${parseFloat(assessment.grade) >= 9
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                              : parseFloat(assessment.grade) >= 7
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                              }`}>
                              {assessment.grade}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

          </Card>
        </Tabs>
      </div>
    </div>
  )
}
