import { ApiClient } from "../api-client.js";
import type { Tool } from "./types.js";

export const getBusinessDetail: Tool = {
  definition: {
    name: "get_business_detail",
    description:
      "Obtiene el detalle de una empresa específica: RUT, razón social, giro comercial, " +
      "dirección, comuna, estado, resolución SII y si tiene certificado digital cargado. " +
      "Usar cuando el cliente pregunta por los datos de una empresa en particular.",
    inputSchema: {
      type: "object" as const,
      properties: {
        business_id: {
          type: "string",
          description: "ID de la empresa a consultar",
        },
      },
      required: ["business_id"],
    },
  },
  execute: async (api: ApiClient, args: Record<string, unknown>) => {
    const id = args.business_id as string;
    return api.get(`/api/v1/businesses/${id}`);
  },
};
