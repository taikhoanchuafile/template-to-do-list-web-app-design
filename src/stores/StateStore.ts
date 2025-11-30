import { create } from "zustand";
import type { State } from "../types/State";

export const useStateStore = create<State>((set, get) => ({
  isLogin: false,
  setIsLogin: (isLogin) => set({ isLogin }),
}));
