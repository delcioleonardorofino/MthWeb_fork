export default function CodeCard(){
    return (
        <div className='rounded-md border border-border overflow-hidden bg-card shadow-md'>

            <div className='flex items-center gap-2 px-4 py-2.5 bg-muted border-b border-border'>

                <div className='flex gap-1.5'>
                    <div className='h-3 w-3 rounded-full bg-border'></div>
                    <div className='h-3 w-3 rounded-full bg-border'></div>
                    <div className='h-3 w-3 rounded-full bg-border'></div>
                </div>

                <span className='text-xs font-mono text-muted-foreground ml-1'>
                    config.mth
                </span>

            </div>

            <div className='p-5 font-mono text-sm font-medium leading-relaxed'>

                <div className='text-muted-foreground'>
                    ...// config.mth
                </div>

                <div className='text-foreground'>
                    mozTechHub = &#123;
                </div> 
                    
                <div className='pl-4 text-primary'> 
                    <span className='text-foreground'>
                        engenharias_de <span className='pr-1'>:</span>
                        {'['} 
                    </span>
                    {`"software", "mecânica"`},
                </div>
                
                <div className='text-foreground pl-10'>
                    <span className='text-primary'>
                        {`"eléctica", "Eletrónica", "Civíl", "Química", "Ambiente", ...outras'`}
                    </span>
                    {"]"},
                </div>

                <span className='p-4'>
                    colaborações =
                </span> 
                <span className='text-blue-400'>
                    true
                </span>, <br/>
                <span className='p-4'>
                    openSource =
                </span> 
                <span className='text-blue-400'>
                    true
                </span> <br />
                &#125;
            </div>
        </div>
    )
}