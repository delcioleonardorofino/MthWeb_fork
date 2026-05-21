"use client";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import { Button } from "./button";


export function ThemeToggler() {
    const {theme, setTheme} = useTheme();


    return(
        <Button 
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="bg-background p-1.5 rounded-md text-muted-foreground self-center hover:text-foreground hover:bg-accent transition-colors">
            {
                theme === 'light' ? <Sun height={8} width={8} /> : <Moon height={8} width={8} />
            }
        </Button>
    )

}