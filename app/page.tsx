import React from 'react';
import Link from 'next/link'
import {ArrowRight, Users, DraftingCompass, Lightbulb, GraduationCap, Network, Layers, BookOpen, Repeat2, Globe, Cpu} from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="flex-1">
      {/* Navbar */}
      <section className='relative pt-24 pb-20 overflow-hidden border-b border-border'>
        <div className='max-w-6xl mx-auto px-4 md:px-6'>

          <div className='flex flex-col lg:flex-row items-start gap-16'>
            <div className='flex-1 min-w-0'>
              
                <div className='inline-flex items-center gap-2 px-2.5 py-1 text-xs font-medium border border-border rounded-full text-muted-foreground mb-6 bg-card'>
                  <span className='flex h-1.5 w-1.5 rounded-full bg-primary'>
                  </span>
                  Versão Beta
                </div>

                <h1 className='text-4xl sm:text-5xl lg:text-[3.5rem] font-bold font-mono leading-[1.15] tracking-tight text-foreground mb-5'>Onde Engenheiros <br /> 
                <span className='text-primary'> se conectam. </span> 
                </h1>

                <p className='text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed'>
                  Criamos o primeiro ecossistema integrado onde especialistas de todas as disciplinas coexistem, colaboram e entregam soluções de alto impacto em uma única tela.
                </p>

                <div className='flex flex-col sm:flex-row gap-3 mb-10'>
                  <Link href='/' className='inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary  font-semibold text-primary-foreground rounded-md hover:opacity-90 transition opacity'>
                    Comece a colaborar
                    <ArrowRight size={20} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
                  </Link>
                  <Link href='/' className='inline-flex items-center justify-center gap-2 px-5 py-2.5 text-foreground rounded-md hover:bg-accent transition-colors bg-background border border-border font-semibold'>
                    Explorar projectos
                  </Link>

                </div>

                <div className='flex flex-wrap items-center text-sm text-muted-foreground'>
                  <div className='flex items-center gap-4'>
                    <div className='flex gap-1'>
                      <Users size={20} fill='none' className='text-blue-400' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
                      <span className='font-medium text-muted-foreground'>
                      1.3k 
                      </span>
                      membros
                    </div>
                    
                    <div className='flex items-center gap-1'>
                    <DraftingCompass size={20} fill='none' stroke='orange' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
                    <span className='font-medium text-muted-foreground'>
                      78 
                    </span>
                    projectos
                    </div>

                    <div className='flex items-center gap-1'>
                    <Lightbulb size={20} fill='none' stroke='yellow' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
                    <span className='font-medium text-muted-foreground'>
                      211 
                    </span>
                    solucoes
                    </div>
                    
                    <div className='flex items-center gap-1'>
                    <GraduationCap size={20} fill='none' className='text-foreground' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' />
                    <span className='font-medium text-muted-foreground'>
                      4 
                    </span>
                    formacoes
                    </div>
                </div>
              </div>
            </div>
            

            <div className='flex-1 w-full max-w-xl lg:max-w-none'>
                <div className='rounded-md border border-border overflow-hidden bg-card shadow-md'>
                  <div className='flex items-center gap-2 px-4 py-2.5 bg-muted border-b border-border'>
                    <div className='flex gap-1.5'>
                      <div className='h-3 w-3 rounded-full bg-border'></div>
                      <div className='h-3 w-3 rounded-full bg-border'></div>
                      <div className='h-3 w-3 rounded-full bg-border'></div>
                    </div>

                    <span className='text-xs font-mono text-muted-foreground ml-1'>config.mth</span>
                  </div>

                  <div className='p-5 font-mono text-sm font-medium leading-relaxed'>
                    <div className='text-muted-foreground'>
                      ...// config.mth
                    </div>
                    <div className='text-foreground'>
                      mozTechHub = &#123;</div> 
                      <div className='pl-4 text-primary'> 
                        <span className='text-foreground'>
                          engenharias_de <span className='pr-1'>:</span>
                          {'['} 
                        </span>
                        {`"software", "mecanica"`},</div>
                      <div className='text-foreground pl-10'>
                        <span className='text-primary'>
                        {`"electica", "Eletronica", "Civil", "Quimica", "Ambiente", ...outras'`}</span>
                      {"]"},
                      </div>
                      <span className='p-4'>colaboracoes =</span> <span className='text-blue-400'>true</span>, <br/>
                      <span className='p-4'>openSource =</span> <span className='text-blue-400'>true</span> <br />
                      &#125;
                    </div>
                  </div>

                  <div className='mt-3 grid grid-cols-2 gap-3'>
                    <div className='rounded-md border border-border bg-card p-4'>
                      <div className='text-2xl font-bold text-foreground mb-0.5'>
                        0.273k+
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        Engenheiros relacionados
                      </div>
                    </div>

                    <div className='rounded-md border border-border bg-card p-4'>
                      <div className='text-2xl font-bold text-foreground mb-0.5'>
                        53+
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        Colaboracoes
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
      </section>
      <section className='border-b border-border bg-card'>
          <div className='max-w-6xl mx-auto px-4 md:px-6'>
            <div className='grid grid-cols-2 md:grid-cols-4 items-center'>
              <div className='py-8 px-4 text-center border-r border-b md:border-b-none border-border'>
                <div className='text-2xl font-bold text-foreground mb-0.5'>
                  53+
                </div>
                <div className='text-xs text-muted-foreground'>
                  Colaboracoes
                </div>
              </div>
              <div className='py-8 px-4 text-center md:border-r border-b md:border-b-none border-border'>
                <div className='text-2xl font-bold text-foreground mb-0.5'>
                  53+
                </div>
                <div className='text-xs text-muted-foreground'>
                  Colaboracoes
                </div>
              </div>
              <div className='py-8 px-4 text-center border-r border-b md:border-b-none border-border'>
                <div className='text-2xl font-bold text-foreground mb-0.5'>
                  53+
                </div>
                <div className='text-xs text-muted-foreground'>
                  Colaboracoes
                </div>
              </div>
              <div className='py-8 px-4 text-center border-b md:border-b-none border-border'>
                <div className='text-2xl font-bold text-foreground mb-0.5'>
                  53+
                </div>
                <div className='text-xs text-muted-foreground'>
                  Colaboracoes
                </div>
              </div>
            </div>
          </div>
      </section>

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
    </main>
  );
}