import { Cpu, GalleryVerticalEnd, Mail, Sparkles } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { RouteMap } from '@/routes/route-map'
import { LogoLogin } from '@/components/logo-login/logo-login'

export default function EmailVerifyPageContent() {
  return (
    <div className="min-h-screen w-full bg-black">
      <main className="min-h-screen w-full grid place-items-center p-4">
        <div className="w-full flex flex-col items-center">
          {/* Logo */}
          <LogoLogin />

          {/* Card */}
          <Card className="w-full max-w-md bg-zinc-900/50 border-zinc-800 text-white backdrop-blur-sm">
            <CardHeader className="items-center space-y-6 pb-4">
              <div className="w-16 h-16 bg-esporte-soft-purple rounded-full flex items-center justify-center transform transition-transform hover:scale-105">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-center">Verifique o seu e-mail</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <CardDescription className="text-zinc-400 text-base max-w-sm mx-auto">
                Enviamos o link de verificação para o seu e-mail. Por favor, verifique sua caixa de entrada e siga as
                instruções para fazer login.
              </CardDescription>

              <div className="pt-4">
                <div className="text-zinc-500 flex items-center justify-center gap-2 text-sm">
                  Não recebeu o e-mail?{' '}
                  <Link
                    href={RouteMap.login}
                    className="text-white hover:text-esporte-purple p-0 h-auto font-normal underline underline-offset-4"
                  >
                    Tente novamente
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
