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
  <table>
    <thead>
      <tr>
        <th>L11</th>
        <th>L12.L21</th>
        <th>L12.L22</th>
        <th>L12.L23.L31</th>
        <th>L12.L23.L32</th>
        <th>L12.L23.L33</th>
        <th>L12.L23.L34</th>
        <th>L12.L23.L35</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <!-- <td v-for="(column, columnIndex) in columns" :key="columnIndex">{{ row[column] }}</td> -->
        <td>{{ row.L11 }}</td>
        <td>{{ row.L12.L21 }}</td>
        <td>{{ row.L12.L22 }}</td>
        <td>{{ row.L12.L23.L31 }}</td>
        <td>{{ row.L12.L23.L32 }}</td>
        <td>{{ row.L12.L23.L33 }}</td>
        <td>{{ row.L12.L23.L34 }}</td>
        <td>{{ row.L12.L23.L35 }}</td>
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
