import {auth} from '@/auth';

export default auth((req) =>{
    const isLoggedIn = !!req.auth
    const { nextUrl} = req


    const isAuthPage = nextUrl.pathname === '/entrar' || nextUrl.pathname === '/';

    if (isAuthPage){
        if (isLoggedIn){
            return Response.redirect(new URL('/home', nextUrl))
        }
        return null
    }

    if (!isLoggedIn){
        return Response.redirect(new URL('/entrar', nextUrl))
    }

    return null
})

export const config = {
    matcher: ["/((?!api|_next/static|favicon.ico).*)"],
}