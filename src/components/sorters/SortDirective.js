import { ListStore } from "../../listStore.js";
import { watch } from "vue";
import { addIndex } from "../../utils/sorterIndex.js";

export const sort = {
  mounted(el, binding) {
    const componentId = Math.ceil(Math.random() * 1000000); // buddy ignore:line
    const listStore = ListStore(binding.arg);

    el.classList.add("sorter");

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
        listStore.addSorter({ key: binding.value, order: "desc", id: componentId });
      } else if (el.classList.contains("sort-desc")) {
        el.classList.remove("sort-desc");
        listStore.removeSorter(componentId);
      } else {
        el.classList.add("sort-asc");
        listStore.addSorter({ key: binding.value, order: "asc", id: componentId });
      }
    });
  },
};
