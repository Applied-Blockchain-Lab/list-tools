<script setup>
import { ref } from "vue";

// const props = defineProps({
//   listId: {
//     type: Number,
//     required: true,
//   },
//   filterKey: {
//     type: String,
//     required: true,
//   },
//   compare: {
//     type: String,
//     required: true,
//   },
// });

const filterValue = ref("");
</script>

<template>
  <input type="text" v-model="filterValue" />
  <button @click="filterUtils.applyFilter(selectedFilterKey, filterValue, selectFilterType)">Filter</button>
  <button @click="removeFilter()">X</button>
</template>
