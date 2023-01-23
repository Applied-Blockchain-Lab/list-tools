<script setup>
import { ref } from "vue";
import { ListStore } from "../../listStore.js";
import useGlobalComposable from "../../composables/globalComposable";
const listId = new URL(import.meta.url).searchParams.get("listId");

const listStore = ListStore(listId);
const { keyify } = useGlobalComposable(listId);
const selectedSorters = ref([1]);

function getCurrentKeys(index) {
  const keys = keyify();

  const newKeys = [];

  for (let i = 0; i < keys.length; ++i) {
    let found = false;
    for (let j = 0; j < index; j++) {
      if (keys[i] === selectedSorters.value[j].key) {
        found = true;
        break;
      }
    }
    if (!found) {
      newKeys.push({
        key: keys[i],
        order: "asc",
      });

      newKeys.push({
        key: keys[i],
        order: "desc",
      });
    }
  }

  return newKeys;
}

const sortBy = () => {
  listStore.setSorters(selectedSorters.value);
};

function addSorter() {
  selectedSorters.value.push({});
}

function removeSorter(i) {
  selectedSorters.value.splice(i, 1);
}
</script>

<template>
  <template v-for="(sorter, i) in selectedSorters" :key="i">
    <select name="" id="" v-model="selectedSorters[i]">
      <option value="1" selected disabled hidden>Choose key</option>
      <option :value="elem" v-for="(elem, j) in getCurrentKeys(i)" :key="j">{{ `${elem.key} - ${elem.order}` }}</option>
    </select>
    <button @click="removeSorter(i)" v-if="i != 0">X</button>
  </template>
  <button @click="addSorter" v-if="selectedSorters[selectedSorters.length - 1].key != undefined">+</button>
  <button @click="sortBy()">sort</button>
</template>
