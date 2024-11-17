"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      role: "Admin",
    }
  ],
  navMain: [
    {
      title: "navigation.dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      role: ["Admin", "User"],
      items: [
        {
          title: "CRM Dashboard",
          url: "/dashboard/crm",
          role: ["Admin", "User"],
        },
        {
          title: "Sales Dashboard",
          url: "/dashboard/sales",
          role: ["Admin", "User"],
        },
        {
          title: "NFT Dashboard",
          url: "/dashboard/nft",
          role: ["Admin", "User"],
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      role: ["Admin", "User"],
      items: [
        {
          title: "Genesis",
          url: "#",
          role: ["Admin", "User"],
        },
        {
          title: "Explorer",
          url: "#",
          role: ["Admin", "User"],
        },
        {
          title: "Quantum",
          url: "#",
          role: ["Admin"],
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
      role: ["Admin", "User"],
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
      role: ["Admin", "User"],
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
      role: ["Admin"],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
