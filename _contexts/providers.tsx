"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class" // adds class `dark` to <html>
      defaultTheme="system"
      enableSystem
    >
      <HeroUIProvider>
        <ToastProvider
          toastProps={{
            color: "default",
            variant: "bordered",
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
