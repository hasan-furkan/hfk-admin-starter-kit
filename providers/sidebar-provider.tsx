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
        <header className="sticky top-0 z-40 mt-2">
          <div className="px-4 py-3">
            <div className="flex h-14 items-center px-4 py-1 bg-background/60 backdrop-blur-xl rounded-[20px] border border-border/40 shadow-lg shadow-background/20 ring-1 ring-black/5 transition-all duration-200 hover:shadow-xl hover:shadow-background/30 hover:-translate-y-0.5">
              <SidebarTrigger className="-ml-1 hover:bg-muted/60 transition-colors" />
              <Separator orientation="vertical" className="mx-3 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href={pathname} className="hover:text-primary transition-colors">
                      {pageTitleCapitalized}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block text-muted-foreground/60" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-muted-foreground">
                      {dashboardTitleCapitalized}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="ml-auto flex items-center space-x-3">
                <ModeToggle />
                <LanguageToggle />
              </div>
            </div>
          </div>
        </header>
        <div className="px-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}