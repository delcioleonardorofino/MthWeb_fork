'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"

interface SidebarProps {
  pathname: string;
  onNavigate?: () => void;
}

const menuItems = [
  { pathname: "/users", name: "Users" },
  { pathname: "/latest", name: "Latest" },
  { pathname: "/trending", name: "Trending" },
  { pathname: "/about", name: "About" },
]

function SidebarItems({ pathname, onNavigate } : SidebarProps) {
  return (
    <nav className="flex flex-col gap-2 p-4">
      {menuItems.map((item) => {
        const isActive =
          pathname === item.pathname ||
          pathname.startsWith(item.pathname + "/")

        return (
          <Link
            key={item.name}
            href={item.pathname}
            onClick={onNavigate}
            className="relative flex items-center gap-3 px-4 py-5 rounded-xl text-sm font-medium transition-colors"
          >
            {/* ACTIVE BACKGROUND */}
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-teal-500/10 rounded-xl"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 40,
                }}
              />
            )}

            <span
              className={`relative z-10 transition-colors text-lg ${
                isActive
                  ? "text-teal-500"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {item.name}
            </span>

            {/* ACTIVE BAR */}
            {isActive && (
              <motion.div
                layoutId="active-bar"
                className="ml-auto h-5 w-1 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.8)]"
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
}

export default function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const handleNavigate = () => {
    setOpen(false)
  }

  return (
    <>
      <div className="">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="flex-inline justify-center align-center self-center p-2 rounded-lg hover:bg-slate-500/10 transition">
              <Menu size={22} />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-xs bg-background/80 backdrop-blur-2xl border-r h-full"
            aria-describedby='Menu Drawer'
          >
            <SheetHeader>
                <SheetTitle className="flex-inline text-center text-md font-semibold">
                    Menu
                </SheetTitle>
            </SheetHeader>
            <SidebarItems
              pathname={pathname}
              onNavigate={handleNavigate}
            />
          </SheetContent>
        </Sheet>
      </div>


    </>
  )
}
