<script setup>
import { RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { useTableStore } from "./stores/tableStore";
import TableComponent from "./components/TableComponent.vue";
import TestPaginationComponent from "./components/TestPaginationComponent.vue";

const tableStore = useTableStore(1);
const tableStoreSecond = useTableStore(2);

const incrementFirstStore = () => {
  tableStore.increment();
  console.log(tableStore.count);
};

const incrementSecondStore = () => {
  tableStoreSecond.increment();
  console.log(tableStoreSecond.count);
};
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <button @click="incrementFirstStore">IncrementFirst</button>
      <button @click="incrementSecondStore">IncrementSecond</button>

      <p>STORE1{{ tableStore.count }}</p>
      <br />
      <p>STORE2{{ tableStoreSecond.count }}</p>

      <TableComponent :id="1" />
      <TestPaginationComponent />
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss"></style>
