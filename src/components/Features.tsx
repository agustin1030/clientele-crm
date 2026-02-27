import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Bot, Layers, Mail, LayoutPanelTop, Tags, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Features() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.bento-card');

            gsap.from(cards, {
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, gridRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="absolute -left-[20%] top-0 w-[500px] h-[500px] bg-vapor-plasma/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-white">
                        Ingeniería de <span className="text-transparent bg-clip-text bg-gradient-to-r from-vapor-plasma to-white font-serif italic">crecimiento</span>
                    </h2>
                    <p className="text-xl text-vapor-ghost/60 max-w-2xl font-light">
                        Sistemas autónomos que procesan leads, cierran ventas y escalan tus operaciones sin intervención humana.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

                    {/* Card 1: Gestión Eficiente */}
                    <div className="bento-card col-span-1 md:col-span-1 row-span-1 rounded-2xl bg-vapor-graphite/40 border border-white/5 p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 hover:shadow-[0_10px_30px_rgba(123,97,255,0.1)] backdrop-blur-sm">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-vapor-plasma/10 blur-[50px] group-hover:bg-vapor-plasma/20 transition-colors" />
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:border-vapor-plasma/30 transition-colors">
                            <Users className="w-6 h-6 text-vapor-ghost group-hover:text-vapor-plasma transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold font-sans text-white mb-3">Gestión de clientes eficiente</h3>
                        <p className="text-sm text-vapor-ghost/70 mb-8 leading-relaxed">
                            Organiza, filtra y segmenta tu base de datos con precisión milimétrica usando reglas inteligentes.
                        </p>

                        {/* Micro interaction */}
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="space-y-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className={`h-12 rounded-lg bg-white/5 border border-white/5 flex items-center px-4 gap-3 transform group-hover:translate-x-2 transition-transform duration-500 delay-${i * 100} ease-out`}>
                                        <div className="w-6 h-6 rounded-full bg-white/10 animate-pulse" />
                                        <div className="h-2 bg-white/10 rounded w-24" />
                                        <div className="ml-auto w-12 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <span className="text-[8px] text-green-400 font-mono">ACTIVE</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Conversiones IA */}
                    <div className="bento-card col-span-1 md:col-span-2 row-span-1 rounded-2xl bg-vapor-graphite/40 border border-white/5 p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 hover:shadow-[0_10px_30px_rgba(123,97,255,0.1)] backdrop-blur-sm">
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-vapor-plasma/15 blur-[60px] group-hover:bg-vapor-plasma/30 transition-colors" />

                        <div className="flex flex-col md:flex-row gap-8 h-full">
                            <div className="flex-1">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:border-vapor-plasma/30 transition-colors">
                                    <Bot className="w-6 h-6 text-vapor-ghost group-hover:text-vapor-plasma transition-colors" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold font-sans text-white mb-3">Incremento de conversiones gracias a IA</h3>
                                <p className="text-sm text-vapor-ghost/70 leading-relaxed max-w-sm">
                                    Personalización dinámica a nivel molecular. Nuestros agentes de IA analizan cada interacción para entregar el mensaje exacto en el momento perfecto.
                                </p>
                            </div>

                            {/* Micro interaction */}
                            <div className="flex-1 relative flex items-center justify-center min-h-[150px]">
                                <div className="w-full max-w-xs bg-vapor-void/50 border border-white/5 rounded-xl p-6 relative">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-xs font-mono text-vapor-ghost/50 uppercase tracking-wider">Tasa de Conversión</span>
                                        <span className="text-xs font-mono text-vapor-plasma">+48.2%</span>
                                    </div>
                                    <div className="relative h-2 bg-white/5 rounded-full overflow-hidden mb-6">
                                        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-vapor-plasma to-white rounded-full w-0 group-hover:w-[85%] transition-all duration-1000 ease-out" />
                                    </div>

                                    <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                        <span className="text-xs text-vapor-ghost/70">Piloto Automático IA</span>
                                        <button className="relative w-10 h-6 rounded-full bg-white/10 overflow-hidden group/switch">
                                            <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-vapor-ghost group-hover:translate-x-4 group-hover:bg-vapor-plasma transition-all duration-300" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Todo en uno */}
                    <div className="bento-card col-span-1 md:col-span-3 row-span-1 rounded-2xl bg-vapor-graphite/40 border border-white/5 p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 hover:shadow-[0_10px_30px_rgba(123,97,255,0.1)] backdrop-blur-sm flex flex-col items-center justify-center">

                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544256718-3bda5c1b631d?q=80&w=2000&auto=format&fit=crop')] bg-cover opacity-5 mix-blend-luminosity grayscale group-hover:opacity-10 transition-opacity" />

                        <div className="text-center z-10 max-w-2xl mx-auto mb-10">
                            <div className="w-12 h-12 mx-auto rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-4 group-hover:border-vapor-plasma/30 transition-colors">
                                <Layers className="w-6 h-6 text-vapor-ghost group-hover:text-vapor-plasma transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold font-sans text-white mb-3">Todo lo que necesitas en una herramienta</h3>
                            <p className="text-sm text-vapor-ghost/70">
                                Olvida las 15 suscripciones diferentes. Emails, landings, etiquetas, calendarios y flujos; un único núcleo operativo para todo tu negocio.
                            </p>
                        </div>

                        {/* Micro interaction */}
                        <div className="w-full max-w-3xl flex justify-between items-center z-10 px-4">
                            {[
                                { icon: Mail, label: 'Emails' },
                                { icon: LayoutPanelTop, label: 'Landings' },
                                { icon: Tags, label: 'Etiquetas' },
                                { icon: Calendar, label: 'Calendarios' },
                            ].map((item, idx) => (
                                <div key={idx} className="relative flex flex-col items-center group/item cursor-pointer">
                                    {idx !== 0 && (
                                        <div className="absolute right-full top-6 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10" />
                                    )}
                                    <div className="w-16 h-16 rounded-2xl bg-vapor-void border border-white/10 flex items-center justify-center mb-3 group-hover/item:border-vapor-plasma/50 group-hover/item:shadow-[0_0_20px_rgba(123,97,255,0.3)] transition-all duration-300 transform group-hover/item:-translate-y-2">
                                        <item.icon className="w-6 h-6 text-vapor-ghost group-hover/item:text-white" />
                                    </div>
                                    <span className="text-xs font-mono text-vapor-ghost/50 group-hover/item:text-vapor-plasma transition-colors uppercase tracking-widest">{item.label}</span>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
