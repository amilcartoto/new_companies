// routes/analytics/components/AnalyticsFilters/index.tsx
"use client";

import { ChangeEvent } from "react";

interface AnalyticsFiltersProps {
  onFilterChange: (startDate: string, endDate: string) => void;
}

const AnalyticsFilters = ({ onFilterChange }: AnalyticsFiltersProps) => {
  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const startDate = e.target.value;
    onFilterChange(startDate, "");
  };

  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const endDate = e.target.value;
    onFilterChange("", endDate);
  };

  return (
    <div className="flex space-x-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Fecha Inicio</label>
        <input
          type="date"
          className="mt-1 block p-2 border rounded bg-white dark:bg-gray-700 dark:text-white"
          onChange={handleStartDateChange}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Fecha Fin</label>
        <input
          type="date"
          className="mt-1 block p-2 border rounded bg-white dark:bg-gray-700 dark:text-white"
          onChange={handleEndDateChange}
        />
      </div>
    </div>
  );
};

export default AnalyticsFilters;
