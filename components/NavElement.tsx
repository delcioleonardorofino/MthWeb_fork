'use client'

import { IconType } from "react-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavElementProps {
    element: {
        id: number,
        icon: IconType,
        pathname: string,
        label: string
    }
}

export default function NavElement({ element }: NavElementProps) {
    const path = usePathname();
    const isActive = path === element.pathname;

    const Icon = element.icon;

    return (
        <Link
            href={element.pathname}
            className="
                group relative
                inline-flex flex-col items-center justify-center
                gap-1
                px-3 py-1
                outline-none
                min-w-[64px]
            "
        >
            <Icon
                size={24}
                strokeWidth={isActive ? 2.2 : 1.7}
                className={`
                    transition-all duration-300 ease-in-out
                    ${isActive
                        ? 'text-primary drop-shadow-[0_0_10px_rgba(20,184,166,0.5)] scale-110'
                        : 'text-foreground/60 hover:text-foreground'}
                `}
            />

            <span
                className={`
                    text-[11px] font-medium transition-all duration-300
                    ${isActive
                        ? 'text-primary'
                        : 'text-foreground/50 group-hover:text-foreground/80'}
                `}
            >
                {element.label}
            </span>

            <span className={`
                absolute -bottom-1
                w-1 h-1 rounded-full bg-primary
                transition-all duration-300
                ${isActive
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-0'}
            `} />
        </Link>
    )
}            />
            
            {/* Indicador visual minimalista (opcional) */}
            <span className={`
                absolute -bottom-1 w-1 h-1 rounded-full bg-primary transition-all duration-300
                ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
            `} />
        </Link>
    )
}
