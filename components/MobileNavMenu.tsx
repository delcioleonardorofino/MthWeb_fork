'use client'
import { useEffect, useState } from 'react'
import {
  LayoutGrid,
  HardHat,
  Layers,
} from 'lucide-react'

import NavElement from "./NavElement"
import { AvatarDropdown } from "./ui/profileBadge"

const elements = [
  {
    id: 1,
    icon: LayoutGrid,
    label: 'Home',
    pathname: '/home',
  },
  {
    id: 2,
    icon: Layers,
    label: 'Artigos',
    pathname: '/artigos',
  },
  {
    id: 3,
    icon: HardHat,
    label: 'Projetos',
    pathname: '/projectos',
  },
]

export default function MobileNavMenu() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scroll para baixo → esconde
        setVisible(false)
      } else {
        // scroll para cima → mostra
        setVisible(true)
      }

      lastScrollY = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`
        fixed bottom-0 left-0 z-50
        border-t border-border
        pt-1 px-4 pb-2
        flex justify-between items-center
        w-full gap-3
        md:hidden
        bg-background/80 backdrop-blur-md
        transition-transform duration-300
        ${visible ? 'translate-y-0' : 'translate-y-full'}
      `}
    >
      {elements.map((element) => (
        <NavElement
          key={element.id}
          element={element}
        />
      ))}

      <div
            
            className="
                group relative
                inline-flex flex-col items-center justify-center
                gap-1
                px-3 py-1
                outline-none
                min-w-[64px]
            "
        >
            
         <AvatarDropdown />
            <span
                className='text-[11px] font-medium transition-all duration-300 text-foreground/50 group-hover:text-foreground/80'
            >
                Perfil
            </span>

        </div>
      
    </nav>
  )
}
