import {Menu} from "lucide-react";
import MenuItem from "./MenuElement";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";

const menuItems = [
    {
        pathname: '/users',
        name: 'Users'
    },
    {
        pathname: '/latest',
        name: 'Latest'
    },
    {
        pathname: '/trending',
        name: 'Trending'
    },
    {
        pathname: '/about',
        name: 'About'
    },
]

export default function NavMenu() {
    return(
        <Sheet>
            <SheetTrigger>
                <Menu size={24} />
            </SheetTrigger>
            <SheetContent 
            side={"left"}
            className="bg-background/80 w-xs backdrop-blur-3xl
            before:absolute before:inset-0 before:bg-background/5 before:pointer-none border-r shadow-none">
                <SheetHeader className="hidden">
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>This action cannot be undone.</SheetDescription>
                </SheetHeader>

                <nav className="flex flex-col gap-2 items-center justify-center h-screen">
                    {menuItems.map(item => (
                        <MenuItem
                        key={item.name}
                        item = {item}/>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}