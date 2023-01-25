import { defineStore } from "pinia";
// TODO: Import separate packages for every used lodash function
import isEqual from "lodash.isequal";
import filter from "lodash.filter";
import get from "lodash.get";

export const ListStore = (storeId, itemsPerPage, isScrollable = false) =>
  defineStore(`${storeId}`, {
    state: () => ({
      allItems: [],
      filteredItems: [],
      selectedItems: [],
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
      setSelectedItems(selectedItems) {
        this.selectedItems = selectedItems;
      },
      isItemSelected(item) {
        for (let i = 0; i < this.selectedItems.length; i++) {
          if (isEqual(this.selectedItems[i], item)) {
            return true;
          }
        }

        return false;
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
      addFilter(comparator, filterKey) {
        console.log("Add filter:", comparator, filterKey);
        // console.log("Index of same filter:", this.appliedFilters.findIndex(
        //   (el) => el.comparator.toString() === comparator.toString() && el.filterKey === filterKey,
        // ));
        // const existingFilterIndex = this.appliedFilters.findIndex(
        //   (el) => el.comparator.toString() === comparator.toString() && el.filterKey === filterKey,
        // );
        // if (existingFilterIndex !== -1) {
        //   this.appliedFilters.splice(existingFilterIndex, 1);
        // }
        this.appliedFilters.push({ comparator: comparator, filterKey: filterKey });
        console.log("Applied filters:", this.appliedFilters);
      },
      removeFilter(comparator, filterKey) {
        console.log(this.appliedFilters);
        const index = this.appliedFilters.findIndex(
          (el) => el.comparator.toString() === comparator.toString() && el.filterKey === filterKey,
        );
        this.appliedFilters.splice(index, 1);
        console.log("Removed index:", index);
        console.log("Applied filters:", this.appliedFilters);
        if (this.appliedFilters.length === 0) {
          this.setFilteredItems(this.allItems);
        } else {
          this.applyFilters();
        }
      },
      applyFilters() {
        if (this.appliedFilters.length !== 0) {
          let items = this.allItems;
          for (const filterObj of this.appliedFilters) {
            const comparator = filterObj.comparator;
            const filterKey = filterObj.filterKey;
            const filteredItems = filter(
              items.map((el) => get(el, filterKey)),
              comparator,
            );
            console.log("Apply filters/Filtered items:", filteredItems, comparator);
            const updatedItems = items.filter((item) => filteredItems.includes(get(item, filterKey)));
            console.log("Apply filters/Updated items:", updatedItems);
            items = updatedItems;
          }
          console.log("Apply filters/Items:", items);
          this.setFilteredItems(items);
        }
      },
      applyFilter(comparator, filterKey) {
        console.log(
          "Index of same filter:",
          this.appliedFilters.findIndex(
            (el) => el.comparator.toString() === comparator.toString() && el.filterKey === filterKey,
          ),
        );
        const existingFilterIndex = this.appliedFilters.findIndex(
          (el) => el.comparator.toString() === comparator.toString() && el.filterKey === filterKey,
        );
        if (existingFilterIndex !== -1) {
          this.appliedFilters.splice(existingFilterIndex, 1);
          this.addFilter(comparator, filterKey);
          this.applyFilters();
        } else {
          const items = this.getFilteredItems;
          const filteredItems = filter(
            items.map((el) => get(el, filterKey)),
            comparator,
          );
          const updatedItems = items.filter((item) => filteredItems.includes(get(item, filterKey)));

          console.log("Filtered items:", updatedItems);
          this.setFilteredItems(updatedItems);
          this.setCurrentPage(1);
          this.addFilter(comparator, filterKey);
        }
      },
    },
    getters: {
      getItemsPerPage: (state) => state.itemsPerPage,
      getCurrentPage: (state) => state.currentPage,
      getFilteredItems: (state) =>
        state.filteredItems.length === 0 && state.appliedFilters.length === 0 ? state.allItems : state.filteredItems,
      getItemsForList() {
        // Rename getCurrPageItems
        const pageItems = this.getFilteredItems.slice(
          (this.currentPage - 1) * this.getItemsPerPage,
          this.currentPage * this.getItemsPerPage,
        );
        console.log("Page items: ", pageItems);
        return pageItems;
      },
    },
  })();
