// Theme Colors
export const THEME_COLORS = {
  primaryGreen: "#166534",
  primaryLight: "#DCFCE7",
  secondaryBrown: "#92400E",
  accentYellow: "#F59E0B",
  dangerRed: "#DC2626",
  bgLight: "#FFFBEB",
  surfaceLight: "#FFFFFF",
  textPrimary: "#052E16",
  textSecondary: "#6B7280",
  bgDark: "#0A1F0F",
  surfaceDark: "#132A1A",
  textPrimaryDark: "#DCFCE7",
  textSecondaryDark: "#9CA3AF",
  borderDark: "#374151",
} as const;

// Language Config
export const LANGUAGES = {
  ur: "ur",
  en: "en",
} as const;

export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];

// Theme Config
export const THEMES = {
  light: "light",
  dark: "dark",
} as const;

export type Theme = (typeof THEMES)[keyof typeof THEMES];

// Mobile Config
export const MOBILE_MAX_WIDTH = 430;

// Font Config
export const FONTS = {
  urdu: "Noto Nastaliq Urdu",
  sans: "Inter",
  mono: "Geist Mono",
} as const;

// API Config
export const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "/api/v1";

// Storage Keys
export const STORAGE_KEYS = {
  THEME: "zarvo-theme-storage",
  LANGUAGE: "zarvo-language-storage",
  AUTH: "zarvo-auth-storage",
} as const;
