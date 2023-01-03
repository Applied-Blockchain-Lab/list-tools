import { defineStore } from "pinia";
import _ from "lodash";

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
      appliedFilters: [],
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
      addFilter(filter, filterKey, args) {
        this.appliedFilters.push({ filter, filterKey, args });
      },
      applyFilter(filter, filterKey, args) {
        console.log("Range:", args);
        // console.log(this.getFilteredItems);
        const filteredItems = _.filter(this.getFilteredItems, _.partial(filter, _, filterKey, args));

        console.log("Filtered items:", filteredItems);
        this.setFilteredItems(filteredItems);
        this.setCurrentPage(1);
        const allItemsLength = this.getFilteredItems.length;
        const itemsPerPage = this.getItemsPerPage;
        this.setItemsPerPage(allItemsLength < itemsPerPage ? allItemsLength : itemsPerPage);
        this.setPageItems({ startIndex: 0, endIndex: this.getItemsPerPage - 1 });
        this.addFilter(filter, filterKey, args);
      },
      // removeFilter(filter) {
      //   this.setFilteredItems([]);
      // },

      // Filter by values
    },
    getters: {
      getItemsPerPage: (state) => state.itemsPerPage,
      getCurrentPage: (state) => state.currentPage,
      getFilteredItems: (state) => (state.filteredItems.length === 0 ? state.allItems : state.filteredItems),
    },
  })();
