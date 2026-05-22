import {Menu} from "lucide-react";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import Link from "next/link";

export default function NavMenu() {
    return(
        <Sheet>
            <SheetTrigger>
                <Menu size={32} />
            </SheetTrigger>
            <SheetContent 
            side={"left"}
            className="bg-background/80 w-sm  max-w-3xl backdrop-blur-3xl
            before:absolute before:inset-0 before:bg-background/5 before:pointer-none border-r shadow-none">
                <SheetHeader className="hidden">
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>This action cannot be undone.</SheetDescription>
                </SheetHeader>

                <nav className="flex flex-col gap-2 items-center justify-center h-screen">
                    <Link href="/" className="block px-3 py-4 text-xl hover:bg-accent rounded-md cursor-pointer">
                        Features
                    </Link>
                    <Link href="/" className="block px-3 py-4 text-xl hover:bg-accent rounded-md cursor-pointer">
                        Cursos
                    </Link>
                    <Link href="/" className="block px-3 py-4 text-xl hover:bg-accent rounded-md cursor-pointer">
                        Comunidade
                    </Link>
                    <Link href="/home" className="block px-3 py-4 text-xl hover:bg-accent rounded-md cursor-pointer">
                        Sobre
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    )
}