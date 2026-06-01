"use server";
import { getDb, ensureTable } from "@/lib/db";
import { quotations } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function marcarAtendido(id: number) {
  await ensureTable();
  const db = getDb();
  await db.update(quotations).set({ status: "atendido" }).where(eq(quotations.id, id));
  revalidatePath("/admin/cotizaciones");
}

export async function marcarPendiente(id: number) {
  await ensureTable();
  const db = getDb();
  await db.update(quotations).set({ status: "pendiente" }).where(eq(quotations.id, id));
  revalidatePath("/admin/cotizaciones");
}

export async function eliminarCotizacion(id: number) {
  await ensureTable();
  const db = getDb();
  await db.delete(quotations).where(eq(quotations.id, id));
  revalidatePath("/admin/cotizaciones");
}
