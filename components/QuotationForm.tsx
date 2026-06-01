"use client";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// ── Types ──────────────────────────────────────────────────────────────────
interface Vehiculo {
  clase: string;
  marca: string;
  tipo: string;
  subtipo: string;
  cilindrada: number;
  traccion: string;
  transmision: string;
  combustible: string;
  anio: number;
  paisOrigen: string;
  otras: string;
  precioFobUsd: number;
}

interface QuotationResult {
  id: number;
  vehicleValueUsd: number;
  freightInsuranceUsd: number;
  cifUsd: number;
  gaRate: number;
  ga: number;
  ivaRate: number;
  ivaUsd: number;
  iceRate: number;
  iceUsd: number;
  otherFeesUsd: number;
  totalDutiesUsd: number;
  totalUsd: number;
  totalBob: number;
}

// ── Schema ─────────────────────────────────────────────────────────────────
const schema = z.object({
  customerName: z.string().min(2, "Nombre requerido"),
  customerPhone: z.string().min(7, "Teléfono requerido"),
  customerEmail: z.string().email("Email inválido").optional().or(z.literal("")),
  notes: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

// ── Result Card ────────────────────────────────────────────────────────────
function ResultCard({
  result,
  vehiculo,
  onReset,
}: {
  result: QuotationResult;
  vehiculo: Vehiculo;
  onReset: () => void;
}) {
  const fmt = (n: number) =>
    n.toLocaleString("es-BO", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  return (
    <div className="space-y-6 animate-[fadeIn_0.4s_ease]">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-electric-500/20 border border-electric-500/40 mb-4">
          <svg className="w-8 h-8 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-white">Cotización #{result.id}</h3>
        <p className="text-slate-400 text-sm mt-1">
          {vehiculo.marca} {vehiculo.tipo} {vehiculo.subtipo} — {vehiculo.anio}
        </p>
      </div>

      {/* Total */}
      <div className="bg-electric-500/10 border border-electric-500/30 rounded-2xl p-6 text-center">
        <p className="text-slate-400 text-sm mb-1">COSTO TOTAL ESTIMADO DE IMPORTACIÓN</p>
        <p className="text-4xl font-black text-electric-400 text-glow">${fmt(result.totalUsd)} USD</p>
        <p className="text-xl text-slate-300 font-bold mt-1">Bs. {fmt(result.totalBob)}</p>
        <p className="text-xs text-slate-500 mt-3">
          * Cotización referencial basada en precio FOB oficial de Aduana Bolivia.
        </p>
      </div>

      {/* Breakdown */}
      <div className="card-dark rounded-2xl p-5 space-y-3">
        <h4 className="text-white font-bold text-sm tracking-wide mb-3">DESGLOSE DETALLADO</h4>
        {[
          { label: `Precio FOB oficial (${vehiculo.anio})`, value: result.vehicleValueUsd, highlight: false },
          { label: "Flete + Seguro", value: result.freightInsuranceUsd, highlight: false },
          { label: "Valor CIF (base imponible)", value: result.cifUsd, highlight: true },
          { label: `Gravamen Arancelario GA (${(result.gaRate * 100).toFixed(0)}%)`, value: result.ga, highlight: false },
          { label: `IVA (${(result.ivaRate * 100).toFixed(2)}%)`, value: result.ivaUsd, highlight: false },
          { label: `ICE (${(result.iceRate * 100).toFixed(0)}%)`, value: result.iceUsd, highlight: false },
          { label: "Trámites y nacionalización", value: result.otherFeesUsd, highlight: false },
          { label: "Total impuestos y aranceles", value: result.totalDutiesUsd, highlight: true },
        ].map(({ label, value, highlight }) => (
          <div key={label} className={`flex justify-between items-center py-1.5 ${highlight ? "border-t border-electric-500/20 mt-1 pt-2.5" : ""}`}>
            <span className={`text-sm ${highlight ? "text-electric-400 font-semibold" : "text-slate-400"}`}>{label}</span>
            <span className={`text-sm font-bold ${highlight ? "text-electric-400" : "text-white"}`}>${fmt(value)}</span>
          </div>
        ))}
      </div>

      {/* Vehicle info */}
      <div className="card-dark rounded-xl p-4 grid grid-cols-2 gap-2 text-xs">
        <div><span className="text-slate-500">Marca:</span> <span className="text-white font-semibold">{vehiculo.marca}</span></div>
        <div><span className="text-slate-500">Modelo:</span> <span className="text-white font-semibold">{vehiculo.tipo}</span></div>
        <div><span className="text-slate-500">Versión:</span> <span className="text-white font-semibold">{vehiculo.subtipo}</span></div>
        <div><span className="text-slate-500">Año:</span> <span className="text-white font-semibold">{vehiculo.anio}</span></div>
        <div><span className="text-slate-500">Motor:</span> <span className="text-white font-semibold">{vehiculo.cilindrada}cc</span></div>
        <div><span className="text-slate-500">Origen:</span> <span className="text-white font-semibold">{vehiculo.paisOrigen}</span></div>
        <div><span className="text-slate-500">Combustible:</span> <span className="text-white font-semibold">{vehiculo.combustible}</span></div>
        <div><span className="text-slate-500">Tracción:</span> <span className="text-white font-semibold">{vehiculo.traccion}</span></div>
      </div>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/59165073163?text=${encodeURIComponent(`Hola, acabo de cotizar mi vehículo en FROTED ADUANA (Cotización #${result.id}). ${vehiculo.marca} ${vehiculo.tipo} ${vehiculo.anio}. Quisiera coordinar los trámites de importación.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 transition-colors text-white font-bold py-4 rounded-xl"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Coordinar por WhatsApp — +591 65073163
      </a>

      <button onClick={onReset} className="w-full btn-outline py-3 rounded-xl font-semibold">
        Realizar otra cotización
      </button>
    </div>
  );
}

// ── Main Form ──────────────────────────────────────────────────────────────
export default function QuotationForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [result, setResult] = useState<QuotationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Vehicle search state
  const [marcas, setMarcas] = useState<string[]>([]);
  const [marcaInput, setMarcaInput] = useState("");
  const [marcaSuggestions, setMarcaSuggestions] = useState<string[]>([]);
  const [selectedMarca, setSelectedMarca] = useState("");
  const [modeloInput, setModeloInput] = useState("");
  const [anioInput, setAnioInput] = useState("");
  const [searchResults, setSearchResults] = useState<Vehiculo[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedVehiculo, setSelectedVehiculo] = useState<Vehiculo | null>(null);
  const [searched, setSearched] = useState(false);
  const marcaRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Load brands on mount
  useEffect(() => {
    fetch("/api/vehiculos?tipo=marcas")
      .then((r) => r.json())
      .then(setMarcas)
      .catch(() => {});
  }, []);

  // Filter brand suggestions
  useEffect(() => {
    if (!marcaInput) { setMarcaSuggestions([]); return; }
    const q = marcaInput.toLowerCase();
    setMarcaSuggestions(marcas.filter((m) => m.toLowerCase().includes(q)).slice(0, 8));
  }, [marcaInput, marcas]);

  // Close suggestions on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (marcaRef.current && !marcaRef.current.contains(e.target as Node)) {
        setMarcaSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  async function handleSearch() {
    if (!selectedMarca) return;
    setIsSearching(true);
    setSearched(true);
    setSelectedVehiculo(null);
    try {
      const params = new URLSearchParams({ marca: selectedMarca });
      if (modeloInput) params.set("modelo", modeloInput);
      if (anioInput) params.set("anio", anioInput);
      const res = await fetch(`/api/vehiculos?${params}`);
      const data = await res.json();
      setSearchResults(Array.isArray(data) ? data : []);
    } finally {
      setIsSearching(false);
    }
  }

  const onSubmit = async (data: FormData) => {
    if (!selectedVehiculo) return;
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/quotations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: data.customerName,
          customerPhone: data.customerPhone,
          customerEmail: data.customerEmail || "",
          vehicleMake: selectedVehiculo.marca,
          vehicleModel: selectedVehiculo.tipo,
          vehicleYear: selectedVehiculo.anio,
          vehicleType: claseToType(selectedVehiculo.clase),
          engineCC: selectedVehiculo.cilindrada || 1800,
          originCountry: mapPais(selectedVehiculo.paisOrigen),
          vehicleValueUsd: selectedVehiculo.precioFobUsd,
          notes: data.notes || "",
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? "Error al procesar la cotización");
      }
      setResult(await res.json());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error inesperado");
    } finally {
      setIsLoading(false);
    }
  };

  function handleReset() {
    setResult(null);
    setStep(1);
    setSelectedVehiculo(null);
    setSelectedMarca("");
    setMarcaInput("");
    setModeloInput("");
    setAnioInput("");
    setSearchResults([]);
    setSearched(false);
    reset();
  }

  if (result && selectedVehiculo) {
    return <ResultCard result={result} vehiculo={selectedVehiculo} onReset={handleReset} />;
  }

  const inputClass = "input-dark w-full rounded-xl px-4 py-3 text-sm placeholder-slate-500";
  const labelClass = "block text-slate-300 text-sm font-medium mb-1.5";

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2009 }, (_, i) => currentYear + 1 - i);

  return (
    <div className="space-y-8">

      {/* ── STEP INDICATOR ── */}
      <div className="flex items-center gap-3">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s ? "bg-electric-500 text-white" : "bg-navy-800 text-slate-500"}`}>
              {s}
            </div>
            <span className={`text-xs font-medium ${step >= s ? "text-electric-400" : "text-slate-500"}`}>
              {s === 1 ? "Buscar vehículo" : "Tus datos"}
            </span>
            {s < 2 && <div className="w-8 h-px bg-electric-500/20 mx-1" />}
          </div>
        ))}
      </div>

      {/* ── STEP 1: VEHICLE SEARCH ── */}
      {step === 1 && (
        <div className="space-y-6">
          <h3 className="text-electric-400 font-bold text-sm tracking-widest">
            BUSCAR VEHÍCULO — BASE DE DATOS ADUANA BOLIVIA
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Marca */}
            <div ref={marcaRef} className="relative">
              <label className={labelClass}>Marca *</label>
              <input
                value={marcaInput}
                onChange={(e) => { setMarcaInput(e.target.value); setSelectedMarca(""); }}
                placeholder="Toyota, Ford, BMW..."
                className={inputClass}
                autoComplete="off"
              />
              {marcaSuggestions.length > 0 && (
                <div className="absolute z-20 w-full mt-1 bg-navy-900 border border-electric-500/20 rounded-xl overflow-hidden shadow-xl">
                  {marcaSuggestions.map((m) => (
                    <button
                      key={m}
                      type="button"
                      className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:bg-electric-500/10 hover:text-white transition-colors"
                      onClick={() => { setSelectedMarca(m); setMarcaInput(m); setMarcaSuggestions([]); }}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Modelo */}
            <div>
              <label className={labelClass}>Modelo</label>
              <input
                value={modeloInput}
                onChange={(e) => setModeloInput(e.target.value)}
                placeholder="Hilux, Land Cruiser..."
                className={inputClass}
              />
            </div>

            {/* Año */}
            <div>
              <label className={labelClass}>Año</label>
              <select value={anioInput} onChange={(e) => setAnioInput(e.target.value)} className={inputClass}>
                <option value="">Todos los años</option>
                {years.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSearch}
            disabled={!selectedMarca || isSearching}
            className="btn-primary px-8 py-3 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSearching ? (
              <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Buscando...</>
            ) : (
              <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>Buscar en base de datos</>
            )}
          </button>

          {/* Search results */}
          {searched && !isSearching && (
            <div>
              {searchResults.length === 0 ? (
                <div className="bg-navy-800/50 border border-slate-700 rounded-xl p-6 text-center text-slate-400 text-sm">
                  No se encontraron resultados. Intenta con otra marca o modelo.
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-slate-500 text-xs mb-3">{searchResults.length} resultado(s) — Selecciona tu vehículo:</p>
                  <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
                    {searchResults.map((v, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedVehiculo(v)}
                        className={`w-full text-left p-4 rounded-xl border transition-all ${
                          selectedVehiculo === v
                            ? "border-electric-500 bg-electric-500/10"
                            : "border-electric-500/10 hover:border-electric-500/40 bg-navy-800/50 hover:bg-navy-800"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-white font-bold text-sm">
                              {v.marca} {v.tipo} <span className="text-slate-400 font-normal">{v.subtipo}</span>
                            </p>
                            <p className="text-slate-500 text-xs mt-0.5">
                              {v.anio} · {v.cilindrada > 0 ? `${v.cilindrada}cc` : v.combustible} · {v.traccion} · {v.transmision} · {v.paisOrigen}
                            </p>
                            {v.otras && <p className="text-slate-600 text-xs mt-0.5 truncate max-w-xs">{v.otras}</p>}
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-electric-400 font-black text-lg">${v.precioFobUsd.toLocaleString()}</p>
                            <p className="text-slate-500 text-xs">FOB oficial</p>
                          </div>
                        </div>
                        {selectedVehiculo === v && (
                          <div className="mt-2 flex items-center gap-1 text-electric-400 text-xs font-semibold">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                            Seleccionado
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {selectedVehiculo && (
            <button
              type="button"
              onClick={() => setStep(2)}
              className="btn-primary w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              Continuar con {selectedVehiculo.marca} {selectedVehiculo.tipo} {selectedVehiculo.anio}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          )}
        </div>
      )}

      {/* ── STEP 2: CONTACT INFO ── */}
      {step === 2 && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Selected vehicle summary */}
          {selectedVehiculo && (
            <div className="bg-electric-500/10 border border-electric-500/30 rounded-xl p-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-white font-bold text-sm">{selectedVehiculo.marca} {selectedVehiculo.tipo} {selectedVehiculo.subtipo}</p>
                <p className="text-slate-400 text-xs">{selectedVehiculo.anio} · {selectedVehiculo.cilindrada > 0 ? `${selectedVehiculo.cilindrada}cc` : ""} · {selectedVehiculo.paisOrigen}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-electric-400 font-black">${selectedVehiculo.precioFobUsd.toLocaleString()} FOB</p>
                <button type="button" onClick={() => setStep(1)} className="text-slate-500 text-xs hover:text-slate-300 underline">cambiar</button>
              </div>
            </div>
          )}

          <h3 className="text-electric-400 font-bold text-sm tracking-widest">DATOS DE CONTACTO</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Nombre completo *</label>
              <input {...register("customerName")} placeholder="Tu nombre" className={inputClass} />
              {errors.customerName && <p className="text-red-400 text-xs mt-1">{errors.customerName.message}</p>}
            </div>
            <div>
              <label className={labelClass}>WhatsApp / Teléfono *</label>
              <input {...register("customerPhone")} placeholder="+591 70000000" className={inputClass} />
              {errors.customerPhone && <p className="text-red-400 text-xs mt-1">{errors.customerPhone.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Email (opcional)</label>
              <input {...register("customerEmail")} type="email" placeholder="tu@email.com" className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Notas adicionales (opcional)</label>
              <textarea {...register("notes")} rows={3} placeholder="Preguntas, condiciones especiales..." className={`${inputClass} resize-none`} />
            </div>
          </div>

          <div className="bg-navy-800/50 border border-electric-500/10 rounded-xl p-4">
            <p className="text-slate-500 text-xs leading-relaxed">
              El precio FOB utilizado proviene de la base de datos oficial de Aduana Bolivia. La cotización es referencial e incluye GA, IVA, ICE y trámites. El monto final puede variar según resoluciones aduaneras vigentes.
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm">{error}</div>
          )}

          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(1)} className="btn-outline px-6 py-4 rounded-xl font-semibold">
              ← Atrás
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary flex-1 py-4 rounded-xl font-bold disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <><svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Calculando...</>
              ) : (
                <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>Calcular Cotización</>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

// ── Helpers ────────────────────────────────────────────────────────────────
function claseToType(clase: string): string {
  const c = clase.toUpperCase();
  if (c.includes("MOTO")) return "moto";
  if (c.includes("BUS") || c.includes("MINIBUS")) return "bus";
  if (c.includes("CAMION") || c.includes("FURGON")) return "camion";
  if (c.includes("PICKUP")) return "pickup";
  if (c.includes("SUV") || c.includes("CAMIONETA") || c.includes("JEEP")) return "suv";
  return "sedan";
}

function mapPais(pais: string): string {
  const map: Record<string, string> = {
    "ESTADOS UNIDOS": "Estados Unidos",
    "USA": "Estados Unidos",
    "JAPÓN": "Japón",
    "JAPON": "Japón",
    "CHINA": "China",
    "ALEMANIA": "Alemania",
    "COREA DEL SUR": "Corea del Sur",
    "BRASIL": "Brasil",
    "ARGENTINA": "Argentina",
    "CHILE": "Chile",
    "PERU": "Perú",
    "PERÚ": "Perú",
    "COLOMBIA": "Colombia",
    "MEXICO": "Estados Unidos",
    "MÉXICO": "Estados Unidos",
  };
  return map[pais.toUpperCase()] ?? "Estados Unidos";
}
