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

      {/* About section */}
      <section id="nosotros" className="py-24 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-electric-400 text-sm font-semibold tracking-wide">QUIÉNES SOMOS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                EXPERTOS EN
                <br />
                <span className="text-electric-400">ADUANA BOLIVIANA</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Con más de 15 años de experiencia en trámites aduaneros, hemos importado
                más de 500 vehículos para clientes en toda Bolivia. Conocemos cada
                detalle de la normativa vigente.
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
