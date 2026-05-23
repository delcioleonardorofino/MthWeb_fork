'use client'
import { 
  LayoutGrid,   // Para a Home/Feed (parece um blueprint/grelha)
  HardHat,      // Para Projetos/Obras (muito específico para engenharia)
  Layers,       // O que já tens, mas na versão Lucide é mais fina
  Cpu,          // Para engenharia eletrotécnica/automação
  Users,        // Para a rede de conexões
  Search        // Para procurar engenheiros ou vagas
} from 'lucide-react'
import NavElement from "./NavElement";
import { AvatarDropdown } from "./ui/profileBadge";

const elements = [
    {id:1,
    icon: LayoutGrid,
    pathname: '/home',},

    {id:2,
    icon: Layers,
    pathname: '/artigos'},

    {id:3,
    icon: HardHat,
    pathname: '/projectos',},
]


export default function MobileNavMenu(){
    return(
        <nav 
        className='fixed bottom-0 left-0 z-50 border-t border-border pt-2 px-4 flex justify-between w-full gap-3 pb-pb-safe align-center items-center md:hidden'>
            {elements.map(element => (
                    <NavElement
                    key={element.id}
                    element={element}/>
                )
            )}
            <AvatarDropdown />
        </nav>
    )
}
