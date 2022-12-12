import { defineStore } from "pinia";

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
        this.allItems = allItems;
        this.currentPage = 1;
        this.itemsPerPage = itemsPerPage;
        this.pageItems.startIndex = 0;
        this.pageItems.endIndex = this.pageItems.startIndex + itemsPerPage - 1;
      },
      insertRow(row) {
        this.rows.push(row);
      },
      setItemsPerPage(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
      },
      setCurrentPage(page) {
        this.currentPage = page;
        this.pageItems.startIndex = (page - 1) * this.itemsPerPage;
        const lastIndex = this.pageItems.startIndex + this.itemsPerPage - 1;
        this.pageItems.endIndex = lastIndex >= this.allItems.length ? this.allItems.length - 1 : lastIndex;
      },
      /********* PAGINATION FUNCTIONS *********/
      setPage(targetPage, lastPage, firstPage) {
        if (targetPage <= lastPage && targetPage >= firstPage) {
          this.setCurrentPage(targetPage);
        }
      },
      nextPage(lastPage, firstPage) {
        this.setPage(this.currentPage + 1, lastPage, firstPage);
      },
      prevPage(lastPage, firstPage) {
        this.setPage(this.currentPage - 1, lastPage, firstPage);
      },
      // Sort by values
      // Filter by values
    },
  })();
