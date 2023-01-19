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

const listStore = ListStore(listId);
const filters = useFilterUtils(listStore);
const minRange = ref("");
const maxRange = ref("");
const isApplied = ref(false);

const getComparator = (comparatorFn) => {
  return (el) => comparatorFn(el, +minRange.value, +maxRange.value);
};

const applyFilter = () => {
  filters.applyFilter(getComparator, "range", props.compare, props.filterKey);
  isApplied.value = true;
};

const removeFilter = () => {
  filters.removeFilter(getComparator, "range", props.compare, props.filterKey);
  isApplied.value = false;
};
</script>

<template>
  <input type="number" v-model="minRange" />
  <input type="number" v-model="maxRange" />
  <button @click="applyFilter()">Filter</button>
  <button v-if="isApplied" @click="removeFilter()">X</button>
</template>
