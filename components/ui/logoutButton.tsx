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
            <button className="bg-background p-1.5 rounded-md text-muted-foreground self-center hover:text-foreground hover:bg-accent transition-colors">
                <LogOut size={24} height={8} width={8} />
            </button>
        </form>
    )
}