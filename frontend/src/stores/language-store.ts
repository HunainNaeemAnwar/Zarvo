import { create } from "zustand";
import { persist } from "zustand/middleware";

type Language = "ur" | "en";

interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => {
      return {
        language: "ur",
        setLanguage: (language) => {
          return set({ language: language });
        },
        toggleLanguage: () => {
          return set((state) => {
            const currentLanguage = state.language;
            const nextLanguage = currentLanguage === "ur" ? "en" : "ur";
            return { language: nextLanguage };
          });
        },
      };
    },
    {
      name: "zarvo-language-storage",
    },
  ),
);
