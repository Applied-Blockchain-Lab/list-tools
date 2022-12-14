export default function useSortUtils(listStore) {
  const sortedByAsc = {};
  const sortBy = (key, order) => {
    if (!order) {
      if (!sortedByAsc[key]) {
        listStore.sortBy(key, "asc");
        sortedByAsc[key] = true;
      } else {
        listStore.sortBy(key, "desc");
        sortedByAsc[key] = false;
      }
    } else {
      listStore.sortBy(key, order);
    }
  };

  const keyify = (obj, prefix = "") => {
    return Object.keys(obj).reduce((res, el) => {
      if (Array.isArray(obj[el])) {
        return res;
      } else if (typeof obj[el] === "object" && obj[el] !== null) {
        return [...res, ...keyify(obj[el], prefix + el + ".")];
      }
      return [...res, prefix + el];
    }, []);
  };

  return {
    sortBy,
    keyify,
  };
}
