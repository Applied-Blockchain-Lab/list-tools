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

const getComparator = () => {
  switch (props.compare) {
    case "num":
      return (el) => comparators.filterByRangeNumber(el, props.filterKey, [+minRange.value, +maxRange.value]);
    case "day":
      return (el) =>
        comparators.filterByRangeDay(el, props.filterKey, [Number(minRange.value), Number(maxRange.value)]);
    default:
      console.error("Unknown compare value");
  }
};

const applyFilter = () => {
  //TODO: check compare.value and pass the needed comparator
  const comparator = getComparator();
  listStore.applyFilter(comparator);
  // listStore.applyFilter(comparators.filterByRangeNumber, props.filterKey, [
  //   Number(minRange.value),
  //   Number(maxRange.value),
  // ]); // !!!!
};
</script>

<template>
  <input type="number" v-model="minRange" />
  <input type="number" v-model="maxRange" />
  <button @click="applyFilter()">Filter</button>
  <button @click="removeFilter()">X</button>
</template>
