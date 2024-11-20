"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useRouter } from "next/navigation"
import { useEffect } from "react";
import eventEmitter  from "@/service/events"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const router = useRouter();

  useEffect(() => {
      function handleUnauthorized() {
          router.push('/auth/login');
      }

      eventEmitter.on('unauthorized', handleUnauthorized);
      return () => {
          eventEmitter.off('unauthorized', handleUnauthorized);
      };

  }, [router]);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
