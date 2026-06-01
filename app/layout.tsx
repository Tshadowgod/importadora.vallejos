import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FROTED ADUANA | Importación de Vehículos",
  description:
    "Cotiza el costo de importación de tu vehículo de forma rápida y confiable. Servicios aduaneros profesionales en Bolivia.",
  keywords: "importación vehículos, aduana Bolivia, cotización importación, trámites aduaneros",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
