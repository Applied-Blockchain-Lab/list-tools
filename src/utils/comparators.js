import _ from "lodash";
function useComparators() {
  const filterByRangeNumber = (el, key, range) => {
    console.log("here", el);
    console.log("el", el[key]);
    console.log("range", range);

    // const numberRange = range.map(el => Number(el));

    // console.log(numberRange);

    const [min, max] = range;
    console.log("min", range[0]);
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
