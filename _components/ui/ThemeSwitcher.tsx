"use client";

import { Button } from "@heroui/react";
import { RiMoonLine, RiSunLine } from "@remixicon/react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      isIconOnly
      aria-label="Theme Switcher ThemeSwitcher"
      color="default"
      onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <RiSunLine /> : <RiMoonLine />}
    </Button>
  );
};

export default ThemeSwitcher;
