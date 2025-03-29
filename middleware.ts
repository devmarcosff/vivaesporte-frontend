import { RouteMap } from "@/routes/route-map"
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"

const publicRoutes = [
    { path: RouteMap.login, whenAuthenticated: 'redirect' },
    { path: RouteMap.register, whenAuthenticated: 'redirect' },
    { path: '/', whenAuthenticated: 'next' },
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED = RouteMap.login

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const publicRoute = publicRoutes.find((route) => route.path === path)
    const authToken = request.cookies.get('USER_TOKEN')

    const redirectUrl = request.nextUrl.clone()

    // Usuário não autenticado
    if (!authToken) {
        if (publicRoute) {
            return NextResponse.next()
        }
        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED
        return NextResponse.redirect(redirectUrl)
    }

    // Usuário autenticado acessando rota pública com redirecionamento
    if (publicRoute && publicRoute.whenAuthenticated === 'redirect') {
        redirectUrl.pathname = RouteMap.dashboard
        return NextResponse.redirect(redirectUrl)
    }

    // Usuário autenticado acessando rota protegida
    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        await jwtVerify(authToken.value, secret)

        return NextResponse.next()
    } catch (error) {
        // Token inválido ou expirado
        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED

        const response = NextResponse.redirect(redirectUrl)

        // ⚠️ Substitui o cookie por um vazio e com maxAge 0 para removê-lo do navegador
        response.cookies.set('USER_TOKEN', '', {
            path: '/',
            maxAge: 0,
        })

        return response
    }
}

export const config: MiddlewareConfig = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}