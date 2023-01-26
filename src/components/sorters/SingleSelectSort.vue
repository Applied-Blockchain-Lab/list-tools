<script setup>
import { ref } from "vue";
import { watch } from "vue";
import { ListStore } from "../../listStore.js";
import { addIndex } from "../../utils/sorterIndex.js";
import useGlobalComposable from "../../composables/globalComposable";
import { useSortComparators, sortComparatorObj } from "../../utils/sortComparators.js";

const listId = new URL(import.meta.url).searchParams.get("listId");
const listStore = ListStore(listId);
const { keyify } = useGlobalComposable(listId);
const selectedSorter = ref("");
const root = ref(null);
const digits = 1000000;
const componentId = Math.ceil(Math.random() * digits);

const props = defineProps({
  compare: {
    type: Object,
    required: false,
  },
});

const sortableKeys = () => {
  const keys = keyify();

  const newKeys = [];

  for (let i = 0; i < keys.length; ++i) {
    newKeys.push({
      key: keys[i],
      order: "asc",
    });

    newKeys.push({
      key: keys[i],
      order: "desc",
    });
  }

  return newKeys;
};

const sortBy = () => {
  if (selectedSorter.value !== "") {
    let comparatorType = "default";
    if (props.compare !== undefined && props.compare[selectedSorter.value.key] !== undefined) {
      comparatorType = props.compare[selectedSorter.value.key].type;
    }
    const compareFn = useSortComparators(selectedSorter.value.key)[sortComparatorObj[comparatorType]];
    listStore.addSorter({
      key: selectedSorter.value.key,
      order: selectedSorter.value.order,
      id: componentId,
      fn: compareFn,
    });
  }
};

function removeSorter() {
  selectedSorter.value = "";
  listStore.removeSorter(componentId);
}

watch(
  listStore.appliedSorters,
  () => {
    const index = listStore.getSorterIndex(componentId);
    if (listStore.singleSort === false) {
      addIndex(root.value, index, componentId);
    }
    if (index === undefined) {
      selectedSorter.value = "";
    }
  },
  { deep: true },
);
</script>

<template>
  <div ref="root">
    <button @click="removeSorter()" v-if="selectedSorter !== ''">X</button>
    <select name="" id="" v-model="selectedSorter">
      <option value="" selected disabled hidden>Choose key</option>
      <option :value="elem" v-for="(elem, i) in sortableKeys()" :key="i">{{ `${elem.key} - ${elem.order}` }}</option>
    </select>
    <button @click="sortBy()">sort</button>
  </div>
</template>
