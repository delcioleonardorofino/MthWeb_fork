import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Menu from '@/components/landing/Menu';
import LogInForm from './LogInForm';
import EmailLoginForm from '@/components/emailLogin'


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

                <LogInForm />
                <div className='relative my-4'>
                    <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-border' />
                    </div>
                    <div className='relative flex justify-center text-xs uppercase'>
                        <span className='bg-card px-2 text-muted-foreground'>
                            ou
                        </span>
                    </div>
                </div>
                <EmailLoginForm />
            </div>
        </main>
        </>
    )
}