import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  noPadding?: boolean;
}

export function Card({ className, noPadding = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-[#132A1A] rounded-2xl shadow-sm border border-gray-100 dark:border-[#374151] w-full md:w-auto",
        !noPadding && "p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
