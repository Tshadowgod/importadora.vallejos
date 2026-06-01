"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  customerName: z.string().min(2, "Nombre requerido"),
  customerPhone: z.string().min(7, "Teléfono requerido"),
  customerEmail: z.string().email("Email inválido").optional().or(z.literal("")),
  vehicleMake: z.string().min(1, "Marca requerida"),
  vehicleModel: z.string().min(1, "Modelo requerido"),
  vehicleYear: z.coerce.number().min(1990).max(new Date().getFullYear() + 1),
  vehicleType: z.string().min(1, "Tipo requerido"),
  engineCC: z.coerce.number().min(600).max(10000).optional(),
  originCountry: z.string().min(1, "País de origen requerido"),
  vehicleValueUsd: z.coerce.number().min(500, "Valor mínimo $500"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

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

const VEHICLE_TYPES = [
  { value: "sedan", label: "Sedán / Hatchback" },
  { value: "suv", label: "SUV / Camioneta 4x4" },
  { value: "pickup", label: "Pickup / Doble Cabina" },
  { value: "camion", label: "Camión / Furgón" },
  { value: "bus", label: "Bus / Minibús" },
  { value: "moto", label: "Motocicleta" },
];

const ORIGIN_COUNTRIES = [
  "Estados Unidos",
  "Japón",
  "China",
  "Alemania",
  "Corea del Sur",
  "Brasil",
  "Argentina",
  "Chile",
  "Perú",
  "Colombia",
  "Otro",
];

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: currentYear - 1989 }, (_, i) => currentYear - i);

function ResultCard({ result, onReset }: { result: QuotationResult; onReset: () => void }) {
  const format = (n: number) =>
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
        <p className="text-slate-400 text-sm mt-1">Estimado generado exitosamente</p>
      </div>

      {/* Total highlight */}
      <div className="bg-electric-500/10 border border-electric-500/30 rounded-2xl p-6 text-center">
        <p className="text-slate-400 text-sm mb-1">COSTO TOTAL ESTIMADO DE IMPORTACIÓN</p>
        <p className="text-4xl font-black text-electric-400 text-glow">
          ${format(result.totalUsd)} USD
        </p>
        <p className="text-xl text-slate-300 font-bold mt-1">
          Bs. {format(result.totalBob)}
        </p>
        <p className="text-xs text-slate-500 mt-3">
          * Cotización referencial. El monto final puede variar según tipo de cambio y resoluciones aduaneras vigentes.
        </p>
      </div>

      {/* Breakdown */}
      <div className="card-dark rounded-2xl p-5 space-y-3">
        <h4 className="text-white font-bold text-sm tracking-wide mb-3">DESGLOSE DETALLADO</h4>
        {[
          { label: "Valor del vehículo", value: result.vehicleValueUsd, highlight: false },
          { label: `Flete + Seguro`, value: result.freightInsuranceUsd, highlight: false },
          { label: "Valor CIF (base imponible)", value: result.cifUsd, highlight: true },
          { label: `Gravamen Arancelario GA (${(result.gaRate * 100).toFixed(0)}%)`, value: result.ga, highlight: false },
          { label: `IVA (${(result.ivaRate * 100).toFixed(2)}%)`, value: result.ivaUsd, highlight: false },
          { label: `ICE (${(result.iceRate * 100).toFixed(0)}%)`, value: result.iceUsd, highlight: false },
          { label: "Trámites y nacionalización", value: result.otherFeesUsd, highlight: false },
          { label: "Total impuestos y aranceles", value: result.totalDutiesUsd, highlight: true },
        ].map(({ label, value, highlight }) => (
          <div key={label} className={`flex justify-between items-center py-1.5 ${highlight ? "border-t border-electric-500/20 mt-1 pt-2.5" : ""}`}>
            <span className={`text-sm ${highlight ? "text-electric-400 font-semibold" : "text-slate-400"}`}>
              {label}
            </span>
            <span className={`text-sm font-bold ${highlight ? "text-electric-400" : "text-white"}`}>
              ${format(value)}
            </span>
          </div>
        ))}
      </div>

      {/* WhatsApp confirmation */}
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-start gap-3">
        <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <div>
          <p className="text-green-400 font-semibold text-sm">Notificación enviada</p>
          <p className="text-slate-400 text-xs mt-0.5">
            Te contactaremos al <span className="text-white font-medium">+591 65073163</span> para coordinar los pagos y trámites.
          </p>
        </div>
      </div>

      <button
        onClick={onReset}
        className="w-full btn-outline py-3 rounded-xl font-semibold"
      >
        Realizar otra cotización
      </button>
    </div>
  );
}

