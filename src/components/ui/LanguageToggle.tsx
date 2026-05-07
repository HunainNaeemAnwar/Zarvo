"use client";

import React from "react";
import { Globe } from "lucide-react";
import { useLanguageStore } from "@/stores/language-store";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function LanguageToggle({ className }: { className?: string }) {
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-colors",
        "hover:bg-gray-100 dark:hover:bg-gray-800",
        "focus:outline-none focus:ring-2 focus:ring-[#166534] focus:ring-offset-2",
        "text-[#052E16] dark:text-[#DCFCE7]",
        "font-medium",
        className
      )}
      aria-label={`Switch to ${language === "ur" ? "English" : "Urdu"}`}
    >
      <Globe className="w-5 h-5" />
      <span className="text-sm">{language === "ur" ? "اردو" : "EN"}</span>
    </button>
  );
}
