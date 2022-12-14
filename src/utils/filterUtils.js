import _ from "lodash";

export default function useFilterUtils(listStore) {
  const applyFilter = (key, value) => {
    if (!key || !value) {
      return;
    }

    const filteredItems = _.filter(listStore.allItems, [key, value]);

    if (filteredItems.length === 0) {
      return;
    }

    listStore.setFilteredItems(filteredItems);
    listStore.setCurrentPage(1);
    const allItemsLength = listStore.getAllItems.length;
    const itemsPerPage = listStore.getItemsPerPage;
    listStore.setItemsPerPage(allItemsLength < itemsPerPage ? allItemsLength : itemsPerPage);
    listStore.setPageItems({ startIndex: 0, endIndex: listStore.getItemsPerPage - 1 });
  };

  const resetFilter = () => {
    listStore.filteredItems = [];

    listStore.init(listStore.allItems);
  };

  return {
    applyFilter,
    resetFilter,
  };
}
