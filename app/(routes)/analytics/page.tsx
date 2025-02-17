// routes/analytics/page.tsx
"use client";

import { useState, useEffect } from "react";
import AnalyticsFilters from "./components/AnalyticsFilters/AnalyticsFilters";
import AnalyticsCard from "./components/AnalyticsCard/AnalyticsCard";
import AnalyticsChart from "./components/AnalyticsChart/AnalyticsChart";
import AnalyticsTable from "./components/AnalyticsTable/AnalyticsTable";
import { fetchAnalyticsDataFromAPI, getLocalAnalyticsData,  } from "./services/analytics.services";
import { AnalyticsData } from "./services/analytics.types";
import { FaUsers, FaTasks, FaChartLine } from "react-icons/fa";



export default function AnalyticsPage() {
  const [theme, setTheme] = useState("light");
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  interface TableRow {
    id: number;
    metric: string;
    value: number;
    date: string;
  }

  const [tableRows, setTableRows] = useState<TableRow[]>([]);
  interface ChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor?: string[];
      borderColor?: string[];
      tension: number;
    }[];
  }

  const [chartData, setChartData] = useState<ChartData | null>(null);

  // Inicializar el tema y obtener datos
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);

    const fetchData = async () => {
      try {
        // Intenta obtener datos desde la API (ej. Neon)
        const apiData = await fetchAnalyticsDataFromAPI();
        setAnalyticsData(apiData);
      } catch {
        // Si falla la API, utiliza datos locales
        setAnalyticsData(getLocalAnalyticsData());
      }
    };
    fetchData();
  }, []);

  // Configurar datos para el gráfico y la tabla una vez que estén disponibles
  useEffect(() => {
    if (analyticsData) {
      setChartData({
        labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Usuarios",
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: ["rgb(75, 192, 192)"],
            tension: 0.1,
          },
        ],
      });

      setTableRows([
        { id: 1, metric: "Usuarios", value: analyticsData.totalUsers, date: "2025-01-01" },
        { id: 2, metric: "Tareas Completadas", value: analyticsData.completedTasks, date: "2025-01-01" },
        { id: 3, metric: "Visitas a la Página", value: analyticsData.pageVisits, date: "2025-01-01" },
      ]);
    }
  }, [analyticsData]);

  const handleFilterChange = (startDate: string, endDate: string) => {
    // Lógica para filtrar datos (por ejemplo, llamar a la API con parámetros de fecha)
    console.log("Filtros aplicados:", startDate, endDate);
  };

  return (
    <div className={`p-6 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
      <h1 className="text-3xl font-bold mb-6">Dashboard Analytics</h1>
      
      <AnalyticsFilters onFilterChange={handleFilterChange} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {analyticsData && (
          <>
            <AnalyticsCard title="Total Usuarios" value={analyticsData.totalUsers} icon={FaUsers} />
            <AnalyticsCard title="Tareas Completadas" value={analyticsData.completedTasks} icon={FaTasks} />
            <AnalyticsCard title="Visitas a la Página" value={analyticsData.pageVisits} icon={FaChartLine} />
          </>
        )}
      </div>

      {chartData && <AnalyticsChart data={chartData} />}

      {tableRows.length > 0 && <AnalyticsTable rows={tableRows} />}
    </div>
  );
}
