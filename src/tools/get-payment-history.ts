import { ApiClient } from "../api-client.js";
import type { Tool } from "./types.js";

export const getPaymentHistory: Tool = {
  definition: {
    name: "get_payment_history",
    description:
      "Obtiene el historial de pagos del cliente. " +
      "Retorna monto, fecha, método de pago y estado de cada transacción. " +
      "Usar cuando el cliente pregunta por sus pagos o facturas de servicio.",
    inputSchema: {
      type: "object" as const,
      properties: {
        page: {
          type: "number",
          description: "Página (default 1)",
        },
        page_size: {
          type: "number",
          description: "Resultados por página (default 10)",
        },
      },
      required: [],
    },
  },
  execute: async (api: ApiClient, args: Record<string, unknown>) => {
    const params: Record<string, string> = {};
    if (args.page) params.page = String(args.page);
    if (args.page_size) params.page_size = String(args.page_size);
    return api.get("/api/v1/billing/payments", params);
  },
};
