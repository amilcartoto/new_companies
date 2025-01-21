"use client"

import SidebarItem from "../SidebarItem/SidebarItem";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  dataGeneralSidebar,
  dataToolsSidebar,
  dataSupportSidebar,
} from "./SidebarRoutes.data";

export default function SidebarRoutes() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
      <div className="p-2 md:p-6">
        <p className="text-slate-500 mb-2">GENERAL</p>
          {dataGeneralSidebar.map(({ Icon, ...item }) => (
            <SidebarItem key={item.label} item={{ ...item, icon: Icon }} />
          ))}
        </div>

        <Separator />

        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">TOOLS</p>
          {dataToolsSidebar.map(({ Icon, ...item }) => (
            <SidebarItem key={item.label} item={{ ...item, icon: Icon }} />
          ))}

          <Separator />

        <div className="p-3 md:p-2 ">
          <p className="text-slate-500 mb-1 ">SUPPORT</p>
            {dataSupportSidebar.map(({ Icon, ...item }) => (
            <SidebarItem key={item.label} item={{ ...item, icon: Icon }} />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center p-6">
        <Button variant={"outline"} className="w-full">
          Upgrade Plan
        </Button>
      </div>
    <Separator/>

<footer className="mt-3 p-3 text-center">
  2025. All rights reserved
</footer>

    </div>
  );
}
