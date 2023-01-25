<template>
  <paginate
    :page-count="totalPages"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
    :force-page="currentPage"
  >
  </paginate>
</template>

<script setup>
import Paginate from "vuejs-paginate-next";
import { ListStore } from "../../listStore.js";
import { computed } from "vue";
import usePaginationUtils from "../../utils/paginationUtils.js";

const listId = new URL(import.meta.url).searchParams.get("listId");
const listStore = ListStore(listId);
const paginationUtils = usePaginationUtils(listStore);
const totalPages = computed(() => paginationUtils.getTotalPages());
const currentPage = computed(() => paginationUtils.getCurrentPage());

const clickCallback = (pageNum) => {
  console.log(pageNum);
  paginationUtils.setCurrentPage(pageNum);
};
</script>

<style>
.pagination a.page-link:not(.disabled) {
  cursor: pointer;
}

.pagination {
  list-style-type: none;
  display: flex;
  margin-top: 50px;
}

.pagination li {
  padding: 10px;
  text-decoration: none;
}

.active {
  border: 1px solid black;
}
</style>
