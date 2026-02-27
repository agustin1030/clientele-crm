import { Button } from './ui/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function Pricing() {
    const plans = [
        {
            name: "Básico",
            price: "19",
            desc: "Perfecto para autónomos y pequeños negocios.",
            features: ["Gestión hasta 1,000 contactos", "Automatizaciones básicas", "Soporte por email", "Dashboard analítico"],
            popular: false
        },
        {
            name: "Popular",
            price: "39",
            desc: "Diseñado para equipos en crecimiento.",
            features: ["Gestión de contactos ilimitada", "Motor de IA nativo", "Secuencias de email avanzadas", "Soporte prioritario 24/7"],
            popular: true
        },
        {
            name: "Avanzado",
            price: "69",
            desc: "Para agencias y operaciones de alto volumen.",
            features: ["Todo lo del plan popular", "Agentes autónomos de ventas", "API y Webhooks", "Gerente de éxito dedicado"],
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-vapor-plasma/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-white">
                        Invierte en <span className="text-transparent bg-clip-text bg-gradient-to-r from-vapor-plasma to-white font-serif italic">precisión</span>
                    </h2>
                    <p className="text-xl text-vapor-ghost/60 max-w-2xl mx-auto font-light">
                        Planes escalables diseñados para adaptarse a la carga cognitiva de tu operación.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-32">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative rounded-2xl p-8 backdrop-blur-sm border transition-all duration-500 hover:-translate-y-2 flex flex-col ${plan.popular
                                ? 'bg-vapor-graphite/60 border-vapor-plasma/50 shadow-[0_0_40px_rgba(123,97,255,0.15)]'
                                : 'bg-vapor-graphite/20 border-white/5 hover:border-white/10'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-vapor-plasma text-white text-xs font-mono uppercase tracking-widest px-4 py-1 rounded-full shadow-[0_0_15px_rgba(123,97,255,0.5)]">
                                    Más Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-sm text-vapor-ghost/60 h-10">{plan.desc}</p>
                            </div>

                            <div className="mb-8">
                                <span className="text-5xl font-mono text-white tracking-tighter">${plan.price}</span>
                                <span className="text-sm text-vapor-ghost/50 ml-2">USD / mes</span>
                            </div>

                            <div className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-start gap-3">
                                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-vapor-plasma' : 'text-vapor-ghost/30'}`} />
                                        <span className="text-sm text-vapor-ghost/80">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button variant={plan.popular ? 'primary' : 'secondary'} className="w-full">
                                Elegir plan
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Final CTA Masivo */}
                <div className="relative rounded-3xl overflow-hidden bg-vapor-graphite/40 border border-white/10 p-12 md:p-20 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-vapor-plasma/20 to-transparent mix-blend-overlay" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-luminosity grayscale" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
                            Sintetiza tu crecimiento.
                        </h2>
                        <p className="text-xl text-vapor-ghost/70 mb-10 font-light">
                            Únete a las empresas que ya están operando a una frecuencia superior.
                        </p>
                        <Button variant="primary" size="lg" className="w-full sm:w-auto text-lg px-12 group">
                            Comenzar prueba gratuita
                            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}
