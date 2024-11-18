import { LayoutSidebarProvider as SidebarProvider } from "@/providers/sidebar-provider";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="relative flex min-h-screen">
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-4">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}