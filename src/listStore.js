import { defineStore } from "pinia";
// TODO: Import separate packages for every used lodash function
import isEqual from "lodash.isequal";
import filter from "lodash.filter";
import get from "lodash.get";
import orderBy from "lodash/orderBy";

export const ListStore = (storeId, itemsPerPage, isScrollable = false) =>
  defineStore(`${storeId}`, {
    state: () => ({
      allItems: [],
      sortedItems: [],
      filteredItems: [],
      selectedItems: [],
      currentPage: 0,
      itemsPerPage: itemsPerPage,
      pageItems: {
        startIndex: 0,
        endIndex: 0,
      },
      isScrollable: isScrollable,
      appliedSorters: [],
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
          this.appliedSorters();
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
          // TODO: Fix this
          const allItemsLength = items.length;
          const itemsPerPage = this.getItemsPerPage;
          this.setItemsPerPage(allItemsLength < itemsPerPage ? allItemsLength : itemsPerPage);
          this.setPageItems({ startIndex: 0, endIndex: this.getItemsPerPage - 1 });
          //
        }
      },
      applyFilter(comparator, filterKey) {
        const items = this.getFilteredItems;
        const filteredItems = filter(
          items.map((el) => get(el, filterKey)),
          comparator,
        );
        const updatedItems = items.filter((item) => filteredItems.includes(get(item, filterKey)));

        console.log("Filtered items:", updatedItems);
        this.setFilteredItems(updatedItems);
        this.setCurrentPage(1);
        // TODO: Fix this
        const allItemsLength = this.getFilteredItems.length;
        const itemsPerPage = this.getItemsPerPage;
        this.setItemsPerPage(allItemsLength < itemsPerPage ? allItemsLength : itemsPerPage);
        this.setPageItems({ startIndex: 0, endIndex: this.getItemsPerPage - 1 });
        this.addFilter(comparator, filterKey);
      },
      setSorters(sorters) {
        this.appliedSorters = sorters;
        this.applySorters();
      },
      addSorter(sorter) {
        console.log(sorter);
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
      },
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
        console.log(this.appliedSorters);
        const keys = this.appliedSorters.map((sorter) => sorter.key);
        const orders = this.appliedSorters.map((sorter) => sorter.order);
        console.log(keys);
        console.log(orders);

        const sortedItems = orderBy(this.allItems, keys, orders);
        this.setFilteredItems(sortedItems);

        // TODO: Fix this
        const allItemsLength = this.allItems.length;
        const itemsPerPage = this.getItemsPerPage;
        this.setItemsPerPage(allItemsLength < itemsPerPage ? allItemsLength : itemsPerPage);
        this.setPageItems({ startIndex: 0, endIndex: this.getItemsPerPage - 1 });
        //
      },
    },
    getters: {
      getItemsPerPage: (state) => state.itemsPerPage,
      getCurrentPage: (state) => state.currentPage,
      getFilteredItems: (state) => (state.filteredItems.length === 0 ? state.allItems : state.filteredItems),
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
