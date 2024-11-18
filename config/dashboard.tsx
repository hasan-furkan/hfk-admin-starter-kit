import {
  LayoutDashboard,
  Users,
  Settings,
  PieChart,
  SquareTerminal,
  Map,
} from "lucide-react"

export const dashboardConfig = {
  sidebarNav: [
    {
      title: "CRM",
      href: "/crm",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      href: "/users",
      icon: Users,
    },
    {
      title: "Sales",
      href: "/sales",
      icon: PieChart,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
    {
      title: "Terminal",
      href: "/terminal",
      icon: SquareTerminal,
    },
    {
      title: "Maps",
      href: "/maps",
      icon: Map,
    },
  ],
}
