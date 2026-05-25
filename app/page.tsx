import Presentation from '@/components/landing/Presentation';
import Hero from '@/components/landing/Hero';
import GlobalStats from '@/components/landing/GlobalStats';
import { FadeIn } from '@/components/animations/fade-in';
import Showcase from '@/components/landing/Showcase';
import Navbar from '@/components/landing/navbar';
import Community from '@/components/landing/Community';
import BottomCTA from '@/components/landing/BottomCTA';
import Footer from '@/components/landing/Footer';


export default function LandingPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground overflow-hidden">
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

      <FadeIn delay={0.1}>
        <Community />
      </FadeIn>

      <BottomCTA />
    </main>
    <Footer />
    </div>
  );
}