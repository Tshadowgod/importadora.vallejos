import { pgTable, serial, varchar, integer, decimal, timestamp, text } from "drizzle-orm/pg-core";

export const quotations = pgTable("quotations", {
  id: serial("id").primaryKey(),
  customerName: varchar("customer_name", { length: 255 }).notNull(),
  customerPhone: varchar("customer_phone", { length: 50 }).notNull(),
  customerEmail: varchar("customer_email", { length: 255 }),
  vehicleMake: varchar("vehicle_make", { length: 100 }).notNull(),
  vehicleModel: varchar("vehicle_model", { length: 100 }).notNull(),
  vehicleYear: integer("vehicle_year").notNull(),
  vehicleType: varchar("vehicle_type", { length: 50 }).notNull(),
  engineCC: integer("engine_cc"),
  originCountry: varchar("origin_country", { length: 100 }).notNull(),
  vehicleValueUsd: decimal("vehicle_value_usd", { precision: 12, scale: 2 }).notNull(),
  estimatedCifUsd: decimal("estimated_cif_usd", { precision: 12, scale: 2 }).notNull(),
  estimatedDutiesUsd: decimal("estimated_duties_usd", { precision: 12, scale: 2 }).notNull(),
  estimatedTotalUsd: decimal("estimated_total_usd", { precision: 12, scale: 2 }).notNull(),
  estimatedTotalBob: decimal("estimated_total_bob", { precision: 14, scale: 2 }).notNull(),
  notes: text("notes"),
  status: varchar("status", { length: 50 }).notNull().default("pendiente"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type Quotation = typeof quotations.$inferSelect;
export type NewQuotation = typeof quotations.$inferInsert;
