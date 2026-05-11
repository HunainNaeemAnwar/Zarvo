import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  lang?: "ur" | "en";
  error?: boolean;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, lang = "ur", error, icon, type, ...props }, ref) => {
    const isUrdu = lang === "ur";

    return (
      <div className="relative w-full">
        <input
          type={type}
          ref={ref}
          dir={isUrdu ? "rtl" : "ltr"}
          className={cn(
            "flex h-12 w-full rounded-lg border bg-white px-3 py-2 text-sm text-[#052E16] dark:bg-[#132A1A] dark:text-[#DCFCE7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#166534] disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-[#DC2626] focus:ring-[#DC2626]"
              : "border-gray-300 dark:border-[#374151]",
            isUrdu ? "text-right font-urdu" : "text-left font-sans",
            icon && (isUrdu ? "pr-10" : "pl-10"),
            className,
          )}
          {...props}
        />
        {icon && (
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400",
              isUrdu ? "right-3" : "left-3",
            )}
          >
            {icon}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";
