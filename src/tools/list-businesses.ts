import { ApiClient } from "../api-client.js";
import type { Tool } from "./types.js";

export const listBusinesses: Tool = {
  definition: {
    name: "list_businesses",
    description:
      "Lista todas las empresas registradas del usuario. " +
      "Retorna RUT, razón social, giro, estado y si tiene certificado digital cargado. " +
      "Usar cuando el cliente pregunta cuántas empresas tiene o cuáles son.",
    inputSchema: {
      type: "object" as const,
      properties: {},
      required: [],
    },
  },
  execute: async (api: ApiClient) => {
    return api.get("/api/v1/businesses");
  },
};
