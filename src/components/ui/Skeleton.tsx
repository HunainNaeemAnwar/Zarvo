"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface SkeletonProps {
  variant?: "rectangle" | "circle" | "square";
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function Skeleton({
  variant = "rectangle",
  width,
  height,
  className,
}: SkeletonProps) {
  const variantStyles = {
    rectangle: "rounded-lg",
    circle: "rounded-full",
    square: "rounded-md",
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === "number" ? `${width}px` : width;
  if (height) style.height = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      className={cn(
        "bg-gray-200 dark:bg-gray-700 animate-pulse",
        variantStyles[variant],
        !height && "h-4",
        !width && "w-full",
        className
      )}
      style={style}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
