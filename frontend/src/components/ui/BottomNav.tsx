'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, CloudSun, User } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', labelUr: 'ہوم', labelEn: 'Home', href: '/home', icon: Home },
    { name: 'Library', labelUr: 'لائبریری', labelEn: 'Library', href: '/library', icon: BookOpen },
    { name: 'Weather', labelUr: 'موسم', labelEn: 'Weather', href: '/weather', icon: CloudSun },
    { name: 'Profile', labelUr: 'پروفائل', labelEn: 'Profile', href: '/profile', icon: User },
  ];

  // For testing purposes, assuming language is Urdu.
  // In a real implementation, this will be read from a Zustand store.
  const isUrdu = true;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-[#132A1A] border-t border-gray-200 dark:border-[#374151] flex justify-around items-center z-50 md:max-w-[430px] md:mx-auto">
      {navItems.map((item) => {
        const isActive = pathname?.startsWith(item.href);
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col items-center justify-center w-full h-full min-h-[44px] min-w-[44px] relative"
          >
            {isActive && (
              <div className="absolute top-1 w-1.5 h-1.5 rounded-full bg-[#166534] dark:bg-[#DCFCE7]" />
            )}
            <Icon
              className={cn(
                "w-6 h-6 mt-1 mb-0.5",
                isActive ? "text-[#166534] dark:text-[#DCFCE7]" : "text-gray-500 dark:text-gray-400"
              )}
            />
            <span
              className={cn(
                "text-[10px] font-medium",
                isActive ? "text-[#166534] dark:text-[#DCFCE7]" : "text-gray-500 dark:text-gray-400",
                isUrdu ? "font-urdu" : "font-sans"
              )}
            >
              {isUrdu ? item.labelUr : item.labelEn}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
