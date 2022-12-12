import { useListStore } from "../stores/listStore";
import useEventBus from "../composables/eventBus";

export default function useSortComponent(listId) {
  const listStore = useListStore(listId);
  const { emit } = useEventBus();

  const keyify = (obj) => {
    return listStore.keyify(obj);
  };

  const sortBy = (key, order) => {
    listStore.sortBy(key, order);
    switch (order) {
      case "asc":
        emit("sortOrder", "sort-asc");
        break;
      case "desc":
        emit("sortOrder", "sort-desc");
        break;
    }
  };

  return {
    keyify,
    sortBy,
  };
}
