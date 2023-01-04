import _ from "lodash";
import useComparators from "./comparators.js";
import demoData from "../../demo-data/demoData2.json";
const comparators = useComparators();

export default function useFilterUtils(listStore) {
  const filterByRange = (key, compareType, minRange, maxRange) => {
    if (!key || !compareType || !minRange || !maxRange) {
      return;
    }
    let filteredItems;

    switch (compareType) {
      case "num": {
        filteredItems = _.filter(
          listStore.allItems,
          _.partial(comparators.filterByRangeNumber, _, [minRange, maxRange], key),
        );
        break;
      }
      case "day": {
        console.log(key);
        filteredItems = _.filter(
          listStore.allItems,
          _.partial(comparators.filterByRangeDay, _, [minRange, maxRange], key),
        );
        break;
      }
      case "month": {
        filteredItems = _.filter(
          listStore.allItems,
          _.partial(comparators.filterByRangeMonth, _, [minRange, maxRange], key),
        );
        break;
      }
      case "year": {
        filteredItems = _.filter(
          listStore.allItems,
          _.partial(comparators.filterByRangeYear, _, [minRange, maxRange], key),
        );
        break;
      }
      case "numEl": {
        filteredItems = _.filter(
          listStore.allItems,
          _.partial(comparators.filterByRangeNumberElInArr, _, [minRange, maxRange], key),
        );
        break;
      }
      case "numInArr": {
        filteredItems = _.filter(
          listStore.allItems,
          _.partial(comparators.filterByRangeNumberInArr, _, [minRange, maxRange], key),
        );
        break;
      }
    }

    console.log("Filtered items:", filteredItems);

    if (filteredItems.length === 0) {
      return;
    }

    listStore.setFilteredItems(filteredItems);
    listStore.setCurrentPage(1);
    const allItemsLength = listStore.getFilteredItems.length;
    const itemsPerPage = listStore.getItemsPerPage;
    listStore.setItemsPerPage(allItemsLength < itemsPerPage ? allItemsLength : itemsPerPage);
    listStore.setPageItems({ startIndex: 0, endIndex: listStore.getItemsPerPage - 1 });
  };

  const applyFilter = (key, value, compareType) => {
    if (!key || !value || !compareType) {
      return;
    }

    let parsedValue;
    let filteredItems;

    switch (compareType) {
      case "Number": {
        parsedValue = Number(value);
        filteredItems = _.filter(listStore.allItems, [key, parsedValue]);
        break;
      }
      case "Number as string": {
        filteredItems = _.filter(listStore.allItems, [key, value]);
        break;
      }
      case "String in string": {
        filteredItems = _.filter(listStore.allItems, (obj) => {
          return (
            key
              .split(".")
              .reduce((o, i) => o[i], obj)
              .indexOf(value) !== -1
          );
        });
        break;
      }
      case "Exact string": {
        filteredItems = _.filter(listStore.allItems, [key, value]);
        break;
      }
      case "Date": {
        try {
          parsedValue = Date.parse(value);
          filteredItems = _.filter(listStore.allItems, (obj) => {
            const date = key.split(".").reduce((o, i) => o[i], obj);
            const parsedDate = new Date(Date.parse(date));
            const dateWithoutT = new Date(parsedDate.toDateString());

            return dateWithoutT.getTime() === parsedValue;
          });
        } catch (error) {
          // console.error("UNABLE TO CONVERT TO DATE");
        }
        break;
      }
      case "Day": {
        filteredItems = filterDateBy(key, value, "Day");
        break;
      }
      case "Month": {
        filteredItems = filterDateBy(key, value, "Month");
        break;
      }
      case "Year": {
        filteredItems = filterDateBy(key, value, "Year");
        break;
      }
    }

    if (filteredItems.length === 0) {
      return;
    }

    listStore.setFilteredItems(filteredItems);
    listStore.setCurrentPage(1);
    const allItemsLength = listStore.getFilteredItems.length;
    const itemsPerPage = listStore.getItemsPerPage;
    listStore.setItemsPerPage(allItemsLength < itemsPerPage ? allItemsLength : itemsPerPage);
    listStore.setPageItems({ startIndex: 0, endIndex: listStore.getItemsPerPage - 1 });
  };

  const filterDateBy = (key, value, dateValue) => {
    const parsedValue = Number(value);

    return _.filter(listStore.allItems, (obj) => {
      const date = key.split(".").reduce((o, i) => o[i], obj);
      const parsedDate = new Date(Date.parse(date));

      switch (dateValue) {
        case "Day":
          return parsedDate.getDate() === parsedValue;
        case "Month":
          return parsedDate.getMonth() + 1 === parsedValue;
        case "Year":
          return parsedDate.getFullYear() === parsedValue;
      }
    });
  };

  const resetFilter = () => {
    listStore.filteredItems = [];

    listStore.init(demoData, 5); // pass items per page // doesnt work without it for some reason???
    // remov
  };

  return {
    applyFilter,
    resetFilter,
    filterByRange,
  };
}
