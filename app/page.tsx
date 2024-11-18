import { AppSidebar } from "@/components/app-sidebar";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard/crm");
}
