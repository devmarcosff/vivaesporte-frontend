import apiClient from '@/lib/api-client'
import { setCookie } from 'nookies'
import { toast } from 'sonner'

export const loginService = {
  async authUser(email: string, password: string) {
    const response = await apiClient.post('/auth/login', { email, password })
    if (response.status === 201) {
      setCookie(null, 'USER_TOKEN', response.data?.access_token, {
        maxAge: 60 * 60 * 24 * 7, // 7 diasx,
        path: '/', // caminho onde o cookie será válido
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      })
      toast.success(`Seja bem-vindo, ${response?.data.user.name}!`, {
        description: "Redirecionando...",
        icon: '✅',
        classNames: {
          description: '!text-green-800',
        }
      })
    }

    return response;
  }
}
