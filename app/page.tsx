import Presentation from '@/components/Presentation';
import Hero from '@/components/Hero';
import GlobalStats from '@/components/GlobalStats';
import { FadeIn } from '@/components/animations/fade-in';
import Showcase from '@/components/Showcase';
import Navbar from '@/components/navbar';


export default function LandingPage() {
  return (
    <>
    <Navbar />
    <main className="flex-1">
      
      <Hero />
      
      <GlobalStats />
      
      <FadeIn delay={0.1}>
        <Presentation />
      </FadeIn>

      <FadeIn delay={0.1}>
        <Showcase />
      </FadeIn>
      
    </main>
    </>
  );
}