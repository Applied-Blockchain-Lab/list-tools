<script setup>
import { ref } from "vue";
// import { useListStore } from "../../listStore.js";

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

// const { filterUtils } = useGlobalComposable(props.listId);

// const listStore = useListStore(props.listId);
const minRange = ref("");
const maxRange = ref("");
// import store, comparators !!!

const removeFilter = () => {
  // listStore.removeFilter(_); /// !!!!
};

const applyFilter = () => {
  // listStore.applyFilter(comparators.func, filterKey, compare); // !!!!
};
</script>

<template>
  <input type="number" v-model="minRange" />
  <input type="number" v-model="maxRange" />
  <button @click="applyFilter()">Filter</button>
  <!-- filterUtils.filterByRange(filterKey, compare, minRange, maxRange) -->
  <button @click="removeFilter()">X</button>
</template>
