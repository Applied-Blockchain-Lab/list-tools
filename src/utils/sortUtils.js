import _ from "lodash";

export default function useSortUtils(listStore) {
  const sortedByAsc = {};
  const sortBy = (key, order) => {
    if (!key) {
      return;
    }

    listStore.setAllItems(_.sortBy(listStore.getAllItems, [key]));

    if (!order) {
      if (!sortedByAsc[key]) {
        sortedByAsc[key] = true;
      } else {
        listStore.setAllItems(listStore.getAllItems.reverse());
        sortedByAsc[key] = false;
      }
    } else if (order === "desc") {
      listStore.setAllItems(listStore.getAllItems.reverse());
    }

    listStore.setCurrentPage(1);
  };

  return {
    sortBy,
  };
}
