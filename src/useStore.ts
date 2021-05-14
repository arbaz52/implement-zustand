import create from "zustand";

import { IState } from "./types";

const useStore = create<IState>((set) => ({
  beer: 0,
  honey: 0,
  addBeer: () => {
    set((state) => ({ ...state, beer: state.beer + 1 }));
  },
  addHoney: () => {
    set((state) => ({ ...state, honey: state.honey + 1 }));
  }
}));

export default useStore;
