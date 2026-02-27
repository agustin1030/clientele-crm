import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/Button';
import { ArrowRight, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const mockupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animation
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from(titleRef.current?.children || [], {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                delay: 0.2
            })
                .from(descRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 0.8
                }, "-=0.6")
                .from(buttonsRef.current?.children || [], {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1
                }, "-=0.4")
                .from(mockupRef.current, {
                    y: 100,
                    opacity: 0,
                    rotationX: 30,
                    transformPerspective: 1000,
                    duration: 1.5,
                    ease: 'power3.out'
                }, "-=0.8");

            // Scroll interaction for Mockup
            gsap.to(mockupRef.current, {
                scrollTrigger: {
                    trigger: mockupRef.current,
                    start: "top bottom",
                    end: "top center",
                    scrub: 1,
                },
                rotationX: 0,
                y: -50,
                ease: 'none'
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center">
            {/* Background glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vapor-plasma/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">
                <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tighter mb-8 leading-[1.1]">
                    <span className="block text-white">Domina el caos.</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-vapor-plasma via-white to-vapor-plasma italic font-serif mt-2">
                        Gestiona con precisión.
                    </span>
                </h1>

                <p ref={descRef} className="text-xl md:text-2xl text-vapor-ghost/70 max-w-2xl mx-auto mb-10 font-sans font-light leading-relaxed">
                    El primer CRM que utiliza agentes de IA para clasificar, convertir y retener a tus clientes con eficiencia de secuenciación genómica.
                </p>

                <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center gap-4 mb-20 z-10 w-full justify-center">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto group">
                        Comenzar ahora
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto group">
                        <Play className="w-5 h-5 mr-2 text-vapor-ghost group-hover:text-vapor-plasma transition-colors" />
                        Ver Demo
                    </Button>
                </div>

                {/* 3D Dashboard Mockup */}
                <div
                    ref={mockupRef}
                    className="relative w-full max-w-5xl aspect-[16/9] rounded-2xl border border-white/10 bg-vapor-graphite/50 backdrop-blur-xl shadow-[0_0_50px_rgba(123,97,255,0.15)] overflow-hidden"
                    style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateX(20deg)' }}
                >
                    {/* Mockup Header */}
                    <div className="absolute top-0 left-0 right-0 h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        <div className="mx-auto flex items-center gap-2 px-3 py-1 bg-white/5 rounded-md border border-white/5">
                            <span className="text-[10px] font-mono text-vapor-ghost/50">clientele.io/dashboard</span>
                        </div>
                    </div>

                    {/* Mockup Body using abstract unsplash image + UI overlays */}
                    <div className="mt-12 w-full h-[calc(100%-3rem)] relative p-6 flex gap-6">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity grayscale" />
                        <div className="absolute inset-0 bg-gradient-to-t from-vapor-void to-transparent" />

                        {/* Abstract UI Elements */}
                        <div className="w-64 h-full relative z-10 flex flex-col gap-4">
                            <div className="h-10 bg-white/5 rounded-lg w-3/4 animate-pulse" />
                            <div className="h-6 bg-white/5 rounded-lg w-full" />
                            <div className="h-6 bg-white/5 rounded-lg w-5/6" />
                            <div className="h-6 bg-white/5 rounded-lg w-4/5" />
                        </div>
                        <div className="flex-1 h-full relative z-10 flex flex-col gap-6">
                            <div className="flex gap-4">
                                <div className="flex-1 h-32 bg-white/5 rounded-xl border border-white/10 p-4">
                                    <div className="text-2xl font-mono text-vapor-plasma">98.4%</div>
                                    <div className="text-xs text-vapor-ghost/50 uppercase mt-2">Conversión I.A.</div>
                                </div>
                                <div className="flex-1 h-32 bg-white/5 rounded-xl border border-white/10 p-4">
                                    <div className="text-2xl font-mono text-vapor-ghost">1,240</div>
                                    <div className="text-xs text-vapor-ghost/50 uppercase mt-2">Leads Analizados</div>
                                </div>
                                <div className="flex-1 h-32 bg-white/5 rounded-xl border border-white/10 p-4">
                                    <div className="text-2xl font-mono text-green-400">Activo</div>
                                    <div className="text-xs text-vapor-ghost/50 uppercase mt-2">Estado Motor</div>
                                </div>
                            </div>
                            <div className="flex-1 bg-white/5 rounded-xl border border-white/10 p-4 relative overflow-hidden">
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-vapor-plasma/20 to-transparent" />
                                {/* Abstract chart lines */}
                                <div className="absolute bottom-4 left-4 right-4 h-24 border-b border-l border-white/10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
