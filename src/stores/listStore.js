import { defineStore } from "pinia";
import _ from "lodash";

export const useListStore = (storeId) =>
  defineStore(`${storeId}`, {
    state: () => ({
      allItems: [],
      currentPage: 0,
      itemsPerPage: 0,
      pageItems: {
        startIndex: 0,
        endIndex: 0,
      },
    }),
    actions: {
      init(allItems, itemsPerPage) {
        this.setAllItems(allItems);
        this.setCurrentPage(1);
        this.setItemsPerPage(itemsPerPage);
        this.setPageItems({ startIndex: 0, endIndex: this.pageItems.startIndex + itemsPerPage - 1 });
      },
      insertRow(item) {
        this.allItems.push(item);
      },
      setAllItems(allItems) {
        this.allItems = allItems;
      },

      setItemsPerPage(itemsPerPage) {
        this.itemsPerPage = Number(itemsPerPage);
      },
      setPageItems(pageItems) {
        this.pageItems = pageItems;
      },
      setCurrentPage(page) {
        this.currentPage = Number(page);
      },

      // Filter by values
    },
    getters: {
      getItemsPerPage: (state) => state.itemsPerPage,
      getCurrentPage: (state) => state.currentPage,
      getAllItems: (state) => state.allItems,
    },
  })();
