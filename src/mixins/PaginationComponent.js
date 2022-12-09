import { computed } from "vue";
import { ref } from "vue";
import { useTableStore } from "../stores/tableStore";

export default function usePagination(id) {
  const tableStore = useTableStore(id);

  const value = ref(tableStore.currentPage);

  const total = ref(Math.ceil(tableStore.allItems.length / tableStore.itemsPerPage));

  const firstPage = computed(() => {
    return 1;
  });

  const lastPage = computed(() => {
    return total.value;
  });

  const onFirstPage = computed(() => {
    return currentPage.value === firstPage.value;
  });

  const onLastPage = computed(() => {
    return currentPage.value === lastPage.value;
  });

  const currentPage = computed(() => {
    return value.value;
  });

  const nextPage = () => {
    setPage(currentPage.value + 1);
  };

  const prevPage = () => {
    setPage(currentPage.value - 1);
  };

  const setPage = (targetPage) => {
    if (targetPage <= lastPage.value && targetPage >= firstPage.value) {
      value.value = targetPage;
      tableStore.setCurrentPage(targetPage);
    }
  };

  return {
    prevPage,
    currentPage,
    setPage,
    onLastPage,
    onFirstPage,
    nextPage,
    lastPage,
    firstPage,
    value,
  };
}
