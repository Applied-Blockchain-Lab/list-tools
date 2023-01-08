import _ from "lodash";
import useComparators from "./comparators.js";
const comparators = useComparators();

export default function useFilterUtils(listStore) {
  const comparatorsObj = {
    range: {
      num: "compareByRangeNumber",
      day: "compareByRangeDay",
      month: "compareByRangeMonth",
      year: "compareByRangeYear",
      numEl: "compareByRangeNumberElInArr",
      numInArr: "compareByRangeNumberInArr",
    },
    input: {
      num: "compareByInputNumber",
      day: "compareByInputDay",
      month: "compareByInputMonth",
      year: "compareByInputYear",
      numEl: "compareByInputNumberElInArr",
      stringInArr: "compareByInputStringInArrOfStrings",
      stringInString: "compareByInputStringContainingString",
      string: "compareByInputString",
    },
  };

  const applyFilter = (getComparator, comparatorName, compareType, filterKey) => {
    if (!compareType || !filterKey) {
      return;
    }
    const comparator = getComparator(comparators[getComparatorByCompareType(comparatorName, compareType)]);
    listStore.applyFilter(comparator, filterKey);
  };

  const removeFilter = (getComparator, comparatorName, compareType, filterKey) => {
    if (!compareType || !filterKey) {
      return;
    }
    const comparator = getComparator(comparators[getComparatorByCompareType(comparatorName, compareType)]);
    listStore.removeFilter(comparator, filterKey);
  };

  const getComparatorByCompareType = (comparatorName, compareType) => {
    return comparatorsObj[comparatorName][compareType];
  };

  return {
    applyFilter,
    removeFilter,
  };
}
