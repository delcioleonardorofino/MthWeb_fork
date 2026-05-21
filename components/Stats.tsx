

export default function Stats (){
    return (
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
    )
}