export interface QuotationInput {
  vehicleValueUsd: number;
  vehicleYear: number;
  vehicleType: string;
  engineCC?: number;
  originCountry: string;
}

export interface QuotationResult {
  vehicleValueUsd: number;
  freightInsuranceUsd: number;
  cifUsd: number;
  ga: number;
  gaRate: number;
  ivaUsd: number;
  ivaRate: number;
  iceUsd: number;
  iceRate: number;
  otherFeesUsd: number;
  totalDutiesUsd: number;
  totalUsd: number;
  totalBob: number;
  breakdown: string;
}

const USD_TO_BOB = 6.96;
const IVA_RATE = 0.1494;
const RC_IVA_RATE = 0.03;

function getFreightRate(country: string): number {
  const rates: Record<string, number> = {
    "Estados Unidos": 0.10,
    "Japón": 0.14,
    "China": 0.12,
    "Alemania": 0.13,
    "Corea del Sur": 0.13,
    "Brasil": 0.07,
    "Argentina": 0.06,
    "Chile": 0.05,
    "Perú": 0.04,
    "Colombia": 0.05,
  };
  return rates[country] ?? 0.10;
}

function getGA(ageYears: number, vehicleType: string): number {
  if (vehicleType === "camion" || vehicleType === "bus") {
    return ageYears <= 5 ? 0.10 : 0.25;
  }
  if (ageYears <= 2) return 0.10;
  if (ageYears <= 5) return 0.20;
  return 0.30;
}

function getICE(ageYears: number, engineCC: number): number {
  if (ageYears <= 2) {
    if (engineCC <= 1500) return 0.10;
    if (engineCC <= 2000) return 0.18;
    return 0.30;
  } else {
    if (engineCC <= 1500) return 0.18;
    if (engineCC <= 2000) return 0.30;
    return 0.48;
  }
}

export function calculateImportCost(input: QuotationInput): QuotationResult {
  const currentYear = new Date().getFullYear();
  const ageYears = currentYear - input.vehicleYear;
  const cc = input.engineCC ?? 1800;

  const freightRate = getFreightRate(input.originCountry);
  const freightInsuranceUsd = input.vehicleValueUsd * freightRate;
  const cifUsd = input.vehicleValueUsd + freightInsuranceUsd;

  const gaRate = getGA(ageYears, input.vehicleType);
  const ga = cifUsd * gaRate;

  const ivaBase = cifUsd + ga;
  const ivaUsd = ivaBase * IVA_RATE;

  const iceRate = getICE(ageYears, cc);
  const iceUsd = cifUsd * iceRate;

  const rcIva = cifUsd * RC_IVA_RATE;

  const otherFeesUsd = 800 + (ageYears > 5 ? 400 : 200);

  const totalDutiesUsd = ga + ivaUsd + iceUsd + rcIva + otherFeesUsd;
  const totalUsd = input.vehicleValueUsd + totalDutiesUsd + freightInsuranceUsd;
  const totalBob = totalUsd * USD_TO_BOB;

  const breakdown = [
    `Valor del vehículo: $${input.vehicleValueUsd.toLocaleString()}`,
    `Flete + Seguro (${(freightRate * 100).toFixed(0)}%): $${freightInsuranceUsd.toFixed(0)}`,
    `Valor CIF: $${cifUsd.toFixed(0)}`,
    `GA (${(gaRate * 100).toFixed(0)}%): $${ga.toFixed(0)}`,
    `IVA (${(IVA_RATE * 100).toFixed(2)}%): $${ivaUsd.toFixed(0)}`,
    `ICE (${(iceRate * 100).toFixed(0)}%): $${iceUsd.toFixed(0)}`,
    `RC-IVA (${(RC_IVA_RATE * 100).toFixed(0)}%): $${rcIva.toFixed(0)}`,
    `Trámites y nacionalización: $${otherFeesUsd}`,
    `TOTAL ESTIMADO: $${totalUsd.toFixed(0)} USD / Bs. ${totalBob.toFixed(0)}`,
  ].join("\n");

  return {
    vehicleValueUsd: input.vehicleValueUsd,
    freightInsuranceUsd,
    cifUsd,
    ga,
    gaRate,
    ivaUsd,
    ivaRate: IVA_RATE,
    iceUsd,
    iceRate,
    otherFeesUsd,
    totalDutiesUsd,
    totalUsd,
    totalBob,
    breakdown,
  };
}
