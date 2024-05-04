import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "app",
  state: () => ({
    selectedHostel: "SAHARA GROUP OF HOSTELS",
    isAuthenticated: false,
  }),
});
