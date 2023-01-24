<script setup>
import { ref } from "vue";
// import { useFilterPropsModel } from "../../utils/filterProps";
import { useFilterProps } from "../../utils/filterProps";
const listId = new URL(import.meta.url).searchParams.get("listId");
// const { props } = useFilterPropsModel();
const props = defineProps({
  filterKey: {
    type: String,
    required: true,
  },
  compare: {
    type: String,
    required: true,
  },
});
// const props = defineProps(fieldProps); // eslint-disable-line vue/valid-define-props

const { isApplied, applyFilter, removeFilter } = useFilterProps({ ...props, type: "range", listId: listId });
const minRange = ref("");
const maxRange = ref("");

const getComparator = (comparatorFn) => {
  return (el) => comparatorFn(el, +minRange.value, +maxRange.value);
};
</script>

<template>
  <input type="number" v-model="minRange" />
  <input type="number" v-model="maxRange" />
  <button v-if="!isApplied" @click="applyFilter(getComparator)">Filter</button>
  <button v-if="isApplied" @click="removeFilter(getComparator)">X</button>
</template>
