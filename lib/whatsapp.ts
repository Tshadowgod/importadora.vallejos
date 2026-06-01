import twilio from "twilio";

const OWNER_WHATSAPP = process.env.OWNER_WHATSAPP ?? "+59165073163";

export async function sendWhatsAppNotification(data: {
  customerName: string;
  customerPhone: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: number;
  originCountry: string;
  vehicleValueUsd: number;
  totalUsd: number;
  totalBob: number;
  quotationId: number;
}): Promise<void> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioWhatsapp = process.env.TWILIO_WHATSAPP_NUMBER;

  if (!accountSid || !authToken || !twilioWhatsapp) {
    console.warn("Twilio credentials not configured — skipping WhatsApp notification");
    return;
  }

  const client = twilio(accountSid, authToken);
  const usdFormatted = data.totalUsd.toLocaleString("es-BO", { minimumFractionDigits: 0 });
  const bobFormatted = data.totalBob.toLocaleString("es-BO", { minimumFractionDigits: 0 });

  const message = [
    `🚗 *NUEVA COTIZACIÓN #${data.quotationId}*`,
    ``,
    `👤 *Cliente:* ${data.customerName}`,
    `📞 *Teléfono:* ${data.customerPhone}`,
    ``,
    `🚙 *Vehículo:* ${data.vehicleYear} ${data.vehicleMake} ${data.vehicleModel}`,
    `🌍 *Origen:* ${data.originCountry}`,
    `💵 *Valor declarado:* $${data.vehicleValueUsd.toLocaleString()} USD`,
    ``,
    `💰 *Costo total estimado:*`,
    `   $${usdFormatted} USD`,
    `   Bs. ${bobFormatted}`,
    ``,
    `📋 Contactar para coordinar pago y trámites.`,
  ].join("\n");

  await client.messages.create({
    from: `whatsapp:${twilioWhatsapp}`,
    to: `whatsapp:${OWNER_WHATSAPP}`,
    body: message,
  });
}
