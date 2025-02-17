// routes/analytics/services/analytics.service.ts
import { AnalyticsData } from "./analytics.types";

// Función para obtener datos desde la API (por ejemplo, Neon)
export const fetchAnalyticsDataFromAPI = async (): Promise<AnalyticsData> => {
  // Reemplaza con la URL de tu API
  const response = await fetch("https://api.tuservidor.com/analytics");
  if (!response.ok) throw new Error("Error al obtener datos de la API");
  const data = await response.json();
  return data;
};

// Función para obtener datos locales (para pruebas o fallback)
export const getLocalAnalyticsData = (): AnalyticsData => {
  return {
    totalUsers: 2345,
    completedTasks: 1234,
    pageVisits: 5432,
  };
};
