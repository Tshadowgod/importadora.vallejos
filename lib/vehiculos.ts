import fs from "fs";
import path from "path";

export interface Vehiculo {
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

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  result.push(current.trim());
  return result;
}

let _cache: Vehiculo[] | null = null;

function getVehiculos(): Vehiculo[] {
  if (_cache) return _cache;
  const filePath = path.join(process.cwd(), "data", "precios_vehiculos_aduana.csv");
  const raw = fs.readFileSync(filePath, "utf-8");
  const lines = raw.split(/\r?\n/).slice(1);
  const result: Vehiculo[] = [];
  for (const line of lines) {
    if (!line.trim()) continue;
    const f = parseCSVLine(line);
    if (f.length < 12) continue;
    const precio = parseInt(f[11]);
    if (!precio) continue;
    result.push({
      clase: f[0],
      marca: f[1],
      tipo: f[2],
      subtipo: f[3],
      cilindrada: parseInt(f[4]) || 0,
      traccion: f[5],
      transmision: f[6],
      combustible: f[7],
      anio: parseInt(f[8]) || 0,
      paisOrigen: f[9],
      otras: f[10],
      precioFobUsd: precio,
    });
  }
  _cache = result;
  return result;
}

export function getMarcas(): string[] {
  return [...new Set(getVehiculos().map((v) => v.marca))].sort();
}

export function searchVehiculos(
  marca: string,
  tipo?: string,
  anio?: number
): Vehiculo[] {
  const m = marca.toLowerCase();
  const t = tipo?.toLowerCase() ?? "";
  return getVehiculos()
    .filter((v) => {
      if (!v.marca.toLowerCase().includes(m)) return false;
      if (t && !v.tipo.toLowerCase().includes(t) && !v.subtipo.toLowerCase().includes(t)) return false;
      if (anio && v.anio !== anio) return false;
      return true;
    })
    .sort((a, b) => b.anio - a.anio)
    .slice(0, 30);
}

export function claseToVehicleType(clase: string): string {
  const c = clase.toUpperCase();
  if (c.includes("MOTO")) return "moto";
  if (c.includes("BUS") || c.includes("MINIBUS")) return "bus";
  if (c.includes("CAMION") || c.includes("FURGON")) return "camion";
  if (c.includes("PICKUP")) return "pickup";
  if (c.includes("SUV") || c.includes("CAMIONETA") || c.includes("JEEP")) return "suv";
  return "sedan";
}
