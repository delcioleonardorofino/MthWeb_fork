import { signIn } from '@/auth';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react'
import Menu from '@/components/Menu'


export default function LoginPage (){
    return (
        <>
        <div className='flex justify-between align-center p-4 h-14 border-b border-border'>
            <Link 
            href='/' 
            className='inline-flex items-center justify-center px-3 py-3 text-sm text-foreground rounded-md hover:bg-accent transition-colors'
            >
             <ArrowLeft size={18} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' /> 
             Voltar
             </Link>

            <Menu />
        </div>
        <main className='flex justify-center align-center pt-24'>
            <div className='flex flex-col max-w-6xl p-4 lg:p-6'>
                <div></div>
            </div>
        </main>
        </>
    )
}