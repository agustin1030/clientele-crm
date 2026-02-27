import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Features } from './components/Features';
import { AutomationEngine } from './components/AutomationEngine';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize smooth scrolling with Lenis for a massive premium feel
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-vapor-void text-vapor-ghost min-h-screen selection:bg-vapor-plasma selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <AutomationEngine />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
