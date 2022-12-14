import { useListStore } from "../stores/listStore";
import useSortUtils from "../utils/sortUtils";
import usePaginationUtils from "../utils/paginationUtils";

export default function useGlobalComposable(storeId) {
  const listStore = useListStore(storeId);

  const init = (allItems, itemsPerPage) => {
    listStore.init(allItems, itemsPerPage);
  };

  const sortUtils = useSortUtils(listStore);
  const paginationUtils = usePaginationUtils(listStore);

  return {
    init,
    sortUtils,
    paginationUtils,
  };
}
