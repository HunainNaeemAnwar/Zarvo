"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  titleLang?: "ur" | "en";
  children: React.ReactNode;
  className?: string;
}

export function Modal(props: ModalProps) {
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const title = props.title;
  const titleLang = props.titleLang;
  const children = props.children;
  const className = props.className;

  const defaultTitleLang = titleLang ?? "ur";

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isUrdu = defaultTitleLang === "ur";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        dir={isUrdu ? "rtl" : "ltr"}
        className={cn(
          "relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6",
          "max-h-[90vh] overflow-y-auto",
          "animate-in fade-in zoom-in duration-200",
          isUrdu ? "font-urdu" : "font-sans",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#052E16] dark:text-[#DCFCE7]">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Body */}
        <div className="text-[#052E16] dark:text-[#DCFCE7]">
          {children}
        </div>
      </div>
    </div>
  );
}
