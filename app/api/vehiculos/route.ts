import { NextRequest, NextResponse } from "next/server";
import { getMarcas, searchVehiculos } from "@/lib/vehiculos";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const tipo = searchParams.get("tipo") ?? "search";

    if (tipo === "marcas") {
      return NextResponse.json(getMarcas());
    }

    const marca = searchParams.get("marca") ?? "";
    const modelo = searchParams.get("modelo") ?? "";
    const anio = searchParams.get("anio") ? parseInt(searchParams.get("anio")!) : undefined;

    if (!marca) {
      return NextResponse.json({ error: "Marca requerida" }, { status: 400 });
    }

    const results = searchVehiculos(marca, modelo || undefined, anio);
    return NextResponse.json(results);
  } catch (err) {
    console.error("Vehiculos API error:", err);
    return NextResponse.json({ error: "Error al leer la base de datos de vehículos" }, { status: 500 });
  }
}
