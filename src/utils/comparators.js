import _ from "lodash";
function useComparators() {
  const filterByRangeNumber = (el, range, key) => {
    console.log("here", el);
    const [min, max] = range;
    return min <= el[key] && el[key] <= max;
  };

  const filterByRangeDay = (el, range, key) => {
    console.log(el);
    console.log("here", _.get(el, key));

    const [min, max] = range;
    const date = new Date(_.get(el, key));
    const day = date.getDate();
    console.log("day", day);
    return min <= day && day <= max;
  };

  const filterByRangeMonth = (el, range, key) => {
    const [min, max] = range;
    const date = new Date(_.get(el, key));
    const month = date.getMonth();
    return min <= month && month <= max;
  };

  const filterByRangeYear = (el, range, key) => {
    console.log("here", _.get(el, key));

    const [min, max] = range;
    const date = new Date(_.get(el, key));
    const year = date.getFullYear();
    return min <= year && year <= max;
  };

  const filterByRangeNumberElInArr = (el, range, key) => {
    const [min, max] = range;
    const elCount = _.get(el, key).length;
    return min <= elCount && elCount <= max;
  };

  const filterByRangeNumberInArr = (el, range, key) => {
    const [min, max] = range;
    const elArr = _.get(el, key);
    const filteredArr = _.filter(elArr, (el) => min <= el && el <= max);
    return filteredArr.length > 0;
  };

  return {
    filterByRangeNumber,
    filterByRangeDay,
    filterByRangeMonth,
    filterByRangeYear,
    filterByRangeNumberElInArr,
    filterByRangeNumberInArr,
  };
}

export default useComparators;
