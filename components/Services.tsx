const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Despacho Aduanero",
    description: "Tramitamos todos los documentos de nacionalización de tu vehículo ante la Aduana Nacional de Bolivia.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Cotización Exacta",
    description: "Calculamos todos los impuestos: GA, IVA, ICE y RC-IVA. Sin sorpresas al momento de recoger tu vehículo.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Logística Internacional",
    description: "Coordinamos el transporte desde EE.UU., Japón, China, Europa y toda América del Sur hasta Bolivia.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Seguridad Total",
    description: "Tu vehículo asegurado durante todo el proceso. Seguimiento en tiempo real de cada etapa del trámite.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-electric-400 text-sm font-semibold tracking-wide">NUESTROS SERVICIOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            TODO LO QUE NECESITAS
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Desde la cotización hasta la entrega de placas, manejamos cada detalle
            de tu importación con precisión profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="card-dark rounded-2xl p-6 hover:border-electric-500/40 transition-all duration-300 group">
              <div className="text-electric-400 mb-4 group-hover:text-glow transition-all">
                {service.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
