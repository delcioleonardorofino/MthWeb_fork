import Link from "next/link"
import {ArrowUpRight, Star, Users, GitCommit} from 'lucide-react'
import Image from "next/image"
import { FadeIn } from "./animations/fade-in"


export default function Showcase(){
    return(
      <section className="py-20 border-b border-border">

        <div className="max-w-6xl flex justify-between mx-auto px-4 md:px-6">

            <div className="flex items-end justify-between mb-10">
                <div>
                    <h2 className="text-2xl font-mono font-bold text-foreground mb-2">
                        Construido no MtH
                    </h2>
                    <p className="text-muted-foreground text-sm">
                        Projectos multidisciplinares concebidos e executados por equipes que se conheceram na nossa plataforma.
                    </p>
                </div>
            </div>
            <Link href='/' className="hidden md:flex md items-center gap-1 text-sm text-primary hover:underline">
                Veja todos
                <ArrowUpRight size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
            </Link>

        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-6">

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <FadeIn delay={0.1}>
            <div className="group rounded-md border border-border bg-card hover:border-primary/40 transition-colors overflow-hidden cursor-pointer">
                <div className="aspect-video overflow-hidden relative bg-muted">
                    <Image 
                    src='/showcase-mech.png'
                    alt="project image"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-xs font-medium bg-background/90 rounded border border-border text-foreground">
                        Mecânica + Materiais
                    </span>
                </div>

                <div className='p-4'>
                    <div className='flex items-start justify-between gap-2 mb-2'>
                        <div>
                            <p className='text-xs text-muted-foreground'>
                                raul/
                            </p>
                            <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors font-mono truncate">
                                Turbinas-de-geração-de-energia
                            </h3>
                        </div>
                        <ArrowUpRight size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' 
                        className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1"/>
                    </div>

                    <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                        Microturbina eficiente para geração de energia através da cinética hídrica.
                    </p>
                    <div className='flex items-center justify-between text-xs text-muted-foreground'>
                        <div className='flex items-center gap-3'>
                            <span className="flex items-center gap-1">
                                <Star size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' 
                                className="h-3.5 w-3.5"/>
                                412
                            </span>
                            <span className="flex items-center gap-1">
                                <Users size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' 
                                className="h-3.5 w-3.5"/>
                                3
                            </span>
                            <span className="flex items-center gap-1">
                                <GitCommit size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' 
                                className="h-3.5 w-3.5"/>
                                6
                            </span>
                        </div>

                        <div className='flex items-center gap-1.5'>
                            <span className="flex items-center gap-1">
                                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                                <span>AutoCAD</span>
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
                                <span>Bobinagem</span>
                            </span>
                        </div>

                    </div>
                </div>

            </div>
            </FadeIn>
            <FadeIn delay={0.1}>
            <div className="group rounded-md border border-border bg-card hover:border-primary/40 transition-colors overflow-hidden cursor-pointer">
                <div className="aspect-video overflow-hidden relative bg-muted">
                    <Image 
                    src='/showcase-civil.png'
                    alt="project image"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-xs font-medium bg-background/90 rounded border border-border text-foreground">
                        Civil + Estruturas
                    </span>
                </div>

                <div className='p-4'>
                    <div className='flex items-start justify-between gap-2 mb-2'>
                        <div>
                            <p className='text-xs text-muted-foreground'>
                                sousa/
                            </p>
                            <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors font-mono truncate">
                               Estruturas-resilientes
                            </h3>
                        </div>
                        <ArrowUpRight size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' 
                        className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1"/>
                    </div>

                    <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                        Concepção do plano estrutural de uma ponte resiliente à mudanças climáticas e intempéries.
                    </p>
                    <div className='flex items-center justify-between text-xs text-muted-foreground'>
                        <div className='flex items-center gap-3'>
                            <span className="flex items-center gap-1">
                                <Star size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' 
                                className="h-3.5 w-3.5"/>
                                97
                            </span>
                            <span className="flex items-center gap-1">
                                <Users size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' 
                                className="h-3.5 w-3.5"/>
                                6
                            </span>
                            <span className="flex items-center gap-1">
                                <GitCommit size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' 
                                className="h-3.5 w-3.5"/>
                                11
                            </span>
                        </div>

                        <div className='flex items-center gap-1.5'>
                            <span className="flex items-center gap-1">
                                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                                <span>AutoCAD</span>
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
                                <span>HST</span>
                            </span>
                        </div>

                    </div>
                </div>

            </div>
            </FadeIn>

            <FadeIn delay={0.1}>
            <div className="group rounded-md border border-border bg-card hover:border-primary/40 transition-colors overflow-hidden cursor-pointer">
                <div className="aspect-video overflow-hidden relative bg-muted">
                    <Image 
                    src='/showcase-soft.png'
                    alt="project image"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-xs font-medium bg-background/90 rounded border border-border text-foreground">
                        Elétrica + Electrónica 
                    </span>
                </div>

                <div className='p-4'>
                    <div className='flex items-start justify-between gap-2 mb-2'>
                        <div>
                            <p className='text-xs text-muted-foreground'>
                                raul/
                            </p>
                            <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors font-mono truncate">
                                Turbinas-de-geração-de-energia
                            </h3>
                        </div>
                        <ArrowUpRight size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' 
                        className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1"/>
                    </div>

                    <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                        Placa eléctrica de um sistema para edge computing em redes de telefonia móvel.
                    </p>
                    <div className='flex items-center justify-between text-xs text-muted-foreground'>
                        <div className='flex items-center gap-3'>
                            <span className="flex items-center gap-1">
                                <Star size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' 
                                className="h-3.5 w-3.5"/>
                                1225
                            </span>
                            <span className="flex items-center gap-1">
                                <Users size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' 
                                className="h-3.5 w-3.5"/>
                                2
                            </span>
                            <span className="flex items-center gap-1">
                                <GitCommit size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' 
                                className="h-3.5 w-3.5"/>
                                93
                            </span>
                        </div>

                        <div className='flex items-center gap-1.5'>
                            <span className="flex items-center gap-1">
                                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                                <span>EasyEDA</span>
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
                                <span>Proteus</span>
                            </span>
                        </div>

                    </div>
                </div>

            </div>
            </FadeIn>

        </div>
        </div>

      </section>  
    )
}