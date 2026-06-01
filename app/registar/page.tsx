'use client'

import { useState } from "react";
import { register } from "@/lib/auth";
import { useRouter } from "next/navigation";


export default function RegisterPage(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const router = useRouter();

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        await register(formData.name, formData.email, formData.password);

        router.push('/entrar');
    };

    return(
        <form onSubmit={handleSubmit}
        className='flex flex-col gap-2'>
            <input 
            placeholder='Name'
            type="text"
            onChange={(e)=>{
                setFormData({...formData, 
                    name : e.target.value})
            }}
            />
            <input 
            placeholder='Email'
            type="email"
            onChange={(e)=>{
                setFormData({...formData, 
                    email : e.target.value})
            }}
            />
            <input 
            placeholder='Password'
            type="password"
            onChange={(e)=>{
                setFormData({...formData, 
                    password : e.target.value})
            }}
            />

            <button
            type="submit"
            className='bg-foreground text-background rounded-xl'
            >
                criar
            </button>
        </form>
    )
}