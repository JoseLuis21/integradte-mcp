import { ApiClient } from "../api-client.js";
import type { Tool } from "./types.js";

export const listPurchases: Tool = {
  definition: {
    name: "list_purchases",
    description:
      "Lista las facturas de compra recibidas de proveedores (libro de compras). " +
      "Retorna RUT emisor, razón social, monto, tipo DTE y fecha. " +
      "Usar cuando el cliente pregunta por sus compras o facturas recibidas.",
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
    return api.get("/api/v1/purchases", params);
  },
};
