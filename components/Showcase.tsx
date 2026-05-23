import Link from "next/link";
import {ArrowUpRight, Star, Users, GitCommit} from 'lucide-react';
import { FadeIn } from "./animations/fade-in";
import ShowCaseCard from "./ShowCaseCard";

const showcaseProjects = [
    {
    source: '/showcase-mech.png',
    area: 'Mecânica + Materiais',
    owner: 'raul',
    title: 'Turbinas-de-geração-de-energia',
    description: 'Microturbina eficiente para geração de energia através da cinética hídrica.',
    stats: [
        {icon: Star, content:'412'},
        {icon: Users, content:'8'},
        {icon: GitCommit, content:'6'},
    ],
    technologies: [
        {color: 'bg-blue-500', name: 'AutoCAD'},
        {color: 'bg-yellow-500', name: 'Bobinagem'},
    ] 
    },
    {
    source: '/showcase-civil.png',
    area: 'Civil + Estruturas',
    owner: 'sousa',
    title: 'Estruturas-resilientes',
    description: 'Concepção do plano estrutural de uma ponte resiliente à mudanças climáticas e intempéries.',
    stats: [
        {icon: Star, content:'97'},
        {icon: Users, content:'6'},
        {icon: GitCommit, content:'11'},
    ],
    technologies: [
        {color: 'bg-blue-500', name: 'AutoCAD'},
        {color: 'bg-yellow-500', name: 'HST'},
    ] 
    },
    {
    source: '/showcase-soft.png',
    area: 'Elétrica + Electrónica',
    owner: 'davide',
    title: 'Microwaves PCB',
    description: 'Placa eléctrica de um sistema para edge computing em redes de telefonia móvel.',
    stats: [
        {icon: Star, content:'1225'},
        {icon: Users, content:'2'},
        {icon: GitCommit, content:'93'},
    ],
    technologies: [
        {color: 'bg-blue-500', name: 'EasyEDA'},
        {color: 'bg-yellow-500', name: 'Proteus'},
    ] 
    },

]


export default function Showcase(){
    return(
      <section
        id='projectos'
      className="py-20 border-b border-border">

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
            {showcaseProjects.map((project) => (
                    <FadeIn 
                    key={project.title}
                    delay={0.1}>
                        <ShowCaseCard item={project} />
                    </FadeIn>
                ))}
        
        </div>
        </div>

      </section>  
    )
}