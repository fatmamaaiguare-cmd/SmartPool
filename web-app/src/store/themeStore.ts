import create from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = { dark: boolean; toggle: () => void };
const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      dark: false,
      toggle: () => set((s) => ({ dark: !s.dark })),
    }),
    { name: "theme" }
  )
);

export default useThemeStore;
