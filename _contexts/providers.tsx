"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <ToastProvider
        toastProps={{
          timeout: 3000,
          shouldShowTimeoutProgress: true,
        }}
      />
      {children}
    </HeroUIProvider>
  );
};

export default Providers;
