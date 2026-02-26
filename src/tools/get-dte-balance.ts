import { ApiClient } from "../api-client.js";
import type { Tool } from "./types.js";

export const getDteBalance: Tool = {
  definition: {
    name: "get_dte_balance",
    description:
      "Obtiene el saldo de DTEs disponibles del cliente. " +
      "Retorna packs activos, DTEs restantes y fecha de vencimiento. " +
      "Usar cuando el cliente pregunta cuántos documentos le quedan o su saldo.",
    inputSchema: {
      type: "object" as const,
      properties: {},
      required: [],
    },
  },
  execute: async (api: ApiClient) => {
    return api.get("/api/v1/billing/balance");
  },
};
