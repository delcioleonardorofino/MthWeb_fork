
import {Network, Layers, BookOpen, Repeat2, Globe, Cpu} from 'lucide-react'


export default function Presentation (){
    return (
        <section className='py-20 border-b border-border'>
        <div className='max-w-6xl mx-auto px-4 md:px-6'>
          <div className='mb-12'>
            <h2 className='text-2xl font-bold text-foreground mb-3'>
              Projectado para criadores 
            </h2>
            <p className='text-muted-foreground max-w-2xl'>
              Nao e apenas mais uma rede social. O MTH fornece as ferramentas especializadas que uma colaboracao tecnica seria entre diferentes disciplinas realmente exige.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden border border-border'>

            <div className='bg-card p-6 hover-bg-accent/50 transition-colors group'>
              <div className='h-8 w-8 rounded-md bg-background border border-border flex-1 justify-center mb-4 group-hover:border-primary/40 transition-colors'>
                <Network size={20} fill='none' className='h-4 w-4 mx-auto my-1.5 self-center text-muted-foreground group-hover:text-primary transition-colors' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
              </div>
              <h3 className='text-sm font-semibold font-mono text-foreground mb-2'>
                Correspondencia entre disciplinas
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Conectamos voce com engenheiros cuja especializacao preenche as suas lacunas. Seu software precisa de Harware? Nos encontramos a pessoa certa.
              </p>
            </div>

            <div className='bg-card p-6 hover-bg-accent/50 transition-colors group'>
              <div className='h-8 w-8 rounded-md bg-background border border-border flex-1 justify-center mb-4 group-hover:border-primary/40 transition-colors'>
                <Layers size={20} fill='none' className='h-4 w-4 mx-auto my-1.5 self-center text-muted-foreground group-hover:text-primary transition-colors' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
              </div>
              <h3 className='text-sm font-semibold font-mono text-foreground mb-2'>
                Espaco para trabalhos tecnicos
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Ambiente criado especificamente para colaborar com engenheiros de diversas areas em projectos multidisciplinares.
              </p>
            </div>

            <div className='bg-card p-6 hover-bg-accent/50 transition-colors group'>
              <div className='h-8 w-8 rounded-md bg-background border border-border flex-1 justify-center mb-4 group-hover:border-primary/40 transition-colors'>
                <BookOpen size={20} fill='none' className='h-4 w-4 mx-auto my-1.5 self-center text-muted-foreground group-hover:text-primary transition-colors' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
              </div>
              <h3 className='text-sm font-semibold font-mono text-foreground mb-2'>
                Portfolios de projectos
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Apresente projectos multidisciplinares com documentacao rica, arquivos versionados e atribuicao adequada para toda equipe.
              </p>
            </div>

            <div className='bg-card p-6 hover-bg-accent/50 transition-colors group'>
              <div className='h-8 w-8 rounded-md bg-background border border-border flex-1 justify-center mb-4 group-hover:border-primary/40 transition-colors'>
                <Repeat2 size={20} fill='none' className='h-4 w-4 mx-auto my-1.5 self-center text-muted-foreground group-hover:text-primary transition-colors' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
              </div>
              <h3 className='text-sm font-semibold font-mono text-foreground mb-2'>
                Troca de expertise
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Troque conhecimento. Ajude um engenheiro mecanico com Python e receba orientacao sobre analise por elementos finitos em troca
              </p>
            </div>

            <div className='bg-card p-6 hover-bg-accent/50 transition-colors group'>
              <div className='h-8 w-8 rounded-md bg-background border border-border flex-1 justify-center mb-4 group-hover:border-primary/40 transition-colors'>
                <Globe size={20} fill='none' className='h-4 w-4 mx-auto my-1.5 self-center text-muted-foreground group-hover:text-primary transition-colors' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
              </div>
              <h3 className='text-sm font-semibold font-mono text-foreground mb-2'>
                Pool global de talentos
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Acesse uma rede nacional e mundial de engenheiros especializados. Quebre barreiras geograficas para montar a equipe.
              </p>
            </div>

            <div className='bg-card p-6 hover-bg-accent/50 transition-colors group'>
              <div className='h-8 w-8 rounded-md bg-background border border-border flex-1 justify-center mb-4 group-hover:border-primary/40 transition-colors'>
                <Cpu size={20} fill='none' className='h-4 w-4 mx-auto my-1.5 self-center text-muted-foreground group-hover:text-primary transition-colors' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
              </div>
              <h3 className='text-sm font-semibold font-mono text-foreground mb-2'>
                Integracao entre hardware e software
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Ferramentas e templates dedicados para desenvolvimento de IoT, robotica, sistemas ambientais e outros projectos que exigem colaboracao entre engenheiros.
              </p>
            </div>

            

          </div>
        </div>

      </section>
    )
}