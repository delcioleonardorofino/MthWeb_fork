import MobileNavMenu from '@/components/MobileNavMenu';
import { NewPostButton } from '@/components/NewPostButton'
import NavMenu from '@/components/LoggedDrawer';
import { ThemeToggler } from '@/components/ui/themeToggler';

export default function HomePage() {
    return (
        <main className='flex-1'>
        <div className='flex justify-between align-center p-3 h-14 border-b border-border'>

            <div className='flex gap-1.5'>
                <NavMenu />
                <h2 className='text-md self-center'>Home</h2>
            </div>
            <div className='flex gap-1.5'>
                <ThemeToggler />
                <NewPostButton />
            </div>
            
                      
        </div>
        <div className='flex justify-center align-center h-screen mt-18'>
            <h1 className='text-2xl font-bold tracking-tight text-foreground sm:text-2xl'>
                Bem-vindo à Home!
            </h1>
        </div>
        <MobileNavMenu />
        </main>
    )
}