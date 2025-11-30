import { create } from "zustand";
import type { State } from "../types/State";

export const useStateStore = create<State>((set, get) => ({
  isLogin: false,
  setIsLogin: (isLogin) => {
    console.log("setIsLogin called with:", isLogin); // log tham số
    set({ isLogin });
    console.log("store after set:", useStateStore.getState()); // log toàn bộ store
  },
}));
