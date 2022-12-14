<script setup>
import { ref, computed } from "vue";
import SortComponent from "./components/SortComponent.vue";
import FilterComponent from "./demos/FilterComponent.vue";

import TestPaginationComponent from "./demos/TestPaginationComponent.vue";
import demoData from "../demo-data/demoData2.json";
import useGlobalComposable from "./composables/globalComposable";

const listTools1 = useGlobalComposable(1);
const listTools2 = useGlobalComposable(2);
const listTools3 = useGlobalComposable(3);

listTools1.init(demoData, 5);
listTools2.init(demoData, 10);
listTools3.init(demoData, 7);

const sortedOrder1 = ref("sort");
const sortedOrder2 = ref("sort");

const items1 = computed(() => listTools1.paginationUtils.paginate());
const items2 = computed(() => listTools2.paginationUtils.paginate());
const items3 = computed(() => listTools3.paginationUtils.paginate());

const itemsPerPage1 = ref(listTools1.paginationUtils.getItemsPerPage());
const itemsPerPage2 = ref(listTools2.paginationUtils.getItemsPerPage());
const itemsPerPage3 = ref(listTools3.paginationUtils.getItemsPerPage());
</script>

<template>
  <header>
    <div class="wrapper">
      <h2>List 1</h2>
      <SortComponent :id="1" />
      <input type="text" name="" id="" v-model="itemsPerPage1" />
      <button @click="listTools1.paginationUtils.setItemsPerPage(itemsPerPage1)">Set items per page</button>

      <ol :class="sortedOrder1">
        <li v-for="(row, rowIndex) in items1" :key="rowIndex">
          Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City:
          {{ row.L12.L23.L31 }}; Boolean: {{ row.L12.L23.L32 }}; R-string: {{ row.L12.L23.L33 }}; R-dates:
          {{ row.L12.L23.L34 }}; R-booleans: {{ row.L12.L23.L35 }}; R-nums : {{ row.L12.L23.L36 }}
        </li>
      </ol>
      <br />
      <hr />
      <TestPaginationComponent :id="1" />
    </div>

    <div class="wrapper">
      <h2>List 2</h2>
      <SortComponent :id="2" />

      <input type="text" name="" id="" v-model="itemsPerPage2" />
      <button @click="listTools2.setItemsPerPage(itemsPerPage2)">Set items per page</button>

      <ol :class="sortedOrder2">
        <li v-for="(row, rowIndex) in items2" :key="rowIndex">
          Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City:
          {{ row.L12.L23.L31 }}; Boolean: {{ row.L12.L23.L32 }}; R-string: {{ row.L12.L23.L33 }}; R-dates:
          {{ row.L12.L23.L34 }}; R-booleans: {{ row.L12.L23.L35 }}; R-nums : {{ row.L12.L23.L36 }}
        </li>
      </ol>
      <hr />
      <br />
      <TestPaginationComponent :id="2" />
    </div>
    <div class="wrapper">
      <h1>Table 1</h1>
      <FilterComponent :id="3" />
      <input type="text" name="" id="" v-model="itemsPerPage3" />
      <button @click="listTools3.paginationUtils.setItemsPerPage(itemsPerPage3)">Set items per page</button>

      <table>
        <thead>
          <th @click="listTools3.sortUtils.sortBy(`L11`)">Number</th>
          <th @click="listTools3.sortUtils.sortBy(`L12.L21`)">Country</th>
          <th @click="listTools3.sortUtils.sortBy(`L12.L22`)">Recent Date</th>
          <th @click="listTools3.sortUtils.sortBy(`L12.L23.L31`)">City</th>
          <th @click="listTools3.sortUtils.sortBy(`L12.L23.L32`)">Boolean</th>
          <th>R-string</th>
          <th>R-dates</th>
          <th>R-booleans</th>
          <th>R-nums</th>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in items3" :key="rowIndex">
            <td>{{ row.L11 }}</td>
            <td>{{ row.L12.L21 }}</td>
            <td>{{ row.L12.L22 }}</td>
            <td>{{ row.L12.L23.L31 }}</td>
            <td>{{ row.L12.L23.L32 }}</td>
            <td>{{ row.L12.L23.L33 }}</td>
            <td>{{ row.L12.L23.L34 }}</td>
            <td>{{ row.L12.L23.L35 }}</td>
            <td>{{ row.L12.L23.L36 }}</td>
          </tr>
        </tbody>
      </table>
      <TestPaginationComponent :id="3" />
    </div>
  </header>
</template>

<style scoped lang="scss">
table,
td,
th {
  border: 1px solid;
  border-collapse: collapse;
  padding: 5px;
}
th {
  cursor: pointer;
}
</style>
