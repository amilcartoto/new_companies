import { BarChart4,
        Building2,
        PanelsTopLeft,
        Settings,
        ShieldCheck,
        CircleHelpIcon,
        Calendar,
       
 } from "lucide-react";

 export const dataGeneralSidebar = [
    {
        Icon: PanelsTopLeft ,
        label: "Dashboard",
        href: "/"
    },
    {
        Icon: Building2,
        label: "Companies",
        href: "/companies"
    },
    {
        Icon: Calendar,
        label: "Calendar",
        href: "/task"
    },
 ]

 export const dataToolsSidebar = [
    {
        Icon: CircleHelpIcon,
        label: "Faqs",
        href: "/faqs"
    },
    {
        Icon: BarChart4,
        label: "Analytics",
        href: "/analytics",
    },
]
    
    
export const dataSupportSidebar =[
        
    {
        Icon: Settings,
        label: "Settings",
        href: "/settings",
    },
    {
        Icon: ShieldCheck,
        label: "Segurity",
        href: "/segurity",
    },
 ]