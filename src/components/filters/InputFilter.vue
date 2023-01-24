<script setup>
import { ref } from "vue";
import { useFilterProps } from "../../utils/filterProps";
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

const { isApplied, applyFilter, removeFilter } = useFilterProps({ ...props, type: "input", listId: listId });
const filterValue = ref("");

const getComparator = (comparatorFn) => {
  return (el) => comparatorFn(el, filterValue.value);
};
</script>

<template>
  <input type="text" v-model="filterValue" />
  <button v-if="!isApplied" @click="applyFilter(getComparator)">Filter</button>
  <button v-if="isApplied" @click="removeFilter(getComparator)">X</button>
</template>
