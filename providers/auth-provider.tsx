"use client";

import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [cookies] = useCookies(["user"]);
  const router = useRouter();

  useEffect(() => {
    if (cookies.user) {
      router.push("/crm");
    } 
  }, [cookies.user, router]);

  return <>{children}</>;
}
