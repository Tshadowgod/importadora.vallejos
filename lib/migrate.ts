import { neon } from "@neondatabase/serverless";

async function migrate() {
  const sql = neon(process.env.DATABASE_URL!);

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

  console.log("✅ Tabla 'quotations' creada o ya existente.");
  process.exit(0);
}

migrate().catch((e) => {
  console.error("Migration failed:", e);
  process.exit(1);
});
