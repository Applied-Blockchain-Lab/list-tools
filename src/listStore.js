import { defineStore } from "pinia";

export const useListStore = (storeId, itemsPerPage, isScrollable = false) =>
  defineStore(`${storeId}`, {
    state: () => ({
      allItems: [],
      filteredItems: [],
      currentPage: 0,
      itemsPerPage: itemsPerPage,
      pageItems: {
        startIndex: 0,
        endIndex: 0,
      },
      isScrollable: isScrollable,
    }),
    actions: {
      init(allItems, itemsPerPage) {
        this.setAllItems(allItems);
        this.setCurrentPage(1);

        const _itemsPerPage = this.allItems.length < itemsPerPage ? this.allItems.length : itemsPerPage;

        this.setItemsPerPage(_itemsPerPage);
        this.setPageItems({ startIndex: 0, endIndex: this.pageItems.startIndex + this.itemsPerPage - 1 });
      },
      insertRow(item) {
        this.allItems.push(item);
      },
      setAllItems(allItems) {
        this.allItems = allItems;
      },
      setFilteredItems(filteredItems) {
        this.filteredItems = filteredItems;
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
      getAllItems: (state) => (state.filteredItems.length === 0 ? state.allItems : state.filteredItems),
    },
  })();
