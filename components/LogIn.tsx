import { signIn } from '@/auth';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { FaGithub as GitHubIcon } from 'react-icons/fa';
import Menu from '@/components/Menu';
// import {Button} from '@/components/ui/button';

async function signTo(){
    'use server'
    await signIn("github", {
        redirectTo: "/home"
    })
}

export default function LogInComponent (){
    return (
        <>
        <div className='flex justify-between align-center p-3 h-14 border-b border-border'>
            <Link 
            href='/' 
            className='inline-flex items-center justify-center px-3  text-sm text-foreground'
            >
             <ArrowLeft size={18} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' /> 
             Voltar
             </Link>

            <Menu />
        </div>
        <main className='flex justify-center align-center pt-20 px-6'>
            <div className='flex flex-col w-full max-w-lg p-6 lg:p-8 border border-border bg-card rounded-lg shadow-sm'>
                <div className='mb-8 space-y-2 text-center'>
                    <h1 className='text-2xl font-bold tracking-tight text-foreground sm:text-2xl'>
                        Bem-vindo!
                    </h1>

                    <p className='text-sm text-muted-foreground'>
                        Faça login para acessar tua conta.
                    </p>
                </div>

                <form action={signTo} className='space-y-4'>
                    <button
                    type='submit'
                    className='w-full flex items-center justify-center gap-2 cursor-pointer py-3
                    border border-border rounded-md text-sm font-medium text-foreground hover:bg-accent/50 transition-colors duration-200'
                    >
                        <GitHubIcon className='mr-2 h-4 w-4 ' />
                        Entrar com GitHub
                    </button>
                </form>
            </div>
        </main>
        </>
    )
}