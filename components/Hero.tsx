import CodeCard from './CodeCard'
import CTA from './CTA'
import Stats from './Stats'
import { FadeIn } from './animations/fade-in'



export default function Hero(){
    return (
        <section className='relative pt-24 pb-20 overflow-hidden border-b border-border'>
            
            <div className='max-w-6xl mx-auto px-4 md:px-6'>

                <div className='flex flex-col lg:flex-row items-start gap-16'>

                    <CTA />
                    
                    <div className='flex flex-col md:pt-18 w-full max-w-xl lg:max-w-none'>
                        <FadeIn delay={0.1}>
                            <CodeCard />
                            <Stats /> 
                        </FadeIn>
                        </div>
                    

                </div>

            </div>

      </section>
    )
}