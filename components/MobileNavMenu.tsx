'use client'
import { LuBoxes, LuCircleUserRound, LuHouse, LuLayers } from "react-icons/lu"
import NavElement from "./NavElement";
import { AvatarDropdown } from "./ui/profileBadge";

const elements = [
    {id:1,
    icon: LuHouse,
    pathname: '/home',},

    {id:2,
    icon: LuLayers,
    pathname: '/artigos'},

    {id:3,
    icon: LuBoxes,
    pathname: '/projectos',},
]


export default function MobileNavMenu(){
    return(
        <nav 
        className='fixed bottom-0 left-0 z-50 border-t border-border pt-2 px-4 flex justify-between w-full gap-3 pb-5 align-center items-center md:hidden'>
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