import { useEffect, useRef } from 'react';
import { Button } from './ui/Button';
import { Activity } from 'lucide-react';
import gsap from 'gsap';

export function Navbar() {
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(navRef.current, {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            });
        }, navRef);
        return () => ctx.revert();
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-50 bg-vapor-void/80 backdrop-blur-md border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3 text-vapor-ghost hover:text-white transition-colors cursor-pointer group">
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-vapor-graphite border border-white/10 group-hover:border-vapor-plasma/50 transition-colors">
                        <Activity className="w-5 h-5 text-vapor-plasma drop-shadow-[0_0_8px_rgba(123,97,255,0.8)]" />
                    </div>
                    <span className="font-sans font-bold text-xl tracking-tight">Clientele.</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#product" className="text-sm font-medium text-vapor-ghost/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Platform</a>
                    <a href="#features" className="text-sm font-medium text-vapor-ghost/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Features</a>
                    <a href="#integrations" className="text-sm font-medium text-vapor-ghost/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Integrations</a>
                    <a href="#pricing" className="text-sm font-medium text-vapor-ghost/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Pricing</a>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="hidden sm:inline-flex font-mono text-xs uppercase tracking-wider text-vapor-ghost/80">
                        Log in
                    </Button>
                    <Button variant="primary" size="sm" className="font-sans font-semibold">
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}
