// routes/analytics/components/AnalyticsCard/index.tsx
"use client";

import { FC } from "react";
import { IconType } from "react-icons";

interface AnalyticsCardProps {
  title: string;
  value: number | string;
  icon: IconType;
}

const AnalyticsCard: FC<AnalyticsCardProps> = ({ title, value, icon: Icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center">
      <div className="text-3xl text-blue-500">
        <Icon />
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{title}</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
};

export default AnalyticsCard;
