'use client'

import { login } from "@/lib/auth";
import { Button } from "./ui/button";
import {useState} from 'react';
import {useRouter} from "next/navigation";
import Link from 'next/link';



export default function EmailLoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        console.log(email, password);
        e.preventDefault();
        try{
            await login(email, password);
            setEmail('');
            setPassword('');
            router.push('/home');
        }
        catch(error){
            console.error('Login failed:', error);
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-1 justify-between'>
                <div className='flex flex-col gap-1 p-2'>
                    <label htmlFor="email">Email</label> 
                    <input
                    className='border border-border rounded-md p-2' 
                    type="email" 
                    name='email' 
                    id='email'
                    onChange={(e) => {
                        return setEmail(e.target.value);
                    }}
                    />
                </div>
                <div className='flex flex-col gap-2 p-2'>
                    <label htmlFor="password">Password</label> 
                    <input 
                    className='border border-border rounded-md p-2'
                    type="password" 
                    name='password' 
                    id='password'
                    onChange={(e) => {
                        return setPassword(e.target.value);
                    }}
                    />

                <div className='flex items-center gap-1 text-sm'>
                   <p>Ainda nao tem conta?</p>
                   <Link 
                   href='/registar'
                   className='text-primary font-medium hover:underline'
                   >
                    Registar-se
                   </Link>  
                </div>
                
                </div>

                <div className='flex justify-center'>
                    <Button 
                type="submit"
                className='w-32 p-4 bg-foreground text-background rounded-md mt-4 inline-flex items-center justify-center gap-2 cursor-pointer py-3 border border-border hover:bg-accent/50 transition-colors duration-200'
                >
                    Entrar
                </Button>
                </div>
                
            </div>
            
        </form>
    )
}