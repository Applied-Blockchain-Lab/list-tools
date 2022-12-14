<script setup>
import { ref, computed } from "vue";
import { useListStore } from "../stores/listStore";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const tableStore = useListStore(props.id);

const eachSide = ref(1);

const total = computed(() => Math.ceil(tableStore.allItems.length / tableStore.itemsPerPage));

const firstPage = computed(() => {
  return 1;
});

const lastPage = computed(() => {
  return total.value;
});

const onFirstPage = computed(() => {
  return tableStore.currentPage === firstPage.value;
});

const onLastPage = computed(() => {
  return tableStore.currentPage === lastPage.value;
});

const paginators = computed(() => {
  const paginators = [];

  if (lastPage.value < eachSide.value * 2 + 4) {
    for (let i = firstPage.value; i < lastPage.value + 1; ++i) {
      paginators.push({
        value: i,
        enable: true,
      });
    }
  } else {
    if (tableStore.currentPage - firstPage.value < eachSide.value + 2) {
      // if currentPage near firstPage
      for (
        let i = firstPage.value;
        i < Math.max(eachSide.value * 2 + 1, tableStore.currentPage + eachSide.value + 1);
        ++i
      ) {
        paginators.push({
          value: i,
          enable: true,
        });
      }
      paginators.push({
        value: "...",
        enable: false,
      });
      paginators.push({
        value: lastPage.value,
        enable: true,
      });
    } else if (lastPage.value - tableStore.currentPage < eachSide.value + 2) {
      // if currentPage near lastPage
      paginators.push({
        value: firstPage.value,
        enable: true,
      });
      paginators.push({
        value: "...",
        enable: false,
      });
      for (
        let i = Math.min(lastPage.value - eachSide.value * 2 + 1, tableStore.currentPage - eachSide.value);
        i < lastPage.value + 1;
        ++i
      ) {
        paginators.push({
          value: i,
          enable: true,
        });
      }
    } else {
      // if currentPage in the middle
      paginators.push({
        value: firstPage.value,
        enable: true,
      });
      paginators.push({
        value: "...",
        enable: false,
      });
      for (let i = tableStore.currentPage - eachSide.value; i < tableStore.currentPage + eachSide.value + 1; ++i) {
        paginators.push({
          value: i,
          enable: true,
        });
      }
      paginators.push({
        value: "...",
        enable: false,
      });
      paginators.push({
        value: lastPage.value,
        enable: true,
      });
    }
  }
  return paginators;
});
</script>

<template>
  <ul class="pagination">
    <!--Prev Button-->
    <li :class="{ disabled: onFirstPage }" class="page-item">
      <a @click.prevent="tableStore.prevPage(lastPage, firstPage)" class="page-link" rel="prev" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>

    <!--Page Buttons-->
    <li
      v-for="(paginator, i) in paginators"
      :key="i"
      :class="{ active: paginator.value === tableStore.currentPage, disabled: !paginator.enable }"
      class="page-item"
    >
      <a
        @click.prevent="tableStore.setPage(paginator.value, lastPage, firstPage)"
        class="page-link"
        :disabled="!paginator.enable"
      >
        <span>{{ paginator.value }}</span>
      </a>
    </li>

    <!--Next Button-->
    <li :class="{ disabled: onLastPage }" class="page-item">
      <a @click.prevent="tableStore.nextPage(lastPage, firstPage)" class="page-link" rel="next" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.pagination {
  a.page-link:not(.disabled) {
    cursor: pointer;
  }

  list-style-type: none;
  display: flex;
  margin-top: 50px;

  li {
    padding: 10px;
    text-decoration: none;
  }
}

.active {
  border: 1px solid black;
}
</style>
