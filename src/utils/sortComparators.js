import get from "lodash/get.js";

export function useSortComparators(key) {
  const defaultCompare = (obj) => {
    return get(obj, key);
  };
  const compareByArrayLength = (obj) => {
    const arr = get(obj, key);
    return arr.length;
  };
  return { defaultCompare, compareByArrayLength };
}

export const sortComparatorObj = {
  arrayLength: "compareByArrayLength",
  default: "defaultCompare",
};
