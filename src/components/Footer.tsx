import { Activity } from 'lucide-react';

export function Footer() {
    const columns = [
        {
            title: "Producto",
            links: ["Features", "Automatizaciones", "Analíticas", "Precios", "Changelog"]
        },
        {
            title: "Soluciones",
            links: ["Agencias", "Startups", "E-commerce", "Empresas SaaS"]
        },
        {
            title: "Recursos",
            links: ["Blog", "Documentación", "Guías de IA", "Comunidad Discord", "Webinars"]
        },
        {
            title: "Legal",
            links: ["Privacidad", "Términos de Servicio", "Cookies", "Seguridad"]
        }
    ];

    return (
        <footer className="bg-vapor-void border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-20">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 text-white mb-6">
                            <Activity className="w-5 h-5 text-vapor-plasma" />
                            <span className="font-sans font-bold text-lg tracking-tight">Clientele.</span>
                        </div>
                        <p className="text-sm text-vapor-ghost/50 leading-relaxed max-w-xs mb-8">
                            El CRM definitivo. Gestión de clientes y ventas en piloto automático potenciado por Inteligencia Artificial.
                        </p>

                        <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/5 rounded-full w-max">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-mono text-vapor-ghost/80 tracking-wider">All systems operational</span>
                        </div>
                    </div>

                    {columns.map((col, idx) => (
                        <div key={idx} className="col-span-1">
                            <h4 className="font-sans font-semibold text-white mb-6 text-sm">{col.title}</h4>
                            <ul className="space-y-4">
                                {col.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <a href="#" className="text-sm text-vapor-ghost/60 hover:text-vapor-plasma transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-vapor-ghost/40">
                        &copy; {new Date().getFullYear()} Clientele CRM. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs font-mono text-vapor-ghost/40">
                        <span className="hover:text-white transition-colors cursor-pointer">Twitter</span>
                        <span className="hover:text-white transition-colors cursor-pointer">LinkedIn</span>
                        <span className="hover:text-white transition-colors cursor-pointer">Github</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