export default function QuotationForm() {
  const [result, setResult] = useState<QuotationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/quotations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? "Error al procesar la cotización");
      }
      const json = await res.json();
      setResult(json);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error inesperado");
    } finally {
      setIsLoading(false);
    }
  };

  if (result) {
    return <ResultCard result={result} onReset={() => { setResult(null); reset(); }} />;
  }

  const inputClass = "input-dark w-full rounded-xl px-4 py-3 text-sm placeholder-slate-500";
  const errorClass = "text-red-400 text-xs mt-1";
  const labelClass = "block text-slate-300 text-sm font-medium mb-1.5";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Customer info */}
      <div>
        <h3 className="text-electric-400 font-bold text-sm tracking-widest mb-4">DATOS DE CONTACTO</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Nombre completo *</label>
            <input {...register("customerName")} placeholder="Tu nombre" className={inputClass} />
            {errors.customerName && <p className={errorClass}>{errors.customerName.message}</p>}
          </div>
          <div>
            <label className={labelClass}>WhatsApp / Teléfono *</label>
            <input {...register("customerPhone")} placeholder="+591 70000000" className={inputClass} />
            {errors.customerPhone && <p className={errorClass}>{errors.customerPhone.message}</p>}
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Email (opcional)</label>
            <input {...register("customerEmail")} type="email" placeholder="tu@email.com" className={inputClass} />
            {errors.customerEmail && <p className={errorClass}>{errors.customerEmail.message}</p>}
          </div>
        </div>
      </div>

      {/* Vehicle info */}
      <div>
        <h3 className="text-electric-400 font-bold text-sm tracking-widest mb-4">DATOS DEL VEHÍCULO</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Marca *</label>
            <input {...register("vehicleMake")} placeholder="Toyota, Ford, BMW..." className={inputClass} />
            {errors.vehicleMake && <p className={errorClass}>{errors.vehicleMake.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Modelo *</label>
            <input {...register("vehicleModel")} placeholder="Hilux, Ranger, X5..." className={inputClass} />
            {errors.vehicleModel && <p className={errorClass}>{errors.vehicleModel.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Año *</label>
            <select {...register("vehicleYear")} className={inputClass}>
              <option value="">Seleccionar año</option>
              {YEARS.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
            {errors.vehicleYear && <p className={errorClass}>{errors.vehicleYear.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Tipo de vehículo *</label>
            <select {...register("vehicleType")} className={inputClass}>
              <option value="">Seleccionar tipo</option>
              {VEHICLE_TYPES.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
            {errors.vehicleType && <p className={errorClass}>{errors.vehicleType.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Motor (cc)</label>
            <input {...register("engineCC")} type="number" placeholder="1800" className={inputClass} />
            {errors.engineCC && <p className={errorClass}>{errors.engineCC.message}</p>}
          </div>
          <div>
            <label className={labelClass}>País de origen *</label>
            <select {...register("originCountry")} className={inputClass}>
              <option value="">Seleccionar país</option>
              {ORIGIN_COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {errors.originCountry && <p className={errorClass}>{errors.originCountry.message}</p>}
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>
              Valor del vehículo (USD) *
              <span className="text-slate-500 font-normal ml-2 text-xs">Precio de compra o de mercado</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
              <input
                {...register("vehicleValueUsd")}
                type="number"
                placeholder="15000"
                className={`${inputClass} pl-8`}
              />
            </div>
            {errors.vehicleValueUsd && <p className={errorClass}>{errors.vehicleValueUsd.message}</p>}
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Notas adicionales (opcional)</label>
            <textarea
              {...register("notes")}
              rows={3}
              placeholder="Condición del vehículo, características especiales, preguntas..."
              className={`${inputClass} resize-none`}
            />
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-navy-800/50 border border-electric-500/10 rounded-xl p-4">
        <p className="text-slate-500 text-xs leading-relaxed">
          Al enviar este formulario, recibirás una cotización estimada basada en los aranceles aduaneros vigentes en Bolivia (GA, IVA, ICE, RC-IVA).
          El monto es referencial y puede variar. Nos contactaremos contigo por WhatsApp para confirmar detalles y coordinar el proceso.
        </p>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary w-full py-4 rounded-xl text-base font-bold disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {isLoading ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Calculando cotización...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Calcular Cotización
          </>
        )}
      </button>
    </form>
  );
}
