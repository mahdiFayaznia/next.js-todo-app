"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class" // adds class `dark` to <html>
      defaultTheme="system"
      enableSystem={true}
    >
      <HeroUIProvider>
        <ToastProvider
          toastProps={{
            color: "default",
            timeout: 3000,
            shouldShowTimeoutProgress: true,
          }}
        />
        {children}
      </HeroUIProvider>
    </ThemeProvider>
  );
};

export default Providers;
