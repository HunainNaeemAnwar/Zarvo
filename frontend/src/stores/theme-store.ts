import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => {
      return {
        theme: 'light' as Theme,
        setTheme: (theme: Theme) => {
          return set({ theme: theme });
        },
        toggleTheme: () => {
          return set((state) => {
            const currentTheme = state.theme;
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            return { theme: newTheme };
          });
        },
      };
    },
    {
      name: 'zarvo-theme-storage',
    }
  )
);
