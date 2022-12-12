<script setup>
import { computed } from "vue";
import { ref } from "vue";
import { useListStore } from "../stores/listStore";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});
const tableStore = useListStore(props.id);

const allItems = ref(tableStore.allItems);

const pageItemsIndexes = ref(tableStore.pageItems);

const rows = computed(() => {
  const items = [];

  for (let i = pageItemsIndexes.value.startIndex; i <= pageItemsIndexes.value.endIndex; i++) {
    // if (i < allItems.value.length)
    items.push(allItems.value[i]);
  }

  return items;
});
</script>

<template>
  <ol v-for="(row, rowIndex) in rows" :key="rowIndex">
    <li>{{ row.L11 }}</li>
    <li>{{ row.L12.L21 }}</li>
    <li>{{ row.L12.L22 }}</li>
    <li>{{ row.L12.L23.L31 }}</li>
    <li>{{ row.L12.L23.L32 }}</li>
    <li>{{ row.L12.L23.L33 }}</li>
    <li>{{ row.L12.L23.L34 }}</li>
    <li>{{ row.L12.L23.L35 }}</li>
  </ol>
</template>

<style scoped>
table,
td,
th {
  border: 1px solid;
  border-collapse: collapse;
  padding: 5px;
}
</style>
