import { create } from "zustand";
import axios from "axios";
import { Floor, Department } from "../models/floor.model";

// type Floor{}


type FloorState = {
    floors: Floor[] | null;
    setFloors: (tgId: number) => void;
};

export const useFloorStore = create<FloorState>()((set) => ({
  floors: null,
  setFloors: async (tgId) => {
    try {
      const response = await axios.get('/api/floor', {
        params: { tgId },
      });
      const floors = response.data.floors;

      set(() => ({floors: floors}));

    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  },
  
}));
