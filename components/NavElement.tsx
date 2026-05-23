'use client'
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavElementProps {
    element: {
        id: number,
        icon: IconType,
        pathname: string
    }
}

export default function NavElement({ element }: NavElementProps) {
    const path = usePathname();
    const isActive = path === element.pathname;

    // Atribuir a uma variável com letra Maiúscula para o React reconhecer como componente
    const Icon = element.icon;

    return (
        <Link
            href={element.pathname}
            className="group relative inline-flex flex-col items-center justify-center px-5 outline-none"
        >
            <Icon
                // Reduzi para 26 porque 32 em mobile costuma ser desproporcional
                size={26}
                // Aplica o strokeWidth maior quando ativo para dar "peso"
                strokeWidth={isActive ? 2 : 1.5}
                className={`
                    transition-all duration-300 ease-in-out
                    ${isActive 
                        ? 'text-primary drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]' 
                        : 'text-foreground/60 hover:text-foreground'}
                `} 
            />
            
            {/* Indicador visual minimalista (opcional) */}
            <span className={`
                absolute -bottom-1 w-1 h-1 rounded-full bg-primary transition-all duration-300
                ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
            `} />
        </Link>
    )
}
