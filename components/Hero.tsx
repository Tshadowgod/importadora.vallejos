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

      {/* Car wireframe SVG - Toyota Land Cruiser 3/4 front view */}
      <div className="absolute right-[-60px] top-1/2 -translate-y-[50%] w-[65%] max-w-[820px] hidden lg:block pointer-events-none animate-float">
        <svg viewBox="0 0 900 620" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <defs>
            <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.05"/>
            </linearGradient>
          </defs>

          {/* ── GROUND REFLECTION ── */}
          <g opacity="0.18" transform="scale(1,-1) translate(0,-620)">
            <ellipse cx="460" cy="-75" rx="310" ry="18" fill="#38bdf8"/>
          </g>
          <ellipse cx="460" cy="545" rx="310" ry="18" fill="#38bdf8" opacity="0.12"/>

          {/* ── MESH GRID ON BODY (background) ── */}
          <g stroke="#1e6fa8" strokeWidth="0.4" opacity="0.3">
            {/* Horizontal mesh lines on body */}
            {[180,200,220,240,260,280,300,320,340,360,380,400,420,440].map((y,i) => (
              <line key={`h${i}`} x1="120" y1={y} x2="760" y2={y}/>
            ))}
            {/* Vertical mesh lines */}
            {[150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750].map((x,i) => (
              <line key={`v${i}`} x1={x} y1="150" x2={x} y2="490"/>
            ))}
          </g>

          {/* ── MAIN BODY ── Toyota Land Cruiser 200 3/4 front-left view */}
          <g filter="url(#glow)" stroke="#38bdf8" strokeWidth="2" fill="none">

            {/* ── ROOF ── */}
            <path d="M 230 155 L 680 140 L 740 170 L 720 175 L 270 190 Z" strokeWidth="1.8" fill="url(#bodyGrad)" opacity="0.9"/>
            {/* Roof rack bars */}
            <line x1="300" y1="158" x2="690" y2="144" strokeWidth="0.8" opacity="0.5"/>
            <line x1="320" y1="162" x2="700" y2="148" strokeWidth="0.8" opacity="0.5"/>
            {/* Roof rack cross */}
            <line x1="350" y1="158" x2="350" y2="168" strokeWidth="0.8" opacity="0.5"/>
            <line x1="450" y1="154" x2="450" y2="164" strokeWidth="0.8" opacity="0.5"/>
            <line x1="550" y1="150" x2="550" y2="160" strokeWidth="0.8" opacity="0.5"/>
            <line x1="650" y1="146" x2="650" y2="156" strokeWidth="0.8" opacity="0.5"/>

            {/* ── WINDSHIELD ── */}
            <path d="M 270 190 L 300 290 L 680 275 L 720 175 L 680 140 L 230 155 Z"
              strokeWidth="1.5" fill="url(#bodyGrad)" opacity="0.7" strokeDasharray="6 3"/>
            {/* Windshield inner frame */}
            <path d="M 285 195 L 312 282 L 665 268 L 703 178" strokeWidth="0.8" opacity="0.5" strokeDasharray="4 3"/>
            {/* Windshield center pillar */}
            <line x1="490" y1="168" x2="490" y2="278" strokeWidth="1" opacity="0.5"/>
            {/* Windshield wiper */}
            <path d="M 340 278 Q 490 255 630 265" strokeWidth="0.9" strokeDasharray="3 3" opacity="0.4"/>

            {/* ── LEFT SIDE BODY (driver side visible) ── */}
            <path d="M 120 270 L 270 190 L 300 290 L 300 460 L 120 470 Z"
              strokeWidth="2" fill="url(#bodyGrad)" opacity="0.5"/>
            {/* Left body mesh */}
            <g stroke="#38bdf8" strokeWidth="0.5" opacity="0.4">
              <line x1="120" y1="310" x2="300" y2="300"/>
              <line x1="120" y1="350" x2="300" y2="340"/>
              <line x1="120" y1="390" x2="300" y2="380"/>
              <line x1="120" y1="430" x2="300" y2="420"/>
              <line x1="160" y1="270" x2="160" y2="465"/>
              <line x1="200" y1="245" x2="200" y2="462"/>
              <line x1="240" y1="220" x2="240" y2="460"/>
              <line x1="280" y1="200" x2="280" y2="458"/>
            </g>

            {/* ── MAIN FRONT FACE ── */}
            <path d="M 300 290 L 680 275 L 720 480 L 300 490 Z"
              strokeWidth="2" fill="url(#bodyGrad)" opacity="0.4"/>
            {/* Front face mesh */}
            <g stroke="#38bdf8" strokeWidth="0.5" opacity="0.35">
              <line x1="300" y1="320" x2="715" y2="305"/>
              <line x1="300" y1="360" x2="718" y2="345"/>
              <line x1="300" y1="400" x2="720" y2="385"/>
              <line x1="300" y1="440" x2="720" y2="430"/>
              <line x1="380" y1="285" x2="380" y2="488"/>
              <line x1="460" y1="282" x2="460" y2="486"/>
              <line x1="540" y1="280" x2="540" y2="484"/>
              <line x1="620" y1="278" x2="620" y2="482"/>
            </g>

            {/* ── GRILLE ── */}
            <rect x="370" y="350" width="260" height="100" rx="4" strokeWidth="1.8" opacity="0.9"/>
            {/* Grille bars horizontal */}
            <line x1="372" y1="375" x2="628" y2="373" strokeWidth="1.2" opacity="0.8"/>
            <line x1="372" y1="400" x2="628" y2="398" strokeWidth="1.2" opacity="0.8"/>
            <line x1="372" y1="425" x2="628" y2="423" strokeWidth="1.2" opacity="0.8"/>
            {/* Grille bars vertical */}
            <line x1="415" y1="350" x2="415" y2="450" strokeWidth="0.8" opacity="0.6"/>
            <line x1="460" y1="350" x2="460" y2="450" strokeWidth="0.8" opacity="0.6"/>
            <line x1="505" y1="350" x2="505" y2="450" strokeWidth="0.8" opacity="0.6"/>
            <line x1="550" y1="350" x2="550" y2="450" strokeWidth="0.8" opacity="0.6"/>
            <line x1="595" y1="350" x2="595" y2="450" strokeWidth="0.8" opacity="0.6"/>

            {/* ── HEADLIGHTS ── */}
            {/* Left headlight (rectangular, Land Cruiser style) */}
            <rect x="305" y="300" width="55" height="55" rx="3" strokeWidth="2" opacity="0.95"/>
            <rect x="310" y="305" width="45" height="45" rx="2" strokeWidth="1" opacity="0.6"/>
            {/* Headlight inner detail */}
            <circle cx="332" cy="327" r="12" strokeWidth="1.2" opacity="0.8"/>
            <circle cx="332" cy="327" r="6" strokeWidth="1" opacity="0.6"/>
            <line x1="348" y1="307" x2="348" y2="350" strokeWidth="0.8" opacity="0.5"/>

            {/* Right headlight (perspective, smaller) */}
            <path d="M 638 292 L 700 290 L 708 340 L 646 343 Z" strokeWidth="2" opacity="0.9"/>
            <path d="M 644 297 L 698 295 L 704 336 L 650 338 Z" strokeWidth="1" opacity="0.5"/>
            <circle cx="674" cy="317" r="10" strokeWidth="1.2" opacity="0.8"/>

            {/* ── HOOD ── */}
            <path d="M 300 290 L 680 275 L 690 330 L 308 345 Z"
              strokeWidth="1.8" fill="url(#bodyGrad)" opacity="0.5"/>
            {/* Hood lines */}
            <path d="M 360 290 L 365 343" strokeWidth="0.9" opacity="0.6"/>
            <path d="M 620 280 L 626 338" strokeWidth="0.9" opacity="0.6"/>
            <path d="M 380 291 L 620 283" strokeWidth="0.8" strokeDasharray="5 3" opacity="0.4"/>

            {/* ── FRONT BUMPER ── */}
            <path d="M 308 455 L 712 443 L 720 490 L 300 500 Z"
              strokeWidth="1.8" fill="url(#bodyGrad)" opacity="0.5"/>
            {/* Bumper details */}
            <path d="M 340 457 L 340 492" strokeWidth="1.2" opacity="0.7"/>
            <path d="M 670 445 L 672 488" strokeWidth="1.2" opacity="0.7"/>
            {/* Fog light left */}
            <ellipse cx="340" cy="468" rx="18" ry="14" strokeWidth="1.5" opacity="0.85"/>
            <ellipse cx="340" cy="468" rx="10" ry="8" strokeWidth="1" opacity="0.6"/>
            {/* Fog light right */}
            <ellipse cx="672" cy="460" rx="16" ry="12" strokeWidth="1.5" opacity="0.85"/>
            <ellipse cx="672" cy="460" rx="9" ry="7" strokeWidth="1" opacity="0.6"/>
            {/* Winch hook */}
            <path d="M 470 457 L 510 457 L 510 470 L 470 470 Z" strokeWidth="1.2" opacity="0.7"/>
            <line x1="490" y1="457" x2="490" y2="445" strokeWidth="1.5" opacity="0.7"/>

            {/* ── LEFT DOOR & BODY SIDE ── */}
            <path d="M 120 270 L 120 470 L 160 475" strokeWidth="1.8" opacity="0.8"/>
            {/* Door handle */}
            <path d="M 155 370 L 190 368 L 190 378 L 155 380 Z" strokeWidth="1" opacity="0.6"/>

            {/* ── SIDE MIRROR LEFT ── */}
            <path d="M 265 235 L 230 245 L 228 265 L 268 255 Z" strokeWidth="1.5" opacity="0.85"/>

            {/* ── SIDE MIRROR RIGHT (perspective) ── */}
            <path d="M 695 235 L 730 230 L 728 252 L 692 258 Z" strokeWidth="1.5" opacity="0.85"/>

            {/* ── ANTENNA ── */}
            <line x1="490" y1="140" x2="490" y2="105" strokeWidth="1.2" opacity="0.7"/>
            <circle cx="490" cy="104" r="3" strokeWidth="1" opacity="0.7"/>

            {/* ── BODY CREASE LINES ── */}
            <path d="M 120 340 Q 300 335 680 320" strokeWidth="1" strokeDasharray="6 3" opacity="0.5"/>
          </g>

          {/* ── FRONT LEFT WHEEL (large, close) ── */}
          <g filter="url(#glow)">
            {/* Tire */}
            <ellipse cx="215" cy="500" rx="95" ry="98" stroke="#38bdf8" strokeWidth="2.5" opacity="0.95"/>
            <ellipse cx="215" cy="500" rx="85" ry="88" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="5 3" opacity="0.5"/>
            {/* Rim */}
            <ellipse cx="215" cy="500" rx="62" ry="64" stroke="#38bdf8" strokeWidth="2" opacity="0.9"/>
            {/* Hub */}
            <ellipse cx="215" cy="500" rx="22" ry="22" stroke="#38bdf8" strokeWidth="2" opacity="0.95"/>
            <circle cx="215" cy="500" r="8" fill="#38bdf8" opacity="0.9"/>
            {/* Spokes - 6 spoke Land Cruiser style */}
            <g stroke="#38bdf8" strokeWidth="1.8" opacity="0.85">
              <line x1="215" y1="478" x2="215" y2="436"/>
              <line x1="215" y1="522" x2="215" y2="564"/>
              <line x1="237" y1="490" x2="272" y2="470"/>
              <line x1="193" y1="510" x2="158" y2="530"/>
              <line x1="237" y1="510" x2="272" y2="530"/>
              <line x1="193" y1="490" x2="158" y2="470"/>
            </g>
            {/* Brake disc detail */}
            <ellipse cx="215" cy="500" rx="40" ry="41" stroke="#38bdf8" strokeWidth="0.8" opacity="0.4"/>
          </g>

          {/* ── FRONT RIGHT WHEEL (perspective, smaller) ── */}
          <g filter="url(#glow2)">
            <ellipse cx="648" cy="508" rx="62" ry="64" stroke="#38bdf8" strokeWidth="2" opacity="0.8"/>
            <ellipse cx="648" cy="508" rx="54" ry="56" stroke="#38bdf8" strokeWidth="0.7" strokeDasharray="4 3" opacity="0.45"/>
            <ellipse cx="648" cy="508" rx="40" ry="41" stroke="#38bdf8" strokeWidth="1.6" opacity="0.85"/>
            <ellipse cx="648" cy="508" rx="14" ry="14" stroke="#38bdf8" strokeWidth="1.6" opacity="0.9"/>
            <circle cx="648" cy="508" r="6" fill="#38bdf8" opacity="0.85"/>
            <g stroke="#38bdf8" strokeWidth="1.4" opacity="0.75">
              <line x1="648" y1="494" x2="648" y2="467"/>
              <line x1="648" y1="522" x2="648" y2="549"/>
              <line x1="661" y1="501" x2="681" y2="489"/>
              <line x1="635" y1="515" x2="615" y2="527"/>
              <line x1="661" y1="515" x2="681" y2="527"/>
              <line x1="635" y1="501" x2="615" y2="489"/>
            </g>
          </g>

          {/* ── WHEEL ARCHES ── */}
          <g filter="url(#glow)" stroke="#38bdf8" strokeWidth="2.2" fill="none">
            {/* Left arch */}
            <path d="M 118 468 Q 122 390 215 388 Q 310 386 312 468" opacity="0.9"/>
            {/* Right arch (perspective) */}
            <path d="M 570 472 Q 576 412 648 410 Q 722 408 726 472" opacity="0.85"/>
          </g>

          {/* ── DOOR SILL / RUNNING BOARD ── */}
          <g filter="url(#glow2)" stroke="#38bdf8" strokeWidth="1.2" opacity="0.6">
            <path d="M 118 465 L 308 460 L 308 480 L 118 482 Z"/>
          </g>

          {/* ── NODE DOTS at key corners ── */}
          <g fill="#38bdf8" filter="url(#glow)">
            <circle cx="230" cy="155" r="3.5" opacity="0.9"/>
            <circle cx="680" cy="140" r="3.5" opacity="0.9"/>
            <circle cx="740" cy="170" r="3.5" opacity="0.9"/>
            <circle cx="120" cy="270" r="3.5" opacity="0.9"/>
            <circle cx="300" cy="290" r="3.5" opacity="0.9"/>
            <circle cx="680" cy="275" r="3.5" opacity="0.9"/>
            <circle cx="720" cy="480" r="3" opacity="0.85"/>
            <circle cx="300" cy="490" r="3" opacity="0.85"/>
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
