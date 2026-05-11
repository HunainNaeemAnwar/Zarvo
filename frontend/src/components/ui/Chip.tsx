"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  lang?: "ur" | "en";
  className?: string;
}

export function Chip(props: ChipProps) {
  const label = props.label;
  const active = props.active;
  const onClick = props.onClick;
  const lang = props.lang;
  const className = props.className;

  const isUrdu = lang === "ur";

  return (
    <button
      onClick={onClick}
      dir={isUrdu ? "rtl" : "ltr"}
      className={cn(
        "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#166534]",
        "disabled:opacity-50 disabled:pointer-events-none",
        active
          ? "bg-[#166534] text-white hover:bg-green-800"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
        isUrdu ? "font-urdu" : "font-sans",
        className
      )}
    >
      {label}
    </button>
  );
}
