import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import {Moon} from 'lucide-react'

export default function Navbar() {
    return(
        <header className="fixed top-0 w-full z-50 border-b bg-background">
            <div className='max-w-6xl mx-auto px-4 md:px-6'>

                <div className="flex items-center justify-between h-14">

                    <Link href="/" className="flex gap-2 items-center text-sm">
                        <Image src="/MtH.PNG" alt="Mozambique Tech Hub Logo" width={32} height={32} className="mb-1" />
                        <div className="flex flex-col leading-none font-mono">
                            <span className="font-bold text-primary ">Mozambique</span>
                            <span className="font-bold">Tech Hub</span>
                        </div>
                    </Link>

                    <div className="hidden md:flex gap-4 items-center align-center">
                        <nav className='flex gap-1 px-4 py-2 transition-colors text-muted-foreground'>
                            <Link href="/" className="px-3 py-1.5 text-sm hover:bg-accent-foreground/10 rounded-md">
                                Features
                            </Link>
                            <Link href="/" className="px-3 py-1.5 text-sm hover:bg-accent-foreground/10 rounded-md">
                                Cursos
                            </Link>
                            <Link href="/" className="px-3 py-1.5 text-sm hover:bg-accent-foreground/10 rounded-md">
                                Comunidade
                            </Link>
                            <Link href="/" className="px-3 py-1.5 text-sm hover:bg-accent-foreground/10 rounded-md">
                                Sobre
                            </Link>
                        </nav>

                        <div className="w-px h-4 bg-border mx-2"></div>

                        <Button className="bg-background p-1.5 rounded-md text-muted-foreground self-center hover:text-foreground hover:bg-accent transition-colors">
                            <Moon height={4} width={4} />
                        </Button>
                        <Link href='/' className="ml-1 px-3 py-1.5 text-sm font-semibold bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
                            Juntar-se
                        </Link>
                        <Link href='/' className="px-3 py-1.5 text-sm font-medium text-foreground border border-border rounded-md hover:bg-accent transition-colors">
                            Entrar
                        </Link>
                        
                        
                    </div>
                </div>
                
            </div>
        </header>
    )
}