import { defineStore } from "pinia";

export const useTableStore = (storeId) =>
  defineStore(`${storeId}`, {
    state: () => {
      return {
        data: [],
        count: 0,
      };
    },
    actions: {
      increment() {
        this.count++;
      },
    },
  })();
