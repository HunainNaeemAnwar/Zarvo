import React from 'react';
import { Loader2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export function Button(props: ButtonProps) {
  const className = props.className;
  const variant = props.variant ?? 'primary';
  const size = props.size ?? 'md';
  const isLoading = props.isLoading ?? false;
  const children = props.children;
  const disabled = props.disabled;
  const restProps = { ...props };
  delete restProps.className;
  delete restProps.variant;
  delete restProps.size;
  delete restProps.isLoading;
  delete restProps.children;
  delete restProps.disabled;

  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none w-full md:w-auto font-urdu";
  
  const variants = {
    primary: "bg-[#166534] text-white hover:bg-green-800 focus:ring-[#166534]",
    secondary: "bg-transparent border-2 border-[#166534] text-[#166534] hover:bg-[#DCFCE7] dark:hover:bg-[#132A1A] dark:text-[#DCFCE7] dark:border-[#DCFCE7] focus:ring-[#166534]",
    danger: "bg-[#DC2626] text-white hover:bg-red-700 focus:ring-[#DC2626]"
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-12 px-4 text-base",
    lg: "h-14 px-6 text-lg"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...restProps}
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        children
      )}
    </button>
  );
}
