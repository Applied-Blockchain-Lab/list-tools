<script setup>
import { useListStore } from "./stores/listStore";
import TableComponent from "./components/ListComponent.vue";
import TestPaginationComponent from "./components/TestPaginationComponent.vue";
import demoData from "../demo-data/demoData2.json";

const tableStore = useListStore(1);

tableStore.init(demoData, 3);
</script>

<template>
  <header>
    <div class="wrapper">
      <TableComponent :id="1" />
      <TestPaginationComponent />
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
