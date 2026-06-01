import Link from 'next/link'
import Sidebar from '@/components/LoggedDrawer';
import { ThemeToggler } from '@/components/ui/themeToggler';
import MobileNavMenu from '@/components/MobileNavMenu';
import { SquarePen } from 'lucide-react'
import { TooltipProvider } from '@/components/ui/tooltip';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"

type Props = {
    children : React.ReactNode
}


export default function AppLayout( {children}: Props){

    return (
        <main className='flex-1'>
            <div className='fixed top-0 w-full md:hidden bg-background flex justify-between align-center p-3 h-14'>

                <div className='flex justify-center self-center align-center gap-1.5'>
                    <Sidebar/>
                    <h2 className='text-sm self-center'>Home</h2>
                </div>
                <div className='flex gap-1 py-5 px-1 rounded-2xl bg-card'>

                    <ThemeToggler />

                    <Link
                    href='/publicacoes/nova'
                    className="bg-card rounded-2xl text-muted-foreground self-center hover:text-foreground hover:bg-muted transition-colors"
                    >
                        <SquarePen 
                        size={34}
                        className="bg-card p-1.5 rounded-2xl text-muted-foreground self-center hover:text-foreground hover:bg-muted transition-colors"
                        />
                    </Link>
                </div>            
            </div>

            <div
            className='max-w-6xl  md:mt-0 flex flex-col justify-center'
            >
                <TooltipProvider>
                    <SidebarProvider>
                        <AppSidebar />
                        <SidebarTrigger />
                    {children}
                    </SidebarProvider>
                </TooltipProvider>
            </div>
            

            <MobileNavMenu />
        </main>
    )
}
    