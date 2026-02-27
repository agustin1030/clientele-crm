import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-vapor-plasma/50 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-vapor-plasma text-white shadow-[0_0_15px_rgba(123,97,255,0.4)] hover:shadow-[0_0_25px_rgba(123,97,255,0.6)] hover:-translate-y-0.5",
        secondary: "bg-vapor-graphite text-vapor-ghost border border-vapor-ghost/10 hover:border-vapor-plasma/50 hover:bg-vapor-graphite/80 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_0_15px_rgba(123,97,255,0.2)]",
        ghost: "bg-transparent text-vapor-ghost hover:text-white hover:bg-vapor-ghost/5"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}
