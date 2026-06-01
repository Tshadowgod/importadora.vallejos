import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuotationForm from "@/components/QuotationForm";

export const metadata = {
  title: "Cotizar Importación | Importadora Vallejos",
  description: "Calcula el costo estimado de importación de tu vehículo a Bolivia incluyendo todos los aranceles e impuestos.",
};

export default function CotizarPage() {
  return (
    <main>
      <Header />

      <section className="min-h-screen bg-hero-gradient py-16">
        {/* Background grid */}
        <div
          className="fixed inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,165,233,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-3xl mx-auto px-4">
          {/* Page header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-electric-400 rounded-full animate-pulse" />
              <span className="text-electric-400 text-sm font-semibold tracking-wide">COTIZADOR ONLINE</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              COTIZA TU
              <br />
              <span className="text-electric-400 text-glow">IMPORTACIÓN</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Completa el formulario y obtén un estimado del costo total de importación
              incluyendo todos los aranceles aduaneros de Bolivia.
            </p>
          </div>

          {/* Form card */}
          <div className="card-dark rounded-3xl p-8 shadow-card">
            <QuotationForm />
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "100% Seguro",
                desc: "Tus datos están protegidos",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Respuesta Inmediata",
                desc: "Cotización en segundos",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: "Te Contactamos",
                desc: "Por WhatsApp para coordinar",
              },
            ].map((item) => (
              <div key={item.title} className="card-dark rounded-xl p-4 flex items-center gap-3">
                <div className="text-electric-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
