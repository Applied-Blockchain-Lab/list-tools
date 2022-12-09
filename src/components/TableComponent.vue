<script setup>
import { computed } from "vue";
import { ref } from "vue";
import { useTableStore } from "../stores/tableStore";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});
const tableStore = useTableStore(props.id);

const allItems = ref(tableStore.allItems);
const columns = ref(tableStore.columns);

const pageItemsIndexes = ref(tableStore.pageItems);

const rows = computed(() => {
  const items = [];

  console.log(pageItemsIndexes.value.startIndex);
  console.log(pageItemsIndexes.value.endIndex);

  for (let i = pageItemsIndexes.value.startIndex; i <= pageItemsIndexes.value.endIndex; i++) {
    // if (i < allItems.value.length)
    items.push(allItems.value[i]);
  }

  return items;
});
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-for="(column, columnIndex) in columns" :key="columnIndex">{{ row[column] }}</td>
      </tr>
    </tbody>
  </table>
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
