import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

let migrated = false;

export function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  return drizzle(neon(url), { schema });
}

export async function ensureTable() {
  if (migrated) return;
  const url = process.env.DATABASE_URL;
  if (!url) return;
  try {
    const sql = neon(url);
    await sql`
      CREATE TABLE IF NOT EXISTS quotations (
        id SERIAL PRIMARY KEY,
        customer_name VARCHAR(255) NOT NULL,
        customer_phone VARCHAR(50) NOT NULL,
        customer_email VARCHAR(255),
        vehicle_make VARCHAR(100) NOT NULL,
        vehicle_model VARCHAR(100) NOT NULL,
        vehicle_year INTEGER NOT NULL,
        vehicle_type VARCHAR(50) NOT NULL,
        engine_cc INTEGER,
        origin_country VARCHAR(100) NOT NULL,
        vehicle_value_usd DECIMAL(12,2) NOT NULL,
        estimated_cif_usd DECIMAL(12,2) NOT NULL,
        estimated_duties_usd DECIMAL(12,2) NOT NULL,
        estimated_total_usd DECIMAL(12,2) NOT NULL,
        estimated_total_bob DECIMAL(14,2) NOT NULL,
        notes TEXT,
        status VARCHAR(50) NOT NULL DEFAULT 'pendiente',
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;
    migrated = true;
  } catch (e) {
    console.warn("ensureTable failed:", e);
  }
}
