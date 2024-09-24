import { create } from "zustand";

type userData = {
  firstName: string;
  lastName: string;
  username: string;
  languageCode: string;
};

type User = {
  tgId: number | null;
  language: string;
  userData: userData | null;
  setTgId: (tgId: number | null) => void;
  setUserData: (userData: userData) => void;
  setLanguage: (language: string) => void
};

export const useUserStore = create<User>()((set) => ({
  tgId: null,
  language: "uk",
  userData: null,
  setTgId: (tgId) => set(() => ({ tgId })),
  setUserData: (userData) => set(() => ({ userData })),
  setLanguage: (language) => set(() => ({ language })),
}));
