'use server'

import { FaGithub as GitHubIcon } from 'react-icons/fa';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';



export default async function LogInForm (){
    return (
        <form className='space-y-4'>
            <button
            type='submit'
            name='provider'
            value='github'
            className='w-full flex items-center justify-center gap-2 cursor-pointer py-3
            border border-border rounded-md text-sm font-medium text-foreground hover:bg-accent/50 transition-colors duration-200'
            >
                <GitHubIcon className='mr-2 h-4 w-4 ' />
                Entrar com GitHub
            </button>
            <button
            type='submit'
            name='provider'
            value='google'
            className='w-full flex items-center justify-center gap-2 cursor-pointer py-3
            border border-border rounded-md text-sm font-medium text-foreground hover:bg-accent/50 transition-colors duration-200'
            >
                <GoogleIcon className='mr-2 h-4 w-4 ' />
                Entrar com Google
            </button>
        </form>
    )
}