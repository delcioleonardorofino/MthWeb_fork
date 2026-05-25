import Link from 'next/link'
import {ArrowRight, Users, DraftingCompass, Lightbulb, GraduationCap} from 'lucide-react'
// import { FadeIn } from './animations/fade-in'


export default function CTA(){
    return (
        <div className='flex flex-col min-w-0 w-full max-w-full overflow-hidden'>
            
            <div className='inline-flex self-start items-center gap-2 px-2.5 py-1 text-xs font-medium border border-border rounded-full text-muted-foreground mb-6 bg-card'>
                <span className='flex h-1.5 w-1.5 rounded-full bg-primary'></span>
                Versão Beta
            </div>

          {/* Ajustado o tamanho inicial para text-3xl e removido o <br /> forçado */}
            <h1 className='text-3xl sm:text-5xl lg:text-[3.5rem] font-bold font-mono leading-[1.15] tracking-tight text-foreground mb-5 wrap-break-words'>
                Onde Engenheiros <span className='text-primary block sm:inline'>se conectam.</span> 
            </h1>

            <p className='text-base sm:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed'>
                Criamos o primeiro ecossistema integrado onde especialistas de todas as disciplinas coexistem, colaboram e entregam soluções de alto impacto em uma única tela.
            </p>

            <div className='flex flex-col sm:flex-row gap-3 mb-10'>
                <Link href='/' className='inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary font-semibold text-primary-foreground rounded-md hover:opacity-90 transition-opacity'>
                    Comece a colaborar
                    <ArrowRight size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
                </Link>
                <Link href='/' className='inline-flex items-center justify-center gap-2 px-5 py-2.5 text-foreground rounded-md hover:bg-accent transition-colors bg-background border border-border font-semibold'>
                    Explorar projectos
                </Link>
            </div>

            {/* Correção do Rodapé: flex-wrap aplicado diretamente no grupo de itens e gap responsivo */}
            <div className='flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-muted-foreground w-full'>
                <div className='flex items-center gap-1 min-w-max'>
                    <Users size={20} fill='none' className='text-blue-400' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
                    <span className='font-medium text-muted-foreground'>1.3k</span> membros
                </div>
    
                <div className='flex items-center gap-1 min-w-max'>
                    <DraftingCompass size={20} fill='none' stroke='orange' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
                    <span className='font-medium text-muted-foreground'>78</span> projectos
                </div>

                <div className='flex items-center gap-1 min-w-max'>
                    <Lightbulb size={20} fill='none' stroke='yellow' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
                    <span className='font-medium text-muted-foreground'>211</span> solucões
                </div>
    
                <div className='flex items-center gap-1 min-w-max'>
                    <GraduationCap size={20} fill='none' className='text-foreground' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
                    <span className='font-medium text-muted-foreground'>4</span> formações
                </div>
            </div>

        </div>
    )
}