<script setup>
import { ref } from "vue";
import { ListStore } from "../../listStore.js";
import useComparators from "../../utils/comparators.js";
const comparators = useComparators();

const props = defineProps({
  listId: {
    type: Number,
    required: true,
  },
  filterKey: {
    type: String,
    required: true,
  },
  compare: {
    type: String,
    required: true,
  },
});

const listStore = ListStore(props.listId);
const minRange = ref("");
const maxRange = ref("");

const removeFilter = () => {
  // listStore.removeFilter(_); /// !!!!
};

const applyFilter = () => {
  //TODO: check compare.value and pass the needed comparator
  listStore.applyFilter(comparators.filterByRangeNumber, props.filterKey, [
    Number(minRange.value),
    Number(maxRange.value),
  ]); // !!!!
};
</script>

<template>
  <input type="number" v-model="minRange" />
  <input type="number" v-model="maxRange" />
  <button @click="applyFilter()">Filter</button>
  <button @click="removeFilter()">X</button>
</template>
