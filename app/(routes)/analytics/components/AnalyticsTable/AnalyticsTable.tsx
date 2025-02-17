// routes/analytics/components/AnalyticsTable/index.tsx
"use client";

interface TableRow {
  id: number;
  metric: string;
  value: number | string;
  date: string;
}

interface AnalyticsTableProps {
  rows: TableRow[];
}

const AnalyticsTable = ({ rows }: AnalyticsTableProps) => {
  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Métrica</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Valor</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Fecha</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="px-4 py-2 text-sm text-gray-900 dark:text-white">{row.metric}</td>
              <td className="px-4 py-2 text-sm text-gray-900 dark:text-white">{row.value}</td>
              <td className="px-4 py-2 text-sm text-gray-900 dark:text-white">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnalyticsTable;
