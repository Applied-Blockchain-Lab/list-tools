<template>
  <paginate
    :page-count="20"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
  >
  </paginate>
</template>

<script setup>
import Paginate from "vuejs-paginate-next";
import { ListStore } from "../listStore.js";

const listId = new URL(import.meta.url).searchParams.get("listId");
const listStore = ListStore(listId);

const clickCallback = (pageNum) => {
  console.log(pageNum);
  listStore.setCurrentPage(pageNum);

  // const pageItems = listStore.getFilteredItems.slice(
  //   (this.page - 1) * this.perPage,
  //   this.page * this.perPage,
  // );
  // listStore.setPageItems();
};
</script>

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
