'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ItemProps {
    item: {
        pathname: string,
        name: string
    }
}


export default function MenuItem({item} : ItemProps){

    const path = usePathname()

    return (
        <Link href={item.pathname} className={`block px-3 py-4 text-xl hover:bg-accent rounded-md cursor-pointer ${path === item.pathname ? 'bg-accent/60': 'bg-background'}`}>
            {item.name}
        </Link>
    )
}