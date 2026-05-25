
import {ArrowUpRight} from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import Image from "next/image";

type Technology = {
    name: string;
    color: string
}

type Stat = {
    content: string;
    icon: LucideIcon
}
type showCaseProps = {
    item : {source: string;
    area: string;
    owner: string;
    title: string;
    description: string;
    stats: Stat[];
    technologies: Technology[]}
}


export default function ShowCaseCard ({item}: showCaseProps){

    return (
        <div 
            className="group rounded-md border border-border bg-card hover:border-primary/40           transition-colors overflow-hidden cursor-pointer">
                <div className="aspect-video overflow-hidden relative bg-muted">
                    <Image 
                    src={item.source}
                    alt="project image"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-xs font-medium bg-background/90 rounded border border-border text-foreground">
                        {item.area}
                    </span>
                </div>

                <div className='p-4'>
                    <div className='flex items-start justify-between gap-2 mb-2'>
                        <div>
                            <p className='text-xs text-muted-foreground'>
                                {item.owner}
                            </p>
                            <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors font-mono truncate">
                               {item.title}
                            </h3>
                        </div>
                        <ArrowUpRight size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' 
                        className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1"/>
                    </div>

                    <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                        {item.description}
                    </p>
                    <div className='flex items-center justify-between text-xs text-muted-foreground'>
                        <div className='flex items-center gap-3'>
                            {
                                item.stats.map((stat) => {
                                    return <span 
                                    key={stat.content}
                                    className="flex items-center gap-1">
                                    <stat.icon size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' 
                                    className="h-3.5 w-3.5"/>
                                    {stat.content}
                                    </span>
                                }
                                )
                            }
                            
                        </div>

                        <div className='flex items-center gap-1.5'>
                            {
                                item.technologies.map((technology) => (
                                    <span
                                    key={technology.name}
                                    className="flex items-center gap-1">
                                        <span className={`h-2.5 w-2.5 rounded-full ${technology.color}`}>
                                        </span>
                                            <span>{technology.name}</span>
                                    </span>
                                ))
                            }
                        
                        </div>

                    </div>
                </div>
        </div>
    )
}