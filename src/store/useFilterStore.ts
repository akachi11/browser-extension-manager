import { create } from "zustand";
import type { FilterStatus } from "@/types/extension";

interface FilterState {
  filter: FilterStatus;
  setFilter: (filter: FilterStatus) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  filter: "all",
  setFilter: (filter) => set({ filter }),
}));
