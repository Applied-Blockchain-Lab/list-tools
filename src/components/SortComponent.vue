<script setup>
import { ref } from "vue";
import useGlobalComposable from "../composables/globalComposable";
const listId = new URL(import.meta.url).searchParams.get("listId");

const emit = defineEmits(["sortOrder"]);
const { sortUtils, keyify } = useGlobalComposable(listId);

const selectedSortKey = ref("");
const selectedSortOrder = ref("");

const sortBy = (key, order) => {
  sortUtils.sortBy({ key, order });
  switch (order) {
    case "asc":
      emit("sortOrder", "sort-asc");
      break;
    case "desc":
      emit("sortOrder", "sort-desc");
      break;
  }
};

const sortableKeys = ref(keyify());
</script>

<template>
  <select name="" id="" v-model="selectedSortKey">
    <option value="" selected disabled hidden>Choose key</option>
    <option :value="key" v-for="(key, i) in sortableKeys" :key="i">{{ key }}</option>
  </select>
  <select name="" id="" v-model="selectedSortOrder">
    <option value="" selected disabled hidden>Choose order</option>
    <option value="asc">Ascending</option>
    <option value="desc">Descending</option>
  </select>

  <button @click="sortBy(selectedSortKey, selectedSortOrder)">sort</button>
</template>
