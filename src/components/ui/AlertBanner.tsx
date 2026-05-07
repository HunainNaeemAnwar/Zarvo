"use client";

import React, { useState, useEffect } from "react";
import { TriangleAlert, X, AlertOctagon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface AlertBannerProps {
  id: string;
  type?: "warning" | "danger";
  messageUr: string;
  messageEn: string;
  lang?: "ur" | "en";
  onDismiss?: () => void;
}

export function AlertBanner({
  id,
  type = "warning",
  messageUr,
  messageEn,
  lang = "ur",
  onDismiss,
}: AlertBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem(`alert-dismissed-${id}`);
    if (dismissed) {
      setIsVisible(false);
    }
  }, [id]);

  if (!isVisible) return null;

  const handleDismiss = () => {
    localStorage.setItem(`alert-dismissed-${id}`, "true");
    setIsVisible(false);
    if (onDismiss) onDismiss();
  };

  const isUrdu = lang === "ur";
  const isWarning = type === "warning";

  return (
    <div
      dir={isUrdu ? "rtl" : "ltr"}
      className={cn(
        "relative flex items-start gap-3 p-4 mb-4 rounded-lg shadow-sm border-l-4 dark:border-r-0",
        isWarning
          ? "bg-[#FFFBEB] border-l-[#F59E0B] text-[#92400E] dark:bg-[#1a170d] dark:text-[#F59E0B]"
          : "bg-[#FEF2F2] border-l-[#DC2626] text-[#991B1B] dark:bg-[#201010] dark:text-[#DC2626]",
        isUrdu ? "border-l-0 border-r-4" : "",
      )}
    >
      <div className="shrink-0 mt-0.5">
        {isWarning ? (
          <TriangleAlert className="w-5 h-5 text-[#F59E0B]" />
        ) : (
          <AlertOctagon className="w-5 h-5 text-[#DC2626]" />
        )}
      </div>

      <div
        className={cn(
          "flex-1 text-sm font-medium",
          isUrdu ? "font-urdu" : "font-sans",
        )}
      >
        {isUrdu ? messageUr : messageEn}
      </div>

      <button
        onClick={handleDismiss}
        className={cn(
          "shrink-0 p-1 rounded-md opacity-70 hover:opacity-100 transition-opacity",
          isWarning ? "hover:bg-[#FEF3C7]" : "hover:bg-[#FEE2E2]",
        )}
        aria-label="Close alert"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
