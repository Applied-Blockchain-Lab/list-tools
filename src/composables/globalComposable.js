import { useListStore } from "../listStore";
import { useFilterUtils, usePaginationUtils, useSortUtils } from "../utils";

export default function useGlobalComposable(storeId) {
  const listStore = useListStore(storeId);

  const init = (allItems, itemsPerPage) => {
    listStore.init(allItems, itemsPerPage);
  };

  const sortUtils = useSortUtils(listStore);
  const paginationUtils = usePaginationUtils(listStore);
  const filterUtils = useFilterUtils(listStore);

  const keyify = (obj = listStore.getFilteredItems[0], prefix = "") => {
    return Object.keys(obj).reduce((res, el) => {
      if (Array.isArray(obj[el])) {
        return [...res, prefix + el];
      } else if (typeof obj[el] === "object" && obj[el] !== null) {
        return [...res, ...keyify(obj[el], prefix + el + ".")];
      }
      return [...res, prefix + el];
    }, []);
  };

  const keyifyExcludedArr = (obj = listStore.getFilteredItems[0], prefix = "") => {
    return Object.keys(obj).reduce((res, el) => {
      if (Array.isArray(obj[el])) {
        return res;
      } else if (typeof obj[el] === "object" && obj[el] !== null) {
        return [...res, ...keyifyExcludedArr(obj[el], prefix + el + ".")];
      }
      return [...res, prefix + el];
    }, []);
  };

  return {
    init,
    keyify,
    keyifyExcludedArr,
    sortUtils,
    paginationUtils,
    filterUtils,
  };
}
