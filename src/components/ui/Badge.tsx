"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type BadgeVariant = "high" | "medium" | "low" | "default" | "success" | "warning" | "danger";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "default";
  lang?: "ur" | "en";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "default",
  lang = "ur",
  className,
}: BadgeProps) {
  const isUrdu = lang === "ur";

  const variants: Record<BadgeVariant, string> = {
    high: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    low: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    default: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    success: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    danger: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  };

  const sizes = {
    sm: "text-xs px-2 py-0.5",
    default: "text-sm px-2.5 py-1",
  };

  return (
    <span
      dir={isUrdu ? "rtl" : "ltr"}
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        variants[variant],
        sizes[size],
        isUrdu ? "font-urdu" : "font-sans",
        className
      )}
    >
      {children}
    </span>
  );
}
