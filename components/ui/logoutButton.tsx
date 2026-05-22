import { signOut } from '@/auth';
import { LogOut } from 'lucide-react';


async function logOut() {
    "use server"

    await signOut({
        redirectTo: '/'
    })
} 

export default function Logoutbutton () {
    return (
        <form action={logOut}>
            <button className="bg-accent p-1.5 rounded-md text-muted-foreground self-center hover:text-foreground hover:bg-muted transition-colors">
                    <LogOut size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
            </button>
        </form>
    )
}