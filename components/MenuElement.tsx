'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

interface MenuItemProps {
  item: {
    pathname: string
    name: string
    icon: any
  }
}

export default function MenuItem({ item }: MenuItemProps) {
  const pathname = usePathname()
  const isActive = pathname === item.pathname
  const Icon = item.icon

  return (
    <Link
      href={item.pathname}
      className={`
        group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300
        ${isActive 
          ? "bg-teal-500/10 text-teal-500" 
          : "text-slate-400 hover:bg-slate-500/5 hover:text-slate-200"}
      `}
    >
      <Icon
        size={22}
        strokeWidth={isActive ? 2 : 1.5}
        className={`
          transition-all duration-300
          ${isActive ? "drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]" : "group-hover:text-slate-200"}
        `}
      />
      <span className={`text-sm font-medium tracking-wide ${isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100"}`}>
        {item.name}
      </span>
      
      {/* Indicador lateral sutil para o item ativo */}
      {isActive && (
        <div className="ml-auto h-5 w-1 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
      )}
    </Link>
  )
}
