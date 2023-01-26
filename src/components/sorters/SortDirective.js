import { ListStore } from "../../listStore.js";
import { watch } from "vue";
import { addIndex } from "../../utils/sorterIndex.js";
import { useSortComparators, sortComparatorObj } from "../../utils/sortComparators.js";

const digits = 1000000;

export const sort = {
  mounted(el, binding) {
    let key;
    let compareFn;
    if (typeof binding.value === "object") {
      key = binding.value.key;
      compareFn = useSortComparators(key)[sortComparatorObj[binding.value.compare.type]];
    } else {
      key = binding.value;
      compareFn = useSortComparators(key)[sortComparatorObj["default"]];
    }

    const componentId = Math.ceil(Math.random() * digits);
    const listStore = ListStore(binding.arg);

    el.classList.add("sorter");

    //TODO: How to do it without watch?
    watch(
      listStore.appliedSorters,
      () => {
        const index = listStore.getSorterIndex(componentId);
        if (index === undefined) {
          el.classList.remove("sort-asc");
          el.classList.remove("sort-desc");
        }
        if (listStore.singleSort === false) {
          addIndex(el, index, componentId);
        }
      },
      { deep: true },
    );

    el.addEventListener("click", function () {
      if (el.classList.contains("sort-asc")) {
        el.classList.remove("sort-asc");
        el.classList.add("sort-desc");
        listStore.addSorter({ key: key, order: "desc", id: componentId, fn: compareFn });
      } else if (el.classList.contains("sort-desc")) {
        el.classList.remove("sort-desc");
        listStore.removeSorter(componentId);
      } else {
        el.classList.add("sort-asc");
        listStore.addSorter({ key: key, order: "asc", id: componentId, fn: compareFn });
      }
    });
  },
};
