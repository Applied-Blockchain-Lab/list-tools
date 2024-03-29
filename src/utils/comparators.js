function useComparators() {
  const compareByRangeNumber = (el, min, max) => {
    // console.log("here", el);
    // console.log("el", el);
    // console.log("max", max);
    if (max === 0) {
      return min <= el;
    }
    return min <= el && el <= max;
  };

  const compareByRangeDay = (el, min, max) => {
    console.log(el);
    console.log("here", el);
    const date = new Date(el);
    const day = date.getDate();
    console.log("day", day);
    if (max === 0) {
      return day >= min;
    }
    return min <= day && day <= max;
  };

  const compareByRangeMonth = (el, min, max) => {
    const date = new Date(el);
    const month = date.getMonth();
    if (max === 0) {
      return month >= min;
    }
    return min <= month && month <= max;
  };

  const compareByRangeYear = (el, min, max) => {
    console.log("here", el);
    const date = new Date(el);
    const year = date.getFullYear();
    if (max === 0) {
      return year >= min;
    }
    return min <= year && year <= max;
  };

  const compareByRangeNumberElInArr = (el, min, max) => {
    const elCount = el.length;
    if (max === 0) {
      return elCount >= min;
    }
    return min <= elCount && elCount <= max;
  };

  const compareByRangeNumberInArr = (el, min, max) => {
    const elArr = el;
    if (max === 0) {
      const filteredArr = elArr.filter((el) => el >= min);
      return filteredArr.length > 0;
    }
    const filteredArr = elArr.filter((el) => min <= el && el <= max);
    return filteredArr.length > 0;
  };

  const compareByInputNumber = (el, input) => {
    return el === +input;
  };

  const compareByInputDay = (el, input) => {
    const date = new Date(el);
    const day = date.getDate();
    return day === +input;
  };

  const compareByInputMonth = (el, input) => {
    const date = new Date(el);
    const month = date.getMonth();
    return month === +input;
  };

  const compareByInputYear = (el, input) => {
    const date = new Date(el);
    const year = date.getFullYear();
    return year === +input;
  };

  const compareByInputNumberElInArr = (el, input) => {
    const elCount = el.length;
    return elCount === +input;
  };

  // const compareByInputNumberInArr = (el, input) => {
  //   const elArr = el;
  //   const filteredArr = elArr.filter((el) => el === +input);
  //   return filteredArr.length > 0;
  // };

  const compareByInputStringInArrOfStrings = (el, input) => {
    const elArr = el;
    const filteredArr = elArr.filter((el) => el === input);
    return filteredArr.length > 0;
  };

  const compareByInputStringContainingString = (el, input) => {
    return el.includes(input);
  };

  const compareByInputString = (el, input) => {
    return el === input;
  };

  return {
    compareByRangeNumber,
    compareByRangeDay,
    compareByRangeMonth,
    compareByRangeYear,
    compareByRangeNumberElInArr,
    compareByRangeNumberInArr,
    compareByInputNumber,
    compareByInputDay,
    compareByInputMonth,
    compareByInputYear,
    compareByInputNumberElInArr,
    // compareByInputNumberInArr,
    compareByInputStringInArrOfStrings,
    compareByInputStringContainingString,
    compareByInputString,
  };
}

export default useComparators;
