import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Workflow, Sparkles, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function AutomationEngine() {
    const containerRef = useRef<HTMLDivElement>(null);
    const path1Ref = useRef<SVGPathElement>(null);
    const path2Ref = useRef<SVGPathElement>(null);
    const path3Ref = useRef<SVGPathElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Glow and pulse effects for nodes
            gsap.to('.node-glow', {
                opacity: 0.8,
                scale: 1.2,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut',
                stagger: 0.5
            });

            // SVG Line stroke animation
            const paths = [path1Ref.current, path2Ref.current, path3Ref.current];
            paths.forEach((path) => {
                if (!path) return;
                const length = path.getTotalLength();
                gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

                gsap.to(path, {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                    },
                    strokeDashoffset: 0,
                    duration: 2,
                    ease: "power2.inOut",
                });

                // Flowing particles along the path
                gsap.to(path, {
                    strokeDasharray: "10, " + (length - 10),
                    strokeDashoffset: -length,
                    duration: 3,
                    repeat: -1,
                    ease: "linear",
                    delay: 2
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="integrations" ref={containerRef} className="py-32 relative overflow-hidden bg-vapor-void">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-white">
                        El motor de <span className="text-transparent bg-clip-text bg-gradient-to-r from-vapor-plasma to-white font-serif italic">automatización</span>
                    </h2>
                    <p className="text-xl text-vapor-ghost/60 max-w-2xl mx-auto font-light">
                        Conecta tus herramientas, define las reglas, y deja que nuestra IA opere tu negocio 24/7.
                    </p>
                </div>

                <div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center">

                    {/* Central AI Node */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="relative w-24 h-24 rounded-2xl bg-vapor-graphite border border-vapor-plasma/50 flex items-center justify-center shadow-[0_0_50px_rgba(123,97,255,0.4)] backdrop-blur-xl">
                            <div className="absolute inset-0 bg-vapor-plasma/20 blur-xl node-glow" />
                            <Sparkles className="w-10 h-10 text-vapor-plasma" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-mono text-vapor-plasma/80 uppercase tracking-widest whitespace-nowrap">Core Engine</div>
                    </div>

                    {/* Source Node - Data */}
                    <div className="absolute left-[10%] top-1/4 -translate-y-1/2 z-10">
                        <div className="relative w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                            <div className="absolute inset-0 bg-white/10 blur-lg node-glow" />
                            <Database className="w-6 h-6 text-vapor-ghost" />
                        </div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-vapor-ghost/50 uppercase tracking-wider">CRM Data</div>
                    </div>

                    {/* Source Node - Triggers */}
                    <div className="absolute left-[10%] top-3/4 -translate-y-1/2 z-10">
                        <div className="relative w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                            <div className="absolute inset-0 bg-white/10 blur-lg node-glow" />
                            <Workflow className="w-6 h-6 text-vapor-ghost" />
                        </div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-vapor-ghost/50 uppercase tracking-wider">Triggers</div>
                    </div>

                    {/* Action Node - Output */}
                    <div className="absolute right-[10%] top-1/2 -translate-y-1/2 z-10">
                        <div className="relative w-20 h-20 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md hover:border-vapor-plasma/50 transition-colors">
                            <div className="absolute inset-0 bg-white/10 blur-lg node-glow" />
                            <Send className="w-8 h-8 text-vapor-ghost" />
                        </div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-vapor-ghost/50 uppercase tracking-wider whitespace-nowrap">Action Execute</div>
                    </div>

                    {/* SVG Connections */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                        {/* From Data to Core */}
                        <path
                            ref={path1Ref}
                            d="M 15% 25% C 30% 25%, 35% 50%, 50% 50%"
                            fill="none"
                            stroke="url(#lineGrad1)"
                            strokeWidth="2"
                            className="opacity-50"
                        />
                        {/* From Triggers to Core */}
                        <path
                            ref={path2Ref}
                            d="M 15% 75% C 30% 75%, 35% 50%, 50% 50%"
                            fill="none"
                            stroke="url(#lineGrad1)"
                            strokeWidth="2"
                            className="opacity-50"
                        />
                        {/* From Core to Output */}
                        <path
                            ref={path3Ref}
                            d="M 50% 50% C 70% 50%, 75% 50%, 90% 50%"
                            fill="none"
                            stroke="url(#lineGrad2)"
                            strokeWidth="3"
                            className="opacity-80"
                        />

                        <defs>
                            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#F0EFF4" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.8" />
                            </linearGradient>
                            <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#7B61FF" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#F0EFF4" stopOpacity="0.2" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>
            </div>
        </section>
    );
}
