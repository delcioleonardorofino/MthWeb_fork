'use client'
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavElementProps {
    element: {id:number,
    icon: IconType,
    pathname: string}
}

export default function NavElement({element} : NavElementProps){
    
    const path = usePathname()

    return (
        <Link
        href={element.pathname}
        className='inline-flex flex-col cursor-pointer items-center justify-center px-5 rounded-lg'>
            <element.icon
            size={32}
            className={`${path===element.pathname ? 'text-primary' : 'bg-background text-muted'}`} />
        </Link>
    )
}