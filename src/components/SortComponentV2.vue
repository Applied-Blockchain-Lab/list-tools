<script setup>
import { ref } from "vue";
import useGlobalComposable from "../composables/globalComposable";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["sortOrder"]);
const { sortUtils, keyify } = useGlobalComposable(props.id);

const selectedSortKey = ref("");

const sortBy = (key, order) => {
  sortUtils.sortBy(key, order);
  switch (order) {
    case "asc":
      emit("sortOrder", "sort-asc");
      break;
    case "desc":
      emit("sortOrder", "sort-desc");
      break;
  }
};

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
</script>

<template>
  <select name="" id="" v-model="selectedSortKey">
    <option value="" selected disabled hidden>Choose key</option>
    <option :value="elem" v-for="(elem, i) in sortableKeys()" :key="i">{{ `${elem.key} - ${elem.order}` }}</option>
  </select>
  <button @click="sortBy(selectedSortKey.key, selectedSortKey.order)">sort</button>
</template>
