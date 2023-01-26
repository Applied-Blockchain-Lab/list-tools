import { ListStore } from "../listStore";
import { useFilterUtils, usePaginationUtils, useSortUtils } from "../utils";

export default function useGlobalComposable(storeId, itemsPerPage, singleSort) {
  const listStore = ListStore(storeId, itemsPerPage, singleSort);

  const init = (allItems) => {
    listStore.init(allItems, itemsPerPage, singleSort);
  };

  const setAllItems = (data) => {
    listStore.setAllItems(data);
  };

  const sortUtils = useSortUtils(listStore);
  const paginationUtils = usePaginationUtils(listStore);
  const filterUtils = useFilterUtils(listStore);

  const keyify = (obj = listStore.getAllItems[0], prefix = "") => {
    return Object.keys(obj).reduce((res, el) => {
      if (Array.isArray(obj[el])) {
        return [...res, prefix + el];
      } else if (typeof obj[el] === "object" && obj[el] !== null) {
        return [...res, ...keyify(obj[el], prefix + el + ".")];
      }
      return [...res, prefix + el];
    }, []);
  };

  const keyifyExcludedArr = (obj = listStore.getAllItems[0], prefix = "") => {
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
    setAllItems,
    keyify,
    keyifyExcludedArr,
    sortUtils,
    paginationUtils,
    filterUtils,
  };
}
