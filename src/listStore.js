import { defineStore } from "pinia";
// TODO: Import separate packages for every used lodash function
import isEqual from "lodash.isequal";
import filter from "lodash.filter";
import get from "lodash.get";
import orderBy from "lodash/orderBy";

export const ListStore = (storeId, itemsPerPage, singleSort = true, isScrollable = false) =>
  defineStore(`${storeId}`, {
    state: () => ({
      allItems: [],
      filteredItems: [],
      filteredAndSortedItems: [],
      selectedItems: [],
      currentPage: 1,
      itemsPerPage: itemsPerPage,
      pageItems: {
        startIndex: 0,
        endIndex: 0,
      },
      isScrollable: isScrollable,
      appliedSorters: [],
      appliedFilters: [],
      singleSort: singleSort,
    }),
    actions: {
      insertRow(item) {
        this.allItems.push(item);
      },
      setAllItems(allItems) {
        this.allItems = allItems;
        this.applyFiltersAndSorters();
      },
      setFilteredItems(filteredItems) {
        this.filteredItems = filteredItems;
      },
      setFilteredAndSortedItems(filteredAndSortedItems) {
        this.filteredAndSortedItems = filteredAndSortedItems;
      },
      setSelectedItems(selectedItems) {
        this.selectedItems = selectedItems;
      },
      setSingleSort(singleSort) {
        this.singleSort = singleSort;
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
      applyFiltersAndSorters() {
        this.applyFilters();
        this.applySorters();
      },
      addFilter(comparator, filterKey) {
        console.log("Add filter:", comparator, filterKey);
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
          // this.applySorters();
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
          this.applyFiltersAndSorters();
        } else {
          const items = this.getFilteredItems;
          console.log(items);
          const filteredItems = filter(
            items.map((el) => get(el, filterKey)),
            comparator,
          );
          console.log(filteredItems);
          const updatedItems = items.filter((item) => filteredItems.includes(get(item, filterKey)));
          console.log("Filtered items:", updatedItems);
          this.setFilteredItems(updatedItems);
          this.setCurrentPage(1);
          this.addFilter(comparator, filterKey);

          // this.applySorters();
        }
      },
      addSorter: singleSort ? addSorterSingle : addSorterMultiple,
      removeSorter(componentId) {
        for (let i = 0; i < this.appliedSorters.length; i++) {
          if (this.appliedSorters[i].id === componentId) {
            this.appliedSorters.splice(i, 1);
            break;
          }
        }

        this.applySorters();
      },
      applySorters() {
        const fns = this.appliedSorters.map((sorter) => sorter.fn);
        const orders = this.appliedSorters.map((sorter) => sorter.order);

        let sortedItems;
        if (this.appliedFilters.length !== 0) {
          sortedItems = orderBy(this.filteredItems, fns, orders);
        } else {
          sortedItems = orderBy(this.allItems, fns, orders);
        }
        this.setFilteredAndSortedItems(sortedItems);
      },
    },
    getters: {
      getItemsPerPage: (state) => state.itemsPerPage,
      getCurrentPage: (state) => state.currentPage,
      getAllItems: (state) => state.allItems,
      getFilteredItems: (state) =>
        state.filteredItems.length === 0 && state.appliedFilters.length === 0 ? state.allItems : state.filteredItems,
      getFilteredAndSorteredItems: (state) =>
        state.filteredAndSortedItems.length === 0 &&
        state.appliedFilters.length === 0 &&
        state.appliedSorters.length === 0
          ? state.allItems
          : state.filteredAndSortedItems,
      getItemsForList() {
        // Rename getCurrPageItems
        const pageItems = this.getFilteredAndSorteredItems.slice(
          (this.currentPage - 1) * this.getItemsPerPage,
          this.currentPage * this.getItemsPerPage,
        );
        //  console.log("Page items: ", pageItems);
        return pageItems;
      },
      getSorterIndex: (state) => {
        return (componentId) => {
          for (let i = 0; i < state.appliedSorters.length; i++) {
            if (state.appliedSorters[i].id === componentId) {
              return i + 1;
            }
          }
          return undefined;
        };
      },
    },
  })();

function addSorterSingle(sorter) {
  this.appliedSorters[0] = sorter;
  this.applySorters();
}

function addSorterMultiple(sorter) {
  let found = false;
  for (let i = 0; i < this.appliedSorters.length; i++) {
    if (this.appliedSorters[i].key === sorter.key) {
      this.appliedSorters[i] = sorter;
      found = true;
      break;
    }
  }

  if (!found) {
    this.appliedSorters.push(sorter);
  }
  this.applySorters();
}
