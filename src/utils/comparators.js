function useComparators() {
  const compareByRangeNumber = (el, min, max) => {
    console.log("here", el);
    console.log("el", el);
    return min <= el && el <= max;
  };

  const compareByRangeDay = (el, min, max) => {
    console.log(el);
    console.log("here", el);
    const date = new Date(el);
    const day = date.getDate();
    console.log("day", day);
    return min <= day && day <= max;
  };

  const compareByRangeMonth = (el, range) => {
    const [min, max] = range;
    const date = new Date(el);
    const month = date.getMonth();
    return min <= month && month <= max;
  };

  const compareByRangeYear = (el, range) => {
    console.log("here", el);

    const [min, max] = range;
    const date = new Date(el);
    const year = date.getFullYear();
    return min <= year && year <= max;
  };

  const compareByRangeNumberElInArr = (el, range) => {
    const [min, max] = range;
    const elCount = el.length;
    return min <= elCount && elCount <= max;
  };

  const compareByRangeNumberInArr = (el, range) => {
    const [min, max] = range;
    const elArr = el;
    const filteredArr = elArr.filter((el) => min <= el && el <= max);
    return filteredArr.length > 0;
  };

  return {
    compareByRangeNumber,
    compareByRangeDay,
    compareByRangeMonth,
    compareByRangeYear,
    compareByRangeNumberElInArr,
    compareByRangeNumberInArr,
  };
}

export default useComparators;
