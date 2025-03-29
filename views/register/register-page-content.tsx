import { LogoLogin } from '@/components/logo-login/logo-login'
import { RouteMap } from '@/routes/route-map'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft } from 'lucide-react'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

export function RegisterPageContent() {
  const t = useTranslations('register')

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <LogoLogin />
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">{t('title')}</CardTitle>
            <CardDescription>{t('description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-6">
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">{t('emailLabel')}</Label>
                    <Input id="email" type="email" placeholder="me@example.com" required size={40} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="name">{t('nameLabel')}</Label>
                    <Input id="name" type="text" placeholder="me" required size={40} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company">{t('companyLabel')}</Label>
                    <Input id="company" type="text" placeholder="me" required size={40} />
                  </div>
                  <Button type="submit" className="w-full">
                    {t('register')}
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
          {t('byClickingContinueYouAgreeToOur')}{' '}
          <a href="#" className="[&]:hover:text-primary">
            {t('termsOfService')}
          </a>{' '}
          {t('and')}{' '}
          <a href="#" className="[&]:hover:text-primary">
            {t('privacyPolicy')}
          </a>
          .
        </div>
      </div>
    </div>
  )
}
