"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <ToastProvider
        toastProps={{
          color: "default",
          timeout: 3000,
          shouldShowTimeoutProgress: true,
          classNames: {
            base: "dark text-foreground bg-background",
          },
        }}
      />
      <main className="h-screen w-screen dark text-foreground bg-background">
        {children}
      </main>
    </HeroUIProvider>
  );
};

export default Providers;
