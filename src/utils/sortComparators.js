import get from "lodash/get.js";

export function useSortComparators(key) {
  const defaultCompare = (obj) => {
    return get(obj, key);
  };
  const compareByNumber = (obj) => {
    return Number(get(obj, key));
  };
  const compareByString = (obj) => {
    return get(obj, key).toString();
  };
  const compareByDate = (obj) => {
    return new Date(get(obj, key));
  };
  const compareByBoolean = (obj) => {
    return !!get(obj, key);
  };
  const compareByArrayLength = (obj) => {
    const arr = get(obj, key);
    return arr.length;
  };
  const compareByNumberOfCertainEllementInArray = (element) => {
    return (obj) => {
      const arr = get(obj, key);
      return arr.filter((o) => o === element).length;
    };
  };
  return {
    defaultCompare,
    compareByArrayLength,
    compareByNumber,
    compareByString,
    compareByDate,
    compareByBoolean,
    compareByNumberOfCertainEllementInArray,
  };
}

export const sortComparatorObj = {
  number: "compareByNumber",
  string: "compareByString",
  date: "compareByDate",
  bool: "compareByBoolean",
  arrayLength: "compareByArrayLength",
  elementInArray: "compareByNumberOfCertainEllementInArray",
  default: "defaultCompare",
};

export function getSortComparator(key, compare) {
  const fns = useSortComparators(key);
  if (compare === undefined) {
    return fns[sortComparatorObj["default"]];
  }
  if (compare.value !== undefined) {
    return fns[sortComparatorObj[compare.type]](compare.value);
  }
  return fns[sortComparatorObj[compare.type]];
}
