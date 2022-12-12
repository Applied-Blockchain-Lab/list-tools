import { useListStore } from "../stores/listStore";

export default function usePaginationComponent(listId) {
  const listStore = useListStore(listId);

  const paginate = () => {
    const items = [];
    for (let i = listStore.pageItems.startIndex; i <= listStore.pageItems.endIndex; i++) {
      items.push(listStore.allItems[i]);
    }
    return items;
  };

  return {
    paginate,
  };
}
