import LogoutButton from '@/components/ui/logoutButton';

export default function HomePage() {
    return (
        <main className='flex-1'>
        <div className='flex justify-between align-center p-3 h-14 border-b border-border'>
            <h2 className='text-md'>Home</h2>
            <LogoutButton />          
        </div>
        <div className='flex justify-center align-center h-screen mt-24'>
            <h1 className='text-2xl font-bold tracking-tight text-foreground sm:text-2xl'>
                Bem-vindo à sua dashboard!
            </h1>
        </div>
        </main>
    )
}