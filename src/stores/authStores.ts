import axios from "axios";
import { defineStore } from "pinia";
import { type IUser } from "@/api/type";

export type AuthStoreState = {
  authUser: IUser | null;
};
export const useAuthStore = defineStore({
  id: "authStore",
  state: () => ({
    authUser: null,
  }),
  getters: {},
  actions: {
    setAuthUser(user: IUser | null) {
      this.authUser = user;
    },
  },
});
