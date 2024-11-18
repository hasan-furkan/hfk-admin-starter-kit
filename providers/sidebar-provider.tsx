"use client"
import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/theme-toggle"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import LanguageToggle from "@/components/language-toggle"

export function LayoutSidebarProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '';
  const splitPathname = pathname.split('/');
  const pageTitle = splitPathname[splitPathname.length - 2];
  const pageTitleCapitalized = pageTitle?.charAt(0).toUpperCase() + pageTitle?.slice(1);
  const dashboardTitle = splitPathname[splitPathname.length - 1];
  const dashboardTitleCapitalized = dashboardTitle.charAt(0).toUpperCase() + dashboardTitle.slice(1);
  
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href={pathname}>
                    {pageTitleCapitalized}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {dashboardTitleCapitalized}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="ml-auto mr-0 flex items-center gap-2 mt-2">
              <ModeToggle />
              <LanguageToggle />
            </div>
          </div>
        </header>
          {children}
      </SidebarInset>
    </SidebarProvider>
  )
}