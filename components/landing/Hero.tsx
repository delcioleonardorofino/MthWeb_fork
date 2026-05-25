import CodeCard from './CodeCard'
import CTA from './CTA'
import Stats from './Stats'
import { FadeIn } from '../animations/fade-in'



export default function Hero(){
    return (
        <section className='relative pt-11 pb-20 overflow-hidden border-b border-border'>
            
            <div className='max-w-6xl mx-auto px-4 md:px-6'>

                <div className='flex flex-col lg:flex-row items-start gap-16'>
                    <FadeIn 
                    delay={0.1} 
                    className='flex flex-col lg:flex-row items-start gap-16'>
                    <CTA />
                    
                    <div className='flex flex-col md:pt-18 w-full max-w-xl lg:max-w-none'>
                        
                        <CodeCard />
                        <Stats /> 
                        
                    </div>
                    </FadeIn>

                </div>

            </div>

      </section>
    )
}