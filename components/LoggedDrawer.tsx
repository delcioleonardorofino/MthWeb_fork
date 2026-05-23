'use client'

import { 
  Menu, 
  Users, 
  Zap, 
  TrendingUp, 
  Info, 
  Settings, 
  LogOut 
} from "lucide-react"
import MenuItem from "./MenuElement"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const menuItems = [
  { pathname: '/users', name: 'Engenheiros', icon: Users },
  { pathname: '/latest', name: 'Recentes', icon: Zap },
  { pathname: '/trending', name: 'Tendências', icon: TrendingUp },
  { pathname: '/about', name: 'Sobre', icon: Info },
]

export default function NavMenu() {
  return (
    <Sheet>
      <SheetTrigger className="p-2 transition-colors hover:bg-slate-500/10 rounded-lg">
        <Menu size={24} strokeWidth={1.5} className="text-slate-200" />
      </SheetTrigger>
      
      <SheetContent 
        side="left"
        className="flex flex-col bg-background/90 w-[280px] backdrop-blur-2xl border-r border-white/5 p-0 shadow-2xl"
      >
        {/* Acessibilidade: Obrigatório para o componente Sheet */}
        <SheetHeader className="p-6 pb-2">
          <SheetTitle className="text-left text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            M-Hub <span className="text-teal-500">Conexões</span>
          </SheetTitle>
        </SheetHeader>

        {/* Links de Navegação Principal */}
        <nav className="flex flex-col gap-1 px-3 mt-4">
          {menuItems.map((item) => (
            <MenuItem key={item.pathname} item={item} />
          ))}
        </nav>

        {/* Footer do Menu: Definições e Logout */}
        <div className="mt-auto border-t border-white/5 p-3 mb-pb-safe">
          <MenuItem 
            item={{ pathname: '/settings', name: 'Configurações', icon: Settings }} 
          />
          <button className="flex w-full items-center gap-4 px-4 py-3 text-slate-400 hover:text-red-400 transition-colors rounded-xl hover:bg-red-500/5">
            <LogOut size={22} strokeWidth={1.5} />
            <span className="text-sm font-medium">Sair</span>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
