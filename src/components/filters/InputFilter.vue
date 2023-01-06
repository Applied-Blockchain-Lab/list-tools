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

const filterValue = ref("");
const listStore = ListStore(props.listId);
const isApplied = ref(false);

const getComparator = (comparatorFn) => {
  return (el) => comparatorFn(el, filterValue.value);
};

const getComparatorByCompare = () => {
  switch (props.compare) {
    case "num":
      return getComparator(comparators.compareByInputNumber);
    case "day":
      return getComparator(comparators.compareByInputDay);
    case "month":
      return getComparator(comparators.compareByInputMonth);
    case "year":
      return getComparator(comparators.compareByInputYear);
    case "numEl":
      return getComparator(comparators.compareByInputNumberElInArr);
    case "stringInArr":
      return getComparator(comparators.compareByInputStringInArrOfStrings);
    case "stringInString":
      return getComparator(comparators.compareByInputStringContainingString);
    case "string":
      return getComparator(comparators.compareByInputString);
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
  isApplied.value = true;
};

const removeFilter = () => {
  const comparator = getComparatorByCompare();
  listStore.removeFilter(comparator, props.filterKey);
  isApplied.value = false;
};
</script>

<template>
  <input type="text" v-model="filterValue" />
  <button @click="applyFilter()">Filter</button>
  <button v-if="isApplied" @click="removeFilter()">X</button>
</template>
