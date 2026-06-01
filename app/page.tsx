import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />

      {/* Nosotros + Misión, Visión y Valores */}
      <section id="nosotros" className="py-24 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4">

          {/* Quiénes somos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-electric-400 text-sm font-semibold tracking-wide">QUIÉNES SOMOS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                EXPERTOS EN
                <br />
                <span className="text-electric-400">IMPORTACIÓN A BOLIVIA</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Importadora Vallejos cuenta con más de 15 años de experiencia en trámites
                aduaneros. Hemos importado más de 500 vehículos para clientes en toda Bolivia.
                Conocemos cada detalle de la normativa vigente.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Trabajamos con total transparencia: te mostramos cada impuesto y arancel
                antes de comenzar, sin costos ocultos ni sorpresas al final del proceso.
              </p>
              <Link href="/cotizar" className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2">
                Obtener cotización gratis
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🚗", title: "+500", sub: "Vehículos importados" },
                { icon: "🌍", title: "10+", sub: "Países de origen" },
                { icon: "⚡", title: "15+", sub: "Años de experiencia" },
                { icon: "✅", title: "100%", sub: "Trámites exitosos" },
              ].map((item) => (
                <div key={item.title} className="card-dark rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-3xl font-black text-electric-400 text-glow">{item.title}</div>
                  <div className="text-slate-400 text-sm mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Divisor */}
          <div className="border-t border-electric-500/10 mb-20" />

          {/* Misión, Visión y Valores */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white">
              MISIÓN, VISIÓN <span className="text-electric-400">Y VALORES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Misión */}
            <div className="card-dark rounded-2xl p-8 border border-electric-500/10 hover:border-electric-500/30 transition-colors">
              <div className="w-12 h-12 bg-electric-500/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-electric-400 font-black text-xl tracking-wide mb-4">MISIÓN</h3>
              <p className="text-slate-400 leading-relaxed">
                Importar vehículos desde subastas en Estados Unidos, restaurarlos bajo estándares técnicos adecuados y comercializarlos en el mercado boliviano, ofreciendo precios competitivos, transparencia en el proceso de importación y calidad en el servicio al cliente.
              </p>
            </div>

            {/* Visión */}
            <div className="card-dark rounded-2xl p-8 border border-electric-500/10 hover:border-electric-500/30 transition-colors">
              <div className="w-12 h-12 bg-electric-500/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-electric-400 font-black text-xl tracking-wide mb-4">VISIÓN</h3>
              <p className="text-slate-400 leading-relaxed">
                Ser una empresa referente en Bolivia en la importación y comercialización de vehículos provenientes de Estados Unidos, reconocida por su responsabilidad, confiabilidad, eficiencia logística y capacidad de generar valor económico a través del comercio internacional.
              </p>
            </div>

            {/* Valores */}
            <div className="card-dark rounded-2xl p-8 border border-electric-500/10 hover:border-electric-500/30 transition-colors">
              <div className="w-12 h-12 bg-electric-500/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-electric-400 font-black text-xl tracking-wide mb-4">VALORES</h3>
              <ul className="space-y-3">
                {[
                  { name: "Transparencia", desc: "Claridad en los procesos de compra, importación y venta." },
                  { name: "Responsabilidad", desc: "Cumplimiento de normativas aduaneras y comerciales." },
                  { name: "Compromiso", desc: "Información veraz y vehículos en condiciones óptimas." },
                  { name: "Calidad", desc: "Vehículos restaurados bajo estándares técnicos adecuados." },
                  { name: "Ética empresarial", desc: "Respeto a la normativa nacional e internacional." },
                ].map((v) => (
                  <li key={v.name} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-400 mt-2 shrink-0" />
                    <span className="text-slate-400 text-sm"><span className="text-white font-semibold">{v.name}:</span> {v.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-electric-600 to-electric-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            ¿LISTO PARA IMPORTAR TU VEHÍCULO?
          </h2>
          <p className="text-electric-100 text-lg mb-8">
            Cotiza en menos de 2 minutos. Sin registro, sin compromiso.
          </p>
          <Link
            href="/cotizar"
            className="bg-white text-electric-600 font-black px-10 py-4 rounded-full text-lg hover:bg-slate-100 transition-colors shadow-xl inline-block"
          >
            Cotizar Ahora — Es Gratis
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
