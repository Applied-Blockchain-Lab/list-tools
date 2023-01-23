<script setup>
import { ref, computed } from "vue";
import useGlobalComposable from "../composables/globalComposable";
const listId = new URL(import.meta.url).searchParams.get("listId");

const { paginationUtils } = useGlobalComposable(listId);

const eachSide = ref(1);

const total = computed(() => paginationUtils.getTotalPages());

const firstPage = ref(1);

const onFirstPage = computed(() => paginationUtils.getCurrentPage() === firstPage.value);
const onLastPage = computed(() => paginationUtils.getCurrentPage() === total.value);

const paginators = computed(() => {
  const paginators = [];

  if (total.value < eachSide.value * 2 + 4) {
    for (let i = firstPage.value; i < total.value + 1; ++i) {
      paginators.push({
        value: i,
        enable: true,
      });
    }
  } else {
    if (paginationUtils.getCurrentPage() - firstPage.value < eachSide.value + 2) {
      // if currentPage near firstPage
      for (
        let i = firstPage.value;
        i < Math.max(eachSide.value * 2 + 1, paginationUtils.getCurrentPage() + eachSide.value + 1);
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
        value: total.value,
        enable: true,
      });
    } else if (total.value - paginationUtils.getCurrentPage() < eachSide.value + 2) {
      // if currentPage near total
      paginators.push({
        value: firstPage.value,
        enable: true,
      });
      paginators.push({
        value: "...",
        enable: false,
      });
      for (
        let i = Math.min(total.value - eachSide.value * 2 + 1, paginationUtils.getCurrentPage() - eachSide.value);
        i < total.value + 1;
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
      for (
        let i = paginationUtils.getCurrentPage() - eachSide.value;
        i < paginationUtils.getCurrentPage() + eachSide.value + 1;
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
        value: total.value,
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
      <a @click.prevent="paginationUtils.prevPage()" class="page-link" rel="prev" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>

    <!--Page Buttons-->
    <li
      v-for="(paginator, i) in paginators"
      :key="i"
      :class="{ active: paginator.value === paginationUtils.getCurrentPage(), disabled: !paginator.enable }"
      class="page-item"
    >
      <a @click.prevent="paginationUtils.setPage(paginator.value)" class="page-link" :disabled="!paginator.enable">
        <span>{{ paginator.value }}</span>
      </a>
    </li>

    <!--Next Button-->
    <li :class="{ disabled: onLastPage }" class="page-item">
      <a @click.prevent="paginationUtils.nextPage()" class="page-link" rel="next" aria-label="Next">
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
