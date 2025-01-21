import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";


export function Sidebar() {
  return (
    <div className="h-screen">
        <div className="h-full flex flex-col border-">
            <p>Logo</p>
            <SidebarRoutes />

        </div>

    </div>
  )
}

