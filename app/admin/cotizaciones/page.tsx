import { getDb, ensureTable } from "@/lib/db";
import { quotations } from "@/lib/schema";
import { desc } from "drizzle-orm";
import { CotizacionActions } from "./CotizacionActions";

async function getCotizaciones() {
  try {
    await ensureTable();
    const db = getDb();
    return await db.select().from(quotations).orderBy(desc(quotations.createdAt));
  } catch (e) {
    console.error("Admin getCotizaciones error:", e);
    return null;
  }
}

function fmt(n: string | number) {
  return Number(n).toLocaleString("es-BO", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default async function AdminCotizacionesPage() {
  const data = await getCotizaciones();

  return (
    <main className="min-h-screen bg-navy-950 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-white">Cotizaciones</h1>
            <p className="text-slate-400 text-sm mt-1">Panel de administración — Vallejos Import</p>
          </div>
          {data && (
            <div className="bg-electric-500/10 border border-electric-500/20 rounded-xl px-5 py-3 text-center">
              <p className="text-3xl font-black text-electric-400">{data.length}</p>
              <p className="text-slate-400 text-xs">Total cotizaciones</p>
            </div>
          )}
        </div>

        {/* No DB */}
        {data === null && (
          <div className="card-dark rounded-2xl p-10 text-center">
            <p className="text-red-400 font-bold text-lg mb-2">Base de datos no configurada</p>
            <p className="text-slate-400 text-sm">
              Configura la variable <code className="bg-navy-800 px-2 py-0.5 rounded text-electric-400">DATABASE_URL</code> en Vercel para guardar y ver las cotizaciones.
            </p>
          </div>
        )}

        {/* Empty */}
        {data && data.length === 0 && (
          <div className="card-dark rounded-2xl p-10 text-center">
            <p className="text-slate-400 text-lg">Aún no hay cotizaciones registradas.</p>
          </div>
        )}

        {/* Table */}
        {data && data.length > 0 && (
          <div className="space-y-4">
            {data.map((q) => (
              <div key={q.id} className="card-dark rounded-2xl p-5 border border-electric-500/10 hover:border-electric-500/25 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  {/* Left: customer + vehicle */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-electric-400 font-black text-sm">#{q.id}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                        q.status === "pendiente"
                          ? "bg-yellow-500/15 text-yellow-400"
                          : "bg-green-500/15 text-green-400"
                      }`}>
                        {q.status}
                      </span>
                      <span className="text-slate-500 text-xs">
                        {new Date(q.createdAt).toLocaleDateString("es-BO", {
                          day: "2-digit", month: "2-digit", year: "numeric",
                          hour: "2-digit", minute: "2-digit",
                        })}
                      </span>
                    </div>

                    <p className="text-white font-bold text-lg">{q.customerName}</p>

                    <div className="flex flex-wrap gap-4 mt-1">
                      <a href={`https://wa.me/${q.customerPhone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 text-sm font-medium flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        {q.customerPhone}
                      </a>
                      {q.customerEmail && (
                        <span className="text-slate-400 text-sm">{q.customerEmail}</span>
                      )}
                    </div>

                    <p className="text-slate-300 text-sm mt-2">
                      <span className="font-semibold">{q.vehicleMake} {q.vehicleModel}</span>
                      {" · "}{q.vehicleYear}{" · "}{q.originCountry}
                      {q.engineCC ? ` · ${q.engineCC}cc` : ""}
                    </p>

                    {q.notes && (
                      <p className="text-slate-500 text-xs mt-1 italic">"{q.notes}"</p>
                    )}
                    <CotizacionActions id={q.id} status={q.status} />
                  </div>

                  {/* Right: prices */}
                  <div className="text-right shrink-0 space-y-1">
                    <div>
                      <p className="text-slate-500 text-xs">FOB oficial</p>
                      <p className="text-white font-bold">${fmt(q.vehicleValueUsd)}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Impuestos</p>
                      <p className="text-white font-bold">${fmt(q.estimatedDutiesUsd)}</p>
                    </div>
                    <div className="pt-1 border-t border-electric-500/20">
                      <p className="text-slate-500 text-xs">TOTAL ESTIMADO</p>
                      <p className="text-electric-400 font-black text-xl">${fmt(q.estimatedTotalUsd)}</p>
                      <p className="text-slate-400 text-xs">Bs. {fmt(q.estimatedTotalBob)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
