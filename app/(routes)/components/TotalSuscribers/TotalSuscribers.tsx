"use client";

import { Percent } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from "recharts";

import { CustomIcon } from "@/components/CustomIcon";
import { dataTotalSuscribers } from "./TotalSuscribers.data";

export function TotalSuscribers() {
  return (
    <div className="mb-4 lg:mb-0 shadow-sm bg-background rounded-lg p-5 w-full md:w-[95%] lg:w-[70%] mx-auto hover:shadow-lg transition">
      <div className="flex gap-x-2 items-center mb-4 justify-center">
        <CustomIcon icon={Percent} />
        <p className="text-xl">Total Suscribers</p>
      </div>
      <div className="flex justify-center items-center w-full p-5">
        <ResponsiveContainer width="100%" aspect={1} maxHeight={300}>
          <PieChart>
            <Pie
              data={dataTotalSuscribers}
              dataKey="value"
              outerRadius={100}
              labelLine={false}
            />
            <Tooltip />
            <Legend
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ paddingTop: "10px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
