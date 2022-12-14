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
        this.allItems = allItems;
        this.currentPage = 1;
        this.updatePagination(itemsPerPage);
      },
      insertRow(row) {
        this.rows.push(row);
      },
      setItemsPerPage(itemsPerPage) {
        this.updatePagination(itemsPerPage);
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
      updatePagination(itemsPerPage) {
        this.itemsPerPage = Number(itemsPerPage);
        this.pageItems.startIndex = 0;
        this.pageItems.endIndex = this.pageItems.startIndex + itemsPerPage - 1;
      },
      /********* SORT FUNCTIONS *********/
      sortBy(key, order = "asc") {
        this.allItems = _.sortBy(this.allItems, [key]);

        if (order === "desc") {
          this.allItems = this.allItems.reverse();
        }
        this.setCurrentPage(1);
      },
      // Filter by values
    },
    getters: {
      getItemsPerPage: (state) => state.itemsPerPage,
    },
  })();
