<script setup>
import { ref } from "vue";
import useGlobalComposable from "../composables/globalComposable";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const { filterUtils, keyifyExcludedArr } = useGlobalComposable(props.id);
const filterableKeys = keyifyExcludedArr();
const filterTypes = ["Number", "Number as string", "String in string", "Exact string", "Date", "Day", "Month", "Year"];

const selectedFilterKey = ref("");
const selectFilterType = ref("");

const filterValue = ref("");
</script>

<template>
  <select name="" id="" v-model="selectedFilterKey">
    <option value="" selected disabled hidden>Choose key</option>
    <option :value="key" v-for="(key, i) in filterableKeys" :key="i">{{ key }}</option>
  </select>
  <select name="" id="" v-model="selectFilterType">
    <option value="" selected disabled hidden>Choose type</option>
    <option :value="type" v-for="(type, i) in filterTypes" :key="i">{{ type }}</option>
  </select>
  <input type="text" v-model="filterValue" />
  <button @click="filterUtils.applyFilter(selectedFilterKey, filterValue, selectFilterType)">Filter</button>
  <button @click="filterUtils.resetFilter()">Reset Filter</button>
</template>
