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
      <div className="absolute right-[-30px] top-1/2 -translate-y-[48%] w-[62%] max-w-[780px] hidden lg:block pointer-events-none animate-float">
        <svg viewBox="0 0 900 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <defs>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* ── GRID LINES ── */}
          <g stroke="#1d4ed8" strokeWidth="0.6" opacity="0.25">
            <line x1="30" y1="390" x2="870" y2="390" />
            <line x1="30" y1="200" x2="870" y2="200" strokeDasharray="8 5" />
            <line x1="180" y1="80" x2="180" y2="460" strokeDasharray="6 4" />
            <line x1="700" y1="80" x2="700" y2="460" strokeDasharray="6 4" />
          </g>
          {/* crosshairs at wheel centres */}
          <g stroke="#38bdf8" strokeWidth="1" opacity="0.6">
            <line x1="172" y1="390" x2="188" y2="390" /><line x1="180" y1="382" x2="180" y2="398" />
            <line x1="692" y1="390" x2="708" y2="390" /><line x1="700" y1="382" x2="700" y2="398" />
          </g>

          {/* ── BODY ── Land Rover Defender side profile */}
          <g filter="url(#glow)" stroke="#38bdf8" strokeWidth="2.2" fill="none">

            {/* Outer body silhouette */}
            {/* rear vertical + bumper */}
            <path d="M55 390 L55 290 L70 285 L70 240" strokeWidth="2.2"/>
            {/* rear top slope → roof */}
            <path d="M70 240 L90 210 L115 200" strokeWidth="2.2"/>
            {/* flat roof */}
            <path d="M115 200 L620 200" strokeWidth="2.2"/>
            {/* front slope (windshield top) */}
            <path d="M620 200 L660 215" strokeWidth="2.2"/>
            {/* front face */}
            <path d="M660 215 L675 240 L680 280 L675 390" strokeWidth="2.2"/>
            {/* base */}
            <path d="M55 390 L112 390 M298 390 L555 390 M760 390 L675 390" strokeWidth="2.2"/>

            {/* Wheel arches */}
            <path d="M112 390 Q118 315 180 313 Q245 311 298 390" strokeWidth="2.2"/>
            <path d="M555 390 Q560 315 625 313 Q690 311 760 390" strokeWidth="2.2"/>

            {/* ── WINDOWS (dashed) ── */}
            {/* Rear window */}
            <path d="M90 210 L110 330 L230 330 L230 205 L115 200 Z"
              strokeDasharray="8 4" strokeWidth="1.6" opacity="0.9"/>
            {/* Middle window */}
            <path d="M238 205 L238 330 L430 330 L430 205 Z"
              strokeDasharray="8 4" strokeWidth="1.6" opacity="0.9"/>
            {/* Front window */}
            <path d="M438 205 L438 330 L610 330 L625 205 L620 200 Z"
              strokeDasharray="8 4" strokeWidth="1.6" opacity="0.9"/>

            {/* Window sill */}
            <path d="M110 330 L635 330" strokeWidth="1.2" opacity="0.65"/>

            {/* Door dividers */}
            <path d="M238 330 L238 390" strokeWidth="1" strokeDasharray="4 3" opacity="0.55"/>
            <path d="M438 330 L438 390" strokeWidth="1" strokeDasharray="4 3" opacity="0.55"/>
            <path d="M610 330 L610 390" strokeWidth="1" strokeDasharray="4 3" opacity="0.55"/>

            {/* Body crease */}
            <path d="M70 355 L670 355" strokeWidth="1" strokeDasharray="7 4" opacity="0.4"/>

            {/* Roof detail */}
            <path d="M120 197 L618 197" strokeWidth="1" strokeDasharray="5 3" opacity="0.4"/>

            {/* Tail light */}
            <rect x="48" y="265" width="13" height="45" rx="2" strokeWidth="1.6" opacity="0.85"/>
            {/* Rear bumper */}
            <path d="M55 375 L35 378 L35 395 L55 395" strokeWidth="1.4" opacity="0.7"/>

            {/* Headlight */}
            <rect x="665" y="232" width="20" height="28" rx="2" strokeWidth="1.6" opacity="0.85"/>
            {/* Front bumper / grille */}
            <path d="M675 370 L695 370 L695 392 L675 392" strokeWidth="1.4" opacity="0.7"/>
            <line x1="678" y1="280" x2="694" y2="282" strokeWidth="1" opacity="0.5"/>
            <line x1="678" y1="292" x2="694" y2="294" strokeWidth="1" opacity="0.5"/>
            <line x1="678" y1="304" x2="694" y2="306" strokeWidth="1" opacity="0.5"/>
          </g>

          {/* ── REAR WHEEL ── */}
          <g filter="url(#glow)">
            <circle cx="180" cy="390" r="77" stroke="#38bdf8" strokeWidth="2.4"/>
            <circle cx="180" cy="390" r="60" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 3" opacity="0.75"/>
            <circle cx="180" cy="390" r="40" stroke="#38bdf8" strokeWidth="1.6" opacity="0.9"/>
            <circle cx="180" cy="390" r="18" stroke="#38bdf8" strokeWidth="1.6"/>
            <circle cx="180" cy="390" r="6"  fill="#38bdf8" opacity="0.85"/>
            <g stroke="#38bdf8" strokeWidth="1.1" opacity="0.55">
              <line x1="180" y1="350" x2="180" y2="372"/><line x1="180" y1="408" x2="180" y2="430"/>
              <line x1="140" y1="390" x2="162" y2="390"/><line x1="198" y1="390" x2="220" y2="390"/>
              <line x1="152" y1="362" x2="166" y2="376"/><line x1="194" y1="404" x2="208" y2="418"/>
              <line x1="208" y1="362" x2="194" y2="376"/><line x1="166" y1="404" x2="152" y2="418"/>
            </g>
          </g>

          {/* ── FRONT WHEEL ── */}
          <g filter="url(#glow)">
            <circle cx="700" cy="390" r="77" stroke="#38bdf8" strokeWidth="2.4"/>
            <circle cx="700" cy="390" r="60" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 3" opacity="0.75"/>
            <circle cx="700" cy="390" r="40" stroke="#38bdf8" strokeWidth="1.6" opacity="0.9"/>
            <circle cx="700" cy="390" r="18" stroke="#38bdf8" strokeWidth="1.6"/>
            <circle cx="700" cy="390" r="6"  fill="#38bdf8" opacity="0.85"/>
            <g stroke="#38bdf8" strokeWidth="1.1" opacity="0.55">
              <line x1="700" y1="350" x2="700" y2="372"/><line x1="700" y1="408" x2="700" y2="430"/>
              <line x1="660" y1="390" x2="682" y2="390"/><line x1="718" y1="390" x2="740" y2="390"/>
              <line x1="672" y1="362" x2="686" y2="376"/><line x1="714" y1="404" x2="728" y2="418"/>
              <line x1="728" y1="362" x2="714" y2="376"/><line x1="686" y1="404" x2="672" y2="418"/>
            </g>
          </g>

          {/* Node dots */}
          <g fill="#38bdf8">
            <circle cx="55"  cy="390" r="4" opacity="0.9"/>
            <circle cx="675" cy="390" r="4" opacity="0.9"/>
            <circle cx="115" cy="200" r="4" opacity="0.9"/>
            <circle cx="620" cy="200" r="4" opacity="0.9"/>
            <circle cx="660" cy="215" r="3.5" opacity="0.85"/>
            <circle cx="70"  cy="240" r="3.5" opacity="0.85"/>
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
