// routes/analytics/components/AnalyticsChart/index.tsx
"use client";

import { useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

export type ChartType = "line" | "bar" | "pie";

interface AnalyticsChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor?: string[];
      borderColor?: string[];
      borderWidth?: number;
    }[];
  };
}

const AnalyticsChart = ({ data }: AnalyticsChartProps) => {
  const [chartType, setChartType] = useState<ChartType>("line");

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return <Bar data={data} options={{ responsive: true, animation: { duration: 800 } }} />;
      case "pie":
        return <Pie data={data} options={{ responsive: true, animation: { duration: 800 } }} />;
      case "line":
      default:
        return <Line data={data} options={{ responsive: true, animation: { duration: 800 } }} />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="flex justify-end space-x-2 mb-2">
        <button onClick={() => setChartType("line")} className="px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          Línea
        </button>
        <button onClick={() => setChartType("bar")} className="px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          Barra
        </button>
        <button onClick={() => setChartType("pie")} className="px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          Pastel
        </button>
      </div>
      {renderChart()}
    </div>
  );
};

export default AnalyticsChart;
