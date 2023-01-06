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

const getComparator = (comparatorFn) => {
  return (el) => comparatorFn(el, +minRange.value, +maxRange.value);
};

const getComparatorByCompare = () => {
  switch (props.compare) {
    case "num":
      return getComparator(comparators.compareByRangeNumber);
    case "day":
      return getComparator(comparators.compareByRangeDay);
    default:
      console.error("Unknown compare value");
      return null;
  }
};

const applyFilter = () => {
  const comparator = getComparatorByCompare();
  if (comparator === null) {
    return;
  }
  listStore.applyFilter(comparator, props.filterKey);

  // listStore.applyFilter(comparators.filterByRangeNumber, props.filterKey, [
  //   Number(minRange.value),
  //   Number(maxRange.value),
  // ]); // !!!!
};

const removeFilter = () => {
  const comparator = getComparatorByCompare();
  listStore.removeFilter(comparator, props.filterKey); /// !!!!
};
</script>

<template>
  <input type="number" v-model="minRange" />
  <input type="number" v-model="maxRange" />
  <button @click="applyFilter()">Filter</button>
  <button @click="removeFilter()">X</button>
</template>
