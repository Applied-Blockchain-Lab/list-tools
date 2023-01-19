<script setup>
import { ref } from "vue";
import { ListStore } from "../../listStore.js";
import { useFilterUtils } from "../../utils";
const listId = new URL(import.meta.url).searchParams.get("listId");

const props = defineProps({
  filterKey: {
    type: String,
    required: true,
  },
  compare: {
    type: String,
    required: true,
  },
});

const filterValue = ref("");
const listStore = ListStore(listId);
const filters = useFilterUtils(listStore);
const isApplied = ref(false);

const getComparator = (comparatorFn) => {
  return (el) => comparatorFn(el, filterValue.value);
};

const applyFilter = () => {
  filters.applyFilter(getComparator, "input", props.compare, props.filterKey);
  isApplied.value = true;
};

const removeFilter = () => {
  filters.removeFilter(getComparator, "input", props.compare, props.filterKey);
  isApplied.value = false;
};
</script>

<template>
  <input type="text" v-model="filterValue" />
  <button @click="applyFilter()">Filter</button>
  <button v-if="isApplied" @click="removeFilter()">X</button>
</template>
