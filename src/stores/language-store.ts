import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'ur' | 'en';

interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: 'ur',
      setLanguage: (language) => set({ language }),
      toggleLanguage: () => set((state) => ({ language: state.language === 'ur' ? 'en' : 'ur' })),
    }),
    {
      name: 'zarvo-language-storage',
    }
  )
);
