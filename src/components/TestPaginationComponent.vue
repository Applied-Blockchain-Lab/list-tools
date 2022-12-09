<script setup>
import { ref, computed } from "vue";
import usePagination from "../mixins/PaginationComponent.js";
const { prevPage, currentPage, setPage, onLastPage, onFirstPage, nextPage, lastPage, firstPage, value } =
  usePagination(1);
const eachSide = ref(1);
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
    if (currentPage.value - firstPage.value < eachSide.value + 2) {
      // if currentPage near firstPage
      for (let i = firstPage.value; i < Math.max(eachSide.value * 2 + 1, currentPage.value + eachSide.value + 1); ++i) {
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
    } else if (lastPage.value - currentPage.value < eachSide.value + 2) {
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
        let i = Math.min(lastPage.value - eachSide.value * 2 + 1, currentPage.value - eachSide.value);
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
      for (let i = currentPage.value - eachSide.value; i < currentPage.value + eachSide.value + 1; ++i) {
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
      <a @click.prevent="prevPage" class="page-link" rel="prev" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>

    <!--Page Buttons-->
    <li
      v-for="(paginator, i) in paginators"
      :key="i"
      :class="{ active: paginator.value === currentPage, disabled: !paginator.enable }"
      class="page-item"
    >
      <a @click.prevent="setPage(paginator.value)" class="page-link" :disabled="!paginator.enable">
        <span>{{ paginator.value }}</span>
      </a>
    </li>

    <!--Next Button-->
    <li :class="{ disabled: onLastPage }" class="page-item">
      <a @click.prevent="nextPage" class="page-link" rel="next" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>

  <p>{{ value }}</p>
</template>

<style scoped lang="scss">
.pagination {
  a.page-link:not(.disabled) {
    cursor: pointer;
  }

  list-style-type: none;
  display: flex;

  li {
    padding: 10px;
    text-decoration: none;
  }
}

.active {
  border: 1px solid black;
}
</style>
