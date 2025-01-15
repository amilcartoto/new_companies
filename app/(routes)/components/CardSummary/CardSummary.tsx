"use client";

import CustomIcon from "@/components/CustomIcon/CustomIcon";
import { CardSummaryProps } from "./CardSummary.types";
import { MoveDownRight, MoveUpRight, TrendingUp } from "lucide-react"; // Replace with the actual library
import { CustomTooltip } from "@/components/CustomTooltip";
import { cn } from "@/lib/utils";

export function CardSummary(props: CardSummaryProps) {
  const { icon: Icon, average, title, total, tooltipText } = props;

  return (
    <div className="bg-black">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <CustomIcon icon={Icon} />
          {title} {/* Solo mostrar una vez el título */}
        </div>
        <CustomTooltip content={tooltipText} />
      </div>
      <div className="flex gap-4 mt-3 md:mt-5">
        <p className="text-xl text-gray-800 dark:text-white">{total}</p>
      </div>
      <div
        className={cn(
          `flex items-center gap-1 text-xs text-white dark:text-gray-200 rounded-lg mt-4 px-3 py-1 bg-black dark:bg-secondary`
        )}
      >
        {average}%
        {average < 35 && <MoveDownRight strokeWidth={2} className="h-4 w-4" />}
        {average > 30 && average < 80 && (
          <MoveUpRight strokeWidth={2} className="h-4 w-4" />
        )}
        {average > 70 && average < 100 && (
          <TrendingUp strokeWidth={2} className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
