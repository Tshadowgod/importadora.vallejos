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

      {/* Car wireframe SVG illustration */}
      <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 w-[55%] max-w-3xl opacity-80 hidden lg:block pointer-events-none animate-float">
        <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          {/* Car body outline - pickup truck wireframe style */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#glow)" stroke="#38bdf8" strokeWidth="1.5" opacity="0.9">
            {/* Main body */}
            <path d="M80 320 L80 240 L180 180 L380 160 L480 160 L540 190 L680 190 L720 230 L720 320 Z" />
            {/* Cab */}
            <path d="M180 240 L200 190 L380 170 L480 170 L500 200 L510 240" strokeDasharray="4 2" />
            {/* Hood */}
            <path d="M540 190 L580 175 L680 185 L720 220" />
            {/* Windows */}
            <path d="M195 240 L215 195 L360 178 L470 178 L492 200 L505 240" />
            <path d="M215 195 L360 178" opacity="0.5" />
            {/* Wheels */}
            <circle cx="210" cy="325" r="55" />
            <circle cx="210" cy="325" r="38" strokeDasharray="3 2" />
            <circle cx="210" cy="325" r="18" />
            <circle cx="590" cy="325" r="55" />
            <circle cx="590" cy="325" r="38" strokeDasharray="3 2" />
            <circle cx="590" cy="325" r="18" />
            {/* Wheel arches */}
            <path d="M130 310 Q140 270 210 268 Q280 266 290 310" />
            <path d="M530 310 Q540 270 590 268 Q650 266 660 310" />
            {/* Details */}
            <path d="M540 190 L540 320" strokeDasharray="2 3" opacity="0.4" />
            <path d="M80 280 L720 280" strokeDasharray="3 4" opacity="0.2" />
            <path d="M520 210 L530 220 L540 215" opacity="0.6" />
            <path d="M685 215 L700 220 L720 225" opacity="0.6" />
            {/* Grille lines */}
            <path d="M685 215 L685 255" opacity="0.4" />
            <path d="M695 217 L695 255" opacity="0.3" />
            <path d="M705 220 L705 255" opacity="0.3" />
            <path d="M715 225 L715 255" opacity="0.3" />
            {/* Frame lines */}
            <path d="M80 320 L720 320" opacity="0.5" />
            {/* Cross detail on bed */}
            <path d="M540 200 L680 200" strokeDasharray="4 3" opacity="0.3" />
            <path d="M540 220 L680 220" strokeDasharray="4 3" opacity="0.3" />
          </g>
          {/* Glow dots at nodes */}
          <g fill="#38bdf8">
            <circle cx="80" cy="320" r="3" opacity="0.8" />
            <circle cx="720" cy="320" r="3" opacity="0.8" />
            <circle cx="720" cy="230" r="3" opacity="0.8" />
            <circle cx="540" cy="190" r="3" opacity="0.8" />
            <circle cx="180" cy="180" r="3" opacity="0.8" />
            <circle cx="80" cy="240" r="3" opacity="0.8" />
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
