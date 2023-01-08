import _ from "lodash";

export default function useSortUtils(listStore) {
  const sortedByAsc = {};
  const sortBy = (obj) => {
    if (!obj.key) {
      return;
    }

    const keys = obj.key.split(".").reduce((o, i) => o[i], listStore.getFilteredItems[0]);

    if (Array.isArray(keys)) {
      listStore.setAllItems(
        _.sortBy(listStore.getFilteredItems, [
          function (o) {
            return obj.key.split(".").reduce((o, i) => o[i], o).length;
          },
        ]),
      );
    } else {
      listStore.setAllItems(_.sortBy(listStore.getFilteredItems, [obj.key]));
    }

    if (!obj.order) {
      if (!sortedByAsc[obj.key]) {
        sortedByAsc[obj.key] = true;

        obj.event.target.classList.add("sort-asc");
        obj.event.target.classList.remove("sort-desc");
      } else {
        listStore.setAllItems(listStore.getFilteredItems.reverse());
        sortedByAsc[obj.key] = false;
        obj.event.target.classList.remove("sort-asc");
        obj.event.target.classList.add("sort-desc");
      }
    } else if (obj.order === "desc") {
      listStore.setAllItems(listStore.getFilteredItems.reverse());
      obj.event.target.classList.remove("sort-asc");
      obj.event.target.classList.add("sort-desc");
    }

    listStore.setCurrentPage(1);
  };

  return {
    sortBy,
  };
}
