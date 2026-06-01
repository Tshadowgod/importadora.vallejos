import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-hero-gradient">
      {/* Background glow */}
      <div className="absolute inset-0 bg-glow-blue opacity-30 pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated circles */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-electric-500/30 animate-pulse-slow" />
        <div className="absolute inset-12 rounded-full border border-electric-500/20 animate-pulse-slow [animation-delay:1s]" />
        <div className="absolute inset-24 rounded-full border border-electric-500/30 animate-pulse-slow [animation-delay:2s]" />
      </div>

      {/* Car wireframe SVG illustration - side profile SUV */}
      <div className="absolute right-0 top-1/2 -translate-y-[45%] w-[58%] max-w-3xl hidden lg:block pointer-events-none animate-float">
        <svg viewBox="0 0 860 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glowSoft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid reference lines */}
          <g stroke="#1e6fa8" strokeWidth="0.5" opacity="0.35">
            <line x1="60" y1="355" x2="820" y2="355" />
            <line x1="60" y1="200" x2="820" y2="200" strokeDasharray="6 4" />
            <line x1="190" y1="100" x2="190" y2="420" strokeDasharray="4 4" />
            <line x1="680" y1="100" x2="680" y2="420" strokeDasharray="4 4" />
          </g>

          {/* Crosshair markers */}
          <g stroke="#38bdf8" strokeWidth="0.8" opacity="0.5">
            <line x1="185" y1="355" x2="195" y2="355" /><line x1="190" y1="350" x2="190" y2="360" />
            <line x1="675" y1="355" x2="685" y2="355" /><line x1="680" y1="350" x2="680" y2="360" />
          </g>

          {/* === MAIN BODY === */}
          <g filter="url(#glow)" stroke="#38bdf8" strokeWidth="2" fill="none">
            {/* Body silhouette - SUV/Defender style */}
            <path d="M60 355 L60 290 L90 290 L130 200 L200 165 L560 160 L620 175 L680 185 L740 210 L780 240 L800 280 L800 355 Z"
              strokeWidth="2.5" />

            {/* Roof line */}
            <path d="M130 200 L200 165 L560 160 L620 175" strokeWidth="2" />

            {/* Hood / front slope */}
            <path d="M620 175 L680 185 L740 210 L780 240" strokeWidth="2" />

            {/* Front face vertical */}
            <path d="M780 240 L800 280 L800 355" strokeWidth="2" />

            {/* Windshield - dashed */}
            <path d="M200 165 L175 260 L310 260 L310 200 L200 165"
              strokeDasharray="7 4" strokeWidth="1.5" opacity="0.85" />

            {/* Rear window - dashed */}
            <path d="M490 163 L490 260 L610 260 L620 175 L490 163"
              strokeDasharray="7 4" strokeWidth="1.5" opacity="0.85" />

            {/* Middle window - dashed */}
            <path d="M318 200 L318 260 L482 260 L482 163 L318 200"
              strokeDasharray="7 4" strokeWidth="1.5" opacity="0.85" />

            {/* Window sill line */}
            <path d="M175 260 L800 260" strokeWidth="1.2" opacity="0.6" />

            {/* Door lines vertical */}
            <path d="M318 260 L318 355" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            <path d="M490 260 L490 355" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            <path d="M618 260 L618 355" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

            {/* Side body crease line */}
            <path d="M90 310 L790 310" strokeWidth="1" strokeDasharray="5 3" opacity="0.4" />

            {/* Front bumper detail */}
            <path d="M800 310 L820 310 L820 340 L800 350" strokeWidth="1.5" opacity="0.7" />
            {/* Grill lines */}
            <path d="M800 285 L820 288" strokeWidth="1" opacity="0.5" />
            <path d="M800 295 L820 298" strokeWidth="1" opacity="0.5" />
            <path d="M800 305 L820 308" strokeWidth="1" opacity="0.5" />

            {/* Headlight */}
            <rect x="798" y="240" width="18" height="22" rx="2" strokeWidth="1.5" opacity="0.8" />

            {/* Tail light */}
            <rect x="55" y="270" width="12" height="30" rx="2" strokeWidth="1.5" opacity="0.8" />

            {/* Roof rack / detail */}
            <path d="M210 162 L555 157" strokeWidth="1" strokeDasharray="4 3" opacity="0.45" />

            {/* Wheel arch front */}
            <path d="M590 355 Q595 300 680 298 Q765 296 770 355"
              strokeWidth="2" />
            {/* Wheel arch rear */}
            <path d="M100 355 Q105 300 190 298 Q275 296 280 355"
              strokeWidth="2" />

            {/* Undercarriage line */}
            <path d="M60 355 L100 355 M280 355 L590 355 M770 355 L800 355"
              strokeWidth="2" />
          </g>

          {/* === WHEELS === */}
          {/* Rear wheel */}
          <g filter="url(#glow)">
            <circle cx="190" cy="355" r="70" stroke="#38bdf8" strokeWidth="2.2" />
            <circle cx="190" cy="355" r="54" stroke="#38bdf8" strokeWidth="1" strokeDasharray="5 3" opacity="0.7" />
            <circle cx="190" cy="355" r="36" stroke="#38bdf8" strokeWidth="1.5" opacity="0.85" />
            <circle cx="190" cy="355" r="16" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="190" cy="355" r="5" fill="#38bdf8" opacity="0.8" />
            {/* Spokes */}
            <g stroke="#38bdf8" strokeWidth="1" opacity="0.5">
              <line x1="190" y1="319" x2="190" y2="337" />
              <line x1="190" y1="373" x2="190" y2="391" />
              <line x1="154" y1="355" x2="172" y2="355" />
              <line x1="208" y1="355" x2="226" y2="355" />
              <line x1="164" y1="329" x2="176" y2="341" />
              <line x1="204" y1="369" x2="216" y2="381" />
              <line x1="216" y1="329" x2="204" y2="341" />
              <line x1="176" y1="369" x2="164" y2="381" />
            </g>
          </g>

          {/* Front wheel */}
          <g filter="url(#glow)">
            <circle cx="680" cy="355" r="70" stroke="#38bdf8" strokeWidth="2.2" />
            <circle cx="680" cy="355" r="54" stroke="#38bdf8" strokeWidth="1" strokeDasharray="5 3" opacity="0.7" />
            <circle cx="680" cy="355" r="36" stroke="#38bdf8" strokeWidth="1.5" opacity="0.85" />
            <circle cx="680" cy="355" r="16" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="680" cy="355" r="5" fill="#38bdf8" opacity="0.8" />
            {/* Spokes */}
            <g stroke="#38bdf8" strokeWidth="1" opacity="0.5">
              <line x1="680" y1="319" x2="680" y2="337" />
              <line x1="680" y1="373" x2="680" y2="391" />
              <line x1="644" y1="355" x2="662" y2="355" />
              <line x1="698" y1="355" x2="716" y2="355" />
              <line x1="654" y1="329" x2="666" y2="341" />
              <line x1="694" y1="369" x2="706" y2="381" />
              <line x1="706" y1="329" x2="694" y2="341" />
              <line x1="666" y1="369" x2="654" y2="381" />
            </g>
          </g>

          {/* Node dots at key vertices */}
          <g fill="#38bdf8" filter="url(#glowSoft)">
            <circle cx="60" cy="355" r="3.5" opacity="0.9" />
            <circle cx="130" cy="200" r="3.5" opacity="0.9" />
            <circle cx="200" cy="165" r="3.5" opacity="0.9" />
            <circle cx="560" cy="160" r="3.5" opacity="0.9" />
            <circle cx="620" cy="175" r="3.5" opacity="0.9" />
            <circle cx="680" cy="185" r="3" opacity="0.8" />
            <circle cx="780" cy="240" r="3" opacity="0.8" />
            <circle cx="800" cy="355" r="3.5" opacity="0.9" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-electric-400 rounded-full animate-pulse" />
            <span className="text-electric-400 text-sm font-semibold tracking-wide">
              SERVICIOS ADUANEROS PROFESIONALES
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-6 text-white">
            TU IMPORTACIÓN
            <br />
            <span className="text-glow text-electric-400">SEGURA Y</span>
            <br />
            <span className="text-glow text-electric-400">CONFIABLE</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
            Cotiza el costo de importación de tu vehículo en minutos. Trámites
            aduaneros completos en Bolivia con total transparencia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/cotizar"
              className="btn-primary px-8 py-4 rounded-full text-lg font-bold text-center"
            >
              Cotizar Mi Vehículo
            </Link>
            <a
              href="#servicios"
              className="btn-outline px-8 py-4 rounded-full text-lg text-center"
            >
              Ver Servicios
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-electric-500/10">
            {[
              { value: "+500", label: "Vehículos importados" },
              { value: "100%", label: "Trámites exitosos" },
              { value: "15+", label: "Años de experiencia" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-electric-400 text-glow">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
