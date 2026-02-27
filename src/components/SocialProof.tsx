import { Hexagon, Triangle, Circle, Square, Command, Diamond } from 'lucide-react';

export function SocialProof() {
    const logos = [
        { icon: Hexagon, name: "Acme Corp" },
        { icon: Triangle, name: "Quantum" },
        { icon: Circle, name: "GlobalData" },
        { icon: Square, name: "NextGen" },
        { icon: Command, name: "StarkTech" },
        { icon: Diamond, name: "Oscorp" },
    ];

    return (
        <section className="py-20 border-y border-white/5 bg-vapor-graphite/20 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-vapor-void to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-vapor-void to-transparent z-10" />

            <p className="text-center text-sm font-mono text-vapor-ghost/40 uppercase tracking-widest mb-8">
                Confianza de sistemas escalables globales
            </p>

            <div className="flex w-max">
                {/* Double the list for seamless infinite inner scrolling */}
                <div className="flex w-1/2 justify-around animate-marquee whitespace-nowrap">
                    {[...logos, ...logos].map((Logo, idx) => (
                        <div key={idx} className="flex items-center gap-2 mx-12 text-vapor-ghost/50 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                            <Logo.icon className="w-8 h-8" />
                            <span className="font-sans font-bold text-xl">{Logo.name}</span>
                        </div>
                    ))}
                </div>
                <div className="flex w-1/2 justify-around animate-marquee whitespace-nowrap">
                    {[...logos, ...logos].map((Logo, idx) => (
                        <div key={`dup-${idx}`} className="flex items-center gap-2 mx-12 text-vapor-ghost/50 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                            <Logo.icon className="w-8 h-8" />
                            <span className="font-sans font-bold text-xl">{Logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
