"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/stores/theme-store";
import { useLanguageStore } from "@/stores/language-store";

export function ThemeProvider(props: { children: React.ReactNode }) {
  const children = props.children;
  const theme = useThemeStore((state) => state.theme);
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    // Apply theme class to document
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    // Apply language direction to document
    const root = document.documentElement;
    root.setAttribute("lang", language);
    root.setAttribute("dir", language === "ur" ? "rtl" : "ltr");
  }, [language]);

  return <>{children}</>;
}
