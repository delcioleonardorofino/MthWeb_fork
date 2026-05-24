'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

const menuItems = [
  { pathname: "/users", name: "Users" },
  { pathname: "/latest", name: "Latest" },
  { pathname: "/trending", name: "Trending" },
  { pathname: "/about", name: "About" },
]

function SidebarItems({ pathname }: any) {
  return (
    <nav className="flex flex-col gap-1 p-4">
      {menuItems.map((item) => {
        const isActive =
          pathname === item.pathname ||
          pathname.startsWith(item.pathname + "/")

        return (
          <SheetClose asChild key={item.name}>
            <Link
              href={item.pathname}
              className="relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium"
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-teal-500/10 rounded-xl"
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                />
              )}

              <span
                className={`relative z-10 transition-colors ${
                  isActive
                    ? "text-teal-500"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {item.name}
              </span>

              {isActive && (
                <motion.div
                  layoutId="active-bar"
                  className="ml-auto h-5 w-1 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.8)]"
                />
              )}
            </Link>
          </SheetClose>
        )
      })}
    </nav>
  )
}

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 rounded-lg hover:bg-slate-500/10 transition">
              <Menu size={22} />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-72 bg-background/80 backdrop-blur-2xl border-r"
          >
            <SidebarItems pathname={pathname} />
          </SheetContent>
        </Sheet>
      </div>

      {/* DESKTOP */}
      <aside className="hidden md:flex flex-col w-64 h-screen border-r bg-background/60 backdrop-blur-xl">
        <div className="p-4 text-sm text-slate-400 font-semibold">
          Navigation
        </div>

        <SidebarItems pathname={pathname} />
      </aside>
    </>
  )
}
