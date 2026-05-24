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
    pathname: '/home',
  },
  {
    id: 2,
    icon: Layers,
    pathname: '/artigos',
  },
  {
    id: 3,
    icon: HardHat,
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
        pt-2 px-4 pb-4
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

      <AvatarDropdown />
    </nav>
  )
}
