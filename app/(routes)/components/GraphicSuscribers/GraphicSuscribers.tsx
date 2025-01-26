"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dataGraphic } from "./GraphicSuscribers.data";

export function GraphicSuscribers() {
  return (
    <div className="mt-5">
      <p className="text-3xl mb-3">24.452</p>
      <div className="flex items-center gap-x-5 mb-5">
        <div className="flex items-center gap-x-2 px-3 text-md bg-[#16c8c7] text-white rounded-lg w-fit">
          8.5% <TrendingUp size={16} />
        </div>
        <p className="text-slate-500">+425 increased</p>
      </div>
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={350}
            height={250}
            data={dataGraphic}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              {/* Gradiente para "newCustomers" */}
              <linearGradient id="gradientNewCustomers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#887cfb" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#887cfb" stopOpacity={0} />
              </linearGradient>
              {/* Gradiente para "oldCustomers" */}
              <linearGradient id="gradientOldCustomers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="newCustomers"
              stroke="#887cfb"
              fillOpacity={1}
              fill="url(#gradientNewCustomers)"
            />
            <Area
              type="monotone"
              dataKey="oldCustomers"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#gradientOldCustomers)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
