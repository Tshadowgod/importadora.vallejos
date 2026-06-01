"use client";
import { useState } from "react";
import { marcarAtendido, marcarPendiente, eliminarCotizacion } from "./actions";

export function CotizacionActions({ id, status }: { id: number; status: string }) {
  const [loading, setLoading] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  async function handleAtendido() {
    setLoading("atendido");
    if (status === "atendido") {
      await marcarPendiente(id);
    } else {
      await marcarAtendido(id);
    }
    setLoading(null);
  }

  async function handleEliminar() {
    if (!confirmDelete) {
      setConfirmDelete(true);
      return;
    }
    setLoading("eliminar");
    await eliminarCotizacion(id);
    setLoading(null);
  }

  return (
    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-electric-500/10">
      {/* Atendido toggle */}
      <button
        onClick={handleAtendido}
        disabled={loading !== null}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors disabled:opacity-50 ${
          status === "atendido"
            ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
            : "bg-slate-700/50 text-slate-400 hover:bg-green-500/20 hover:text-green-400"
        }`}
      >
        {loading === "atendido" ? (
          <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
          </svg>
        )}
        {status === "atendido" ? "Marcar pendiente" : "Marcar atendido"}
      </button>

      {/* Eliminar */}
      {!confirmDelete ? (
        <button
          onClick={handleEliminar}
          disabled={loading !== null}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-700/50 text-slate-400 hover:bg-red-500/20 hover:text-red-400 transition-colors disabled:opacity-50"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
          Eliminar
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-red-400 text-xs font-semibold">¿Confirmar?</span>
          <button
            onClick={handleEliminar}
            disabled={loading !== null}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors disabled:opacity-50"
          >
            {loading === "eliminar" ? "Eliminando..." : "Sí, eliminar"}
          </button>
          <button
            onClick={() => setConfirmDelete(false)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-700/50 text-slate-400 hover:bg-slate-700 transition-colors"
          >
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
}
