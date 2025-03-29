import { LogoLogin } from '@/components/logo-login/logo-login'
import { RouteMap } from '@/routes/route-map'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { PasswordInput } from '@/components/password-input'

export function RegisterPageContent() {

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <LogoLogin />
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Criar conta</CardTitle>
            <CardDescription>Descrição da criação de conta</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-6">
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seuemail@stevanini.com.br" required size={40} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" type="text" placeholder="Nome completo" required size={40} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Senha</Label>
                    <PasswordInput placeholder="Escolha uma senha" required size={40} />
                    {/* <Input id="password" type="password" placeholder="Escolha uma senha" required size={40} /> */}
                  </div>
                  <Button type="submit" className="w-full">
                    Criar conta
                  </Button>
                </div>
                <div className="text-center">
                  <Link
                    href={RouteMap.login}
                    className="hover:text-white gap-2 flex items-center justify-center text-muted-foreground"
                  >
                    Voltar para o login
                  </Link>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 ">
          algo
          <a href="#" className="[&]:hover:text-primary">
            algo
          </a>{' '}
          algo
          <a href="#" className="[&]:hover:text-primary">
            algo
          </a>
          .
        </div>
      </div>
    </div>
  )
}
