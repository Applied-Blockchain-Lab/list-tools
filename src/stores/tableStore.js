import { defineStore } from "pinia";

export const useTableStore = (storeId) =>
  defineStore(`${storeId}`, {
    state: () => {
      return {
        data: []
      };
    },
    actions: {
      increment() {
        this.count++;
      },
    },
  })();
