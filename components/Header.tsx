"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Cotizar", href: "/cotizar" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-navy-950/95 backdrop-blur-md border-b border-electric-500/10 sticky top-0 z-50">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-14 h-14 shrink-0">
            <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <filter id="logoGlow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              {/* Hexagon background */}
              <path d="M28 3 L50 15.5 L50 40.5 L28 53 L6 40.5 L6 15.5 Z"
                fill="url(#hexGrad)" stroke="#0ea5e9" strokeWidth="1.5" />
              <defs>
                <linearGradient id="hexGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0d1530" />
                  <stop offset="100%" stopColor="#0a1a3a" />
                </linearGradient>
              </defs>
              {/* Car wireframe inside hex */}
              <g filter="url(#logoGlow)" stroke="#38bdf8" strokeWidth="1.2" fill="none">
                {/* Body */}
                <path d="M10 36 L10 28 L15 20 L28 18 L38 18 L44 22 L46 28 L46 36 Z" />
                {/* Roof */}
                <path d="M15 20 L19 15 L36 15 L38 18" strokeDasharray="2 1.5" />
                {/* Windows */}
                <path d="M16 28 L19 20 L28 19 L28 28" strokeDasharray="2 1.5" strokeWidth="0.9" />
                <path d="M30 19 L36 18 L38 22 L30 28 L30 19" strokeDasharray="2 1.5" strokeWidth="0.9" />
                {/* Window sill */}
                <line x1="16" y1="28" x2="44" y2="28" strokeWidth="0.8" opacity="0.7" />
                {/* Wheel arches */}
                <path d="M10 36 L12 36 Q13 30 19 30 Q25 30 26 36 L34 36 Q35 30 41 30 Q47 30 46 36" />
              </g>
              {/* Wheels */}
              <g filter="url(#logoGlow)">
                <circle cx="19" cy="36" r="5.5" stroke="#38bdf8" strokeWidth="1.2" />
                <circle cx="19" cy="36" r="3" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="2 1" />
                <circle cx="19" cy="36" r="1.2" fill="#38bdf8" opacity="0.8" />
                <circle cx="41" cy="36" r="5.5" stroke="#38bdf8" strokeWidth="1.2" />
                <circle cx="41" cy="36" r="3" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="2 1" />
                <circle cx="41" cy="36" r="1.2" fill="#38bdf8" opacity="0.8" />
              </g>
            </svg>
          </div>
          <div>
            <div className="text-white font-black text-xl tracking-wider leading-tight">
              FROTED
            </div>
            <div className="text-electric-400 font-bold text-sm tracking-[0.3em] leading-tight">
              ADUANA
            </div>
          </div>
        </Link>

        {/* Contact info */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 text-slate-300 text-sm">
            <svg className="w-4 h-4 text-electric-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="font-semibold text-electric-400">+591 65073163</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <svg className="w-4 h-4 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Bolivia</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/cotizar" className="btn-primary px-5 py-2.5 rounded-full text-sm font-bold">
            Cotizar Ahora
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="border-t border-electric-500/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-3 text-sm font-medium text-slate-300 hover:text-electric-400 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-electric-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-900 border-t border-electric-500/10 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 px-4 text-slate-300 hover:text-white hover:bg-electric-500/10 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cotizar"
            onClick={() => setMobileOpen(false)}
            className="btn-primary block text-center py-3 px-4 rounded-lg mt-4"
          >
            Cotizar Ahora
          </Link>
        </div>
      )}
    </header>
  );
}
