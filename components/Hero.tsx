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

      {/* Car image - Toyota Land Cruiser wireframe photo */}
      <div className="absolute right-[-40px] top-1/2 -translate-y-[50%] w-[58%] max-w-[780px] hidden lg:block pointer-events-none animate-float">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/car-hero.png"
          alt="Toyota Land Cruiser wireframe"
          className="w-full h-auto object-contain"
        />
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
