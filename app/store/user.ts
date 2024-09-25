import { create } from "zustand";
import axios from "axios";

type userDataFromTg = {
  tgId: number,
  firstName: string;
  lastName: string;
  username: string;
  languageCode: string;
};

type userDataFromDb = {
  firstName: string;
  lastName: string;
  username: string;
  languageCode: string;

  lvl: number;
  exp: number;
  coins: number;
  usd: number;
};

type User = {
  tgId: number | null;
  language: string;
  userData: userDataFromDb | null;
  setTgId: (tgId: number | null) => void;
  setUserData: (userData: userDataFromTg) => void;
  setLanguage: (language: string) => void;
};

export const useUserStore = create<User>()((set) => ({
  tgId: null,
  language: "uk",
  userData: null,
  setTgId: (tgId) => set(() => ({ tgId })),
  setUserData: async (userData) => {
    try {
      const response = await axios.post('/api/user', { ...userData });
      const userDataFromDb: userDataFromDb = response.data.user;

      set(() => ({
        userData: userDataFromDb,
      }));
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  },
  setLanguage: (language) => set(() => ({ language })),
}));
