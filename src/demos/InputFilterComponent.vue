<script setup>
import { ref } from "vue";
import useGlobalComposable from "../composables/globalComposable";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const { filterUtils, keyify } = useGlobalComposable(props.id);
const filterableKeys = keyify();
const selectedFilterKey = ref("");
const filterValue = ref("");
</script>

<template>
  <select name="" id="" v-model="selectedFilterKey">
    <option value="" selected disabled hidden>Choose key</option>
    <option :value="key" v-for="(key, i) in filterableKeys" :key="i">{{ key }}</option>
  </select>
  <input type="text" v-model="filterValue" />
  <button @click="filterUtils.applyFilter(selectedFilterKey, filterValue)">Apply filter</button>
  <button @click="filterUtils.resetFilter()">Reset filter</button>
</template>
