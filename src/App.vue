<script setup>
import { useListStore } from "./stores/listStore";
import ListComponent from "./demos/ListComponent.vue";
import TestPaginationComponent from "./demos/TestPaginationComponent.vue";
import demoData from "../demo-data/demoData2.json";

// const keys = ["Number", "Country", "Recent date", "City", "Boolean", "R-num-string", "R-dates", "R-booleans"];

const listStore = useListStore(1);

listStore.init(demoData, 3);
</script>

<template>
  <header>
    <div class="wrapper">
      <ListComponent :id="1" />
      <TestPaginationComponent />
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
