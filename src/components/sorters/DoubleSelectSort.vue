<script setup>
import { ref } from "vue";
import { watch } from "vue";
import { ListStore } from "../../listStore.js";
import { addIndex } from "../../utils/sorterIndex.js";
import useGlobalComposable from "../../composables/globalComposable";
import { getSortComparator } from "../../utils/sortComparators.js";

const listId = new URL(import.meta.url).searchParams.get("listId");

const listStore = ListStore(listId);
const { keyify } = useGlobalComposable(listId);
const selectedSorter = ref("");
const selectedOrder = ref("");
const root = ref(null);
const digits = 1000000;
const componentId = Math.ceil(Math.random() * digits);
const keys = keyify();

const props = defineProps({
  compare: {
    type: Object,
    required: false,
  },
});

const sortBy = () => {
  if (selectedSorter.value !== "") {
    let comparatorType = undefined;
    if (props.compare !== undefined && props.compare[selectedSorter.value.key] !== undefined) {
      comparatorType = props.compare[selectedSorter.value];
    }

    const compareFn = getSortComparator(selectedSorter.value, comparatorType);
    console.log(compareFn);
    listStore.addSorter({ key: selectedSorter.value, order: selectedOrder.value, id: componentId, fn: compareFn });
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
      <option :value="elem" v-for="(elem, i) in keys" :key="i">{{ `${elem}` }}</option>
    </select>
    <select name="" id="" v-model="selectedOrder">
      <option value="" selected disabled hidden>Choose order</option>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
    <button @click="sortBy()">sort</button>
  </div>
</template>
