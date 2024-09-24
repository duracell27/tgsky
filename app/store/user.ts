import { create } from "zustand";

type User = {
  tgId: number | null;
  setTgId: (tgId: number | null) => void;
};

export const useUserStore = create<User>()((set) => ({
  tgId: null,
  setTgId: (tgId) => set(() => ({ tgId }))
}));
