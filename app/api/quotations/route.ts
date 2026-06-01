import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { quotations } from "@/lib/schema";
import { calculateImportCost } from "@/lib/calculator";
import { sendWhatsAppNotification } from "@/lib/whatsapp";

const schema = z.object({
  customerName: z.string().min(2),
  customerPhone: z.string().min(7),
  customerEmail: z.string().email().optional().or(z.literal("")),
  vehicleMake: z.string().min(1),
  vehicleModel: z.string().min(1),
  vehicleYear: z.coerce.number().min(1990).max(new Date().getFullYear() + 1),
  vehicleType: z.string().min(1),
  engineCC: z.coerce.number().min(600).max(10000).optional(),
  originCountry: z.string().min(1),
  vehicleValueUsd: z.coerce.number().min(500),
  notes: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const calc = calculateImportCost({
      vehicleValueUsd: data.vehicleValueUsd,
      vehicleYear: data.vehicleYear,
      vehicleType: data.vehicleType,
      engineCC: data.engineCC,
      originCountry: data.originCountry,
    });

    const [inserted] = await db
      .insert(quotations)
      .values({
        customerName: data.customerName,
        customerPhone: data.customerPhone,
        customerEmail: data.customerEmail || null,
        vehicleMake: data.vehicleMake,
        vehicleModel: data.vehicleModel,
        vehicleYear: data.vehicleYear,
        vehicleType: data.vehicleType,
        engineCC: data.engineCC ?? null,
        originCountry: data.originCountry,
        vehicleValueUsd: String(data.vehicleValueUsd),
        estimatedCifUsd: String(calc.cifUsd.toFixed(2)),
        estimatedDutiesUsd: String(calc.totalDutiesUsd.toFixed(2)),
        estimatedTotalUsd: String(calc.totalUsd.toFixed(2)),
        estimatedTotalBob: String(calc.totalBob.toFixed(2)),
        notes: data.notes || null,
      })
      .returning();

    await sendWhatsAppNotification({
      customerName: data.customerName,
      customerPhone: data.customerPhone,
      vehicleMake: data.vehicleMake,
      vehicleModel: data.vehicleModel,
      vehicleYear: data.vehicleYear,
      originCountry: data.originCountry,
      vehicleValueUsd: data.vehicleValueUsd,
      totalUsd: calc.totalUsd,
      totalBob: calc.totalBob,
      quotationId: inserted.id,
    }).catch((err) => {
      console.error("WhatsApp notification failed:", err);
    });

    return NextResponse.json({
      id: inserted.id,
      vehicleValueUsd: data.vehicleValueUsd,
      freightInsuranceUsd: calc.freightInsuranceUsd,
      cifUsd: calc.cifUsd,
      gaRate: calc.gaRate,
      ga: calc.ga,
      ivaRate: calc.ivaRate,
      ivaUsd: calc.ivaUsd,
      iceRate: calc.iceRate,
      iceUsd: calc.iceUsd,
      otherFeesUsd: calc.otherFeesUsd,
      totalDutiesUsd: calc.totalDutiesUsd,
      totalUsd: calc.totalUsd,
      totalBob: calc.totalBob,
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Datos inválidos", details: err.errors }, { status: 400 });
    }
    console.error("Quotation API error:", err);
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
  }
}
