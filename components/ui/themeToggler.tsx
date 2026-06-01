"use client";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "./button";


export function ThemeToggler() {

    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="h-8 w-8" />
    }
    return(
        <Button 
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="bg-card p-1.5 rounded-2xl text-muted-foreground self-center hover:text-foreground hover:bg-muted transition-colors">
            {
                theme === 'light' ? <Sun size={36} /> : <Moon size={36} />
            }
        </Button>
    )

}