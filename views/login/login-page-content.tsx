'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LoaderCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { loginService } from './login-service'
import { RouteMap } from '@/routes/route-map'
import { useRouter } from 'next/navigation'
import { LogoLogin } from '@/components/logo-login/logo-login'
import Link from 'next/link'
import { PasswordInput } from '@/components/password-input'
import { toast } from 'sonner'
import { setCookie } from 'nookies'
import { ModeToggle } from '@/components/mode-toggle'

interface LoginFormData {
  email: string,
  password: string
}

export function LoginPageContent() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    try {
      const response = await loginService.authUser(data.email, data.password)

      if (response.status === 201) {
        router.push(RouteMap.dashboard)
      }
    } catch {
      toast.error("Algo deu errado!", {
        description: "Credenciais inválidas.",
        icon: '❌',
        classNames: {
          description: '!text-red-800',
        }
      })
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col">
        <LogoLogin />
        <Card>
          <CardHeader className="text-center relative">
            <CardTitle className="text-xl">Seja bem-vindo</CardTitle>
            <CardDescription>Faça seu login</CardDescription>
            <div className='hidden md:flex absolute' >
              <ModeToggle />
            </div>
          </CardHeader>
          <CardContent className='relative'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-6">
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seuemail@email.com"
                      required
                      className={`${errors.email ? 'border-esporte-red-default' : ''}`}
                      size={40}
                      {...register('email', {
                        required: 'O email é obrigatório',
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                      })}
                    />
                    {errors.email && <p className="text-esporte-red-default text-sm">{errors.email.message}</p>}
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Senha *</Label>
                      <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                        Esqueceu sua senha?
                      </a>
                    </div>
                    <PasswordInput
                      className={`${errors.password ? 'border-esporte-red-default' : ''}`}
                      placeholder="Digite sua senha"
                      {...register('password', {
                        minLength: {
                          value: 6,
                          message: 'A senha deve ter pelo menos 6 caracteres'
                        },
                        required: 'A senha é obrigatória'
                      })}
                    />
                    {errors.password && <p className="text-esporte-red-default text-sm">{errors.password.message}</p>}
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? <LoaderCircle className="animate-spin" /> : 'Acessar'}
                  </Button>
                </div>
              </div>
            </form>
            <div className='flex md:hidden absolute -bottom-10 right-0' >
              <ModeToggle />
            </div>
          </CardContent>
        </Card>
      </div>
    </div >
  )
}
