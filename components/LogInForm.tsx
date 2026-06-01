
import { FaGithub as GitHubIcon } from 'react-icons/fa';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';
import Link from 'next/link';


export default function LogInForm (){
    return (
        <div
        className='space-y-4'>
            <Link
            href='http://127.0.0.1:8000/auth/login/github'
            className='w-full flex items-center justify-center gap-2 cursor-pointer py-3
            border border-border rounded-md text-sm font-medium text-foreground hover:bg-accent/50 transition-colors duration-200'
            >
                <GitHubIcon className='mr-2 h-4 w-4 ' />
                Entrar com GitHub
            </Link>
            <Link
            href='http://127.0.0.1:8000/auth/login/google'
            className='w-full flex items-center justify-center gap-2 cursor-pointer py-3
            border border-border rounded-md text-sm font-medium text-foreground hover:bg-accent/50 transition-colors duration-200'
            >
                <GoogleIcon className='mr-2 h-4 w-4 ' />
                Entrar com Google
            </Link>
        </div>
    )
}