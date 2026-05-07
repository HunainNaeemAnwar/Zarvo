// Common Types
export type Theme = "light" | "dark";
export type Language = "ur" | "en";

// User Types
export interface User {
  id: string;
  phone: string;
  name?: string;
  language: Language;
  theme: Theme;
  createdAt: Date;
  updatedAt: Date;
}

// Disease Types
export interface Disease {
  id: string;
  nameUr: string;
  nameEn: string;
  symptomsUr: string;
  symptomsEn: string;
  treatmentUr: string;
  treatmentEn: string;
  preventionUr: string;
  preventionEn: string;
  imageUrl?: string;
  cropType: string[];
  severity: "low" | "medium" | "high";
}

// Chat Types
export interface ChatMessage {
  id: string;
  userId: string;
  role: "user" | "assistant";
  content: string;
  imageUrl?: string;
  diagnosisJson?: string;
  createdAt: Date;
}

// Weather Types
export interface WeatherData {
  location: {
    lat: number;
    lng: number;
    name: string;
  };
  current: {
    temperature: number;
    humidity: number;
    windSpeed: number;
    condition: string;
  };
  forecast: Array<{
    date: string;
    temperature: {
      min: number;
      max: number;
    };
    condition: string;
  }>;
}

// Farm Profile Types
export interface FarmProfile {
  id: string;
  userId: string;
  cropType: string;
  landSize: number;
  soilType: string;
  irrigationMethod: string;
  location?: {
    lat: number;
    lng: number;
  };
}
