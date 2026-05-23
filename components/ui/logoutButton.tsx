'use client';
import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

export default function Logoutbutton () {
    return (

            <button 
            onClick={() => signOut({callbackUrl:'/'}) }
            className="bg-background p-1.5 rounded-md text-muted-foreground self-center hover:text-foreground hover:bg-accent transition-colors">
                <LogOut size={18}  />
            </button>
        
    )
}
