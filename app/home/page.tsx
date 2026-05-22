import LogoutButton from '@/components/ui/logoutButton';

export default function HomePage() {
    return (
        <main className='flex-1'>
        <div className='flex justify-between align-center p-3 h-14 border-b border-border'>
            <h2 className='text-md'>Home</h2>
            <div className='flex gap-2'>
            <LogoutButton />
           
            </div>          
        </div>
        <div className='flex justify-center align-center h-screen mt-18'>
            <h1 className='text-2xl font-bold tracking-tight text-foreground sm:text-2xl'>
                Bem-vindo à Home!
            </h1>
        </div>
        </main>
    )
}