


export default function GlobalStats(){
    return (
        <section className='border-b border-border bg-card'>

          <div className='max-w-6xl mx-auto px-4 md:px-6'>

            <div className='grid grid-cols-2 md:grid-cols-4 items-center'>

              <div className='py-8 px-4 text-center border-r border-b md:border-b-none border-border'>
                <div className='text-2xl font-bold text-foreground mb-0.5'>
                  53+
                </div>
                <div className='text-xs text-muted-foreground'>
                  Colaborações 
                </div>
              </div>

              <div className='py-8 px-4 text-center md:border-r border-b md:border-b-none border-border'>
                <div className='text-2xl font-bold text-foreground mb-0.5'>
                  78+
                </div>
                <div className='text-xs text-muted-foreground'>
                  Enhenheiros especialistas
                </div>
              </div>

              <div className='py-8 px-4 text-center border-r border-b md:border-b-none border-border'>
                <div className='text-2xl font-bold text-foreground mb-0.5'>
                  27+
                </div>
                <div className='text-xs text-muted-foreground'>
                  Artigos
                </div>
              </div>

              <div className='py-8 px-4 text-center border-b md:border-b-none border-border'>
                <div className='text-2xl font-bold text-foreground mb-0.5'>
                  13+
                </div>
                <div className='text-xs text-muted-foreground'>
                  Eventos
                </div>
              </div>

            </div>

          </div>
          
      </section>
    )
}