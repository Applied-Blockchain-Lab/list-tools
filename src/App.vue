<script setup>
import { ref, computed } from "vue";
import SortComponent from "./components/SortComponent.vue";
import SortComponentV2 from "./components/SortComponentV2.vue";
// import SortComponentDirective from "./components/SortComponentDirective.vue";
import FilterComponent from "./demos/FilterComponent.vue";

import TestPaginationComponent from "./demos/TestPaginationComponent.vue";
import demoData from "../demo-data/demoData2.json";
import useGlobalComposable from "./composables/globalComposable";

const listTools1 = useGlobalComposable(1);
const listTools2 = useGlobalComposable(2);
const listTools3 = useGlobalComposable(3);
const listTools4 = useGlobalComposable(4);
const listTools5 = useGlobalComposable(5);
const listTools6 = useGlobalComposable(6);
const listTools7 = useGlobalComposable(7);
const listTools8 = useGlobalComposable(8);
const listTools9 = useGlobalComposable(9);
const listTools10 = useGlobalComposable(10);

listTools1.init(demoData, 5);
listTools2.init(demoData, 10);
listTools3.init(demoData, 7);
listTools4.init(demoData, 7);
listTools5.init(demoData, 7);
listTools6.init(demoData, 7);
listTools7.init(demoData, 7);
listTools8.init(demoData, 7);
listTools9.init(demoData, 7);
listTools10.init(demoData, 7);

const items1 = computed(() => listTools1.paginationUtils.paginate());
const items2 = computed(() => listTools2.paginationUtils.paginate());
const items3 = computed(() => listTools3.paginationUtils.paginate());
const items4 = computed(() => listTools4.paginationUtils.paginate());
const items5 = computed(() => listTools5.paginationUtils.paginate());
const items6 = computed(() => listTools6.paginationUtils.paginate());
const items7 = computed(() => listTools7.paginationUtils.paginate());
const items8 = computed(() => listTools8.paginationUtils.paginate());
const items9 = computed(() => listTools9.paginationUtils.paginate());
const items10 = computed(() => listTools10.paginationUtils.paginate());

const itemsPerPage1 = ref(listTools1.paginationUtils.getItemsPerPage());
const itemsPerPage2 = ref(listTools2.paginationUtils.getItemsPerPage());
const itemsPerPage3 = ref(listTools3.paginationUtils.getItemsPerPage());
const itemsPerPage4 = ref(listTools4.paginationUtils.getItemsPerPage());
const itemsPerPage5 = ref(listTools5.paginationUtils.getItemsPerPage());
const itemsPerPage6 = ref(listTools6.paginationUtils.getItemsPerPage());
const itemsPerPage7 = ref(listTools7.paginationUtils.getItemsPerPage());
const itemsPerPage8 = ref(listTools8.paginationUtils.getItemsPerPage());
const itemsPerPage9 = ref(listTools9.paginationUtils.getItemsPerPage());
const itemsPerPage10 = ref(listTools10.paginationUtils.getItemsPerPage());
</script>

<template>
  <div class="wrapper">
    <h2>List 1</h2>
    <SortComponentV2 :id="1" />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage1" />
    <button @click="listTools1.paginationUtils.setItemsPerPage(itemsPerPage1)">Set items per page</button>
    <br />
    <span @click="listTools1.sortUtils.sortBy({ key: `L11`, event: $event })">Sort by Number</span>
    <ol>
      <li v-for="(row, rowIndex) in items1" :key="rowIndex">
        Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City: {{ row.L12.L23.L31 }};
        Boolean: {{ row.L12.L23.L32 }}; R-string: {{ row.L12.L23.L33 }}; R-dates: {{ row.L12.L23.L34 }}; R-booleans:
        {{ row.L12.L23.L35 }}; R-nums : {{ row.L12.L23.L36 }}
      </li>
    </ol>
    <br />
    <hr />
    <TestPaginationComponent :id="1" />
  </div>

  <div class="wrapper">
    <h1>Table 1</h1>
    <SortComponent :id="2" />
    <br />
    <FilterComponent :id="2" />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage2" />
    <button @click="listTools2.paginationUtils.setItemsPerPage(itemsPerPage2)">Set items per page</button>

    <table>
      <thead>
        <th @click="listTools2.sortUtils.sortBy({ key: `L11`, event: $event })">Number</th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L12.L21`, event: $event })">Country</th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L12.L22`, event: $event })">Recent Date</th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L12.L23.L31`, event: $event })">City</th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L12.L23.L32`, event: $event })">Boolean</th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L12.L23.L33`, event: $event })">R-string</th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L12.L23.L34`, event: $event })">R-dates</th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L12.L23.L35`, event: $event })">R-booleans</th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L12.L23.L36`, event: $event })">R-nums</th>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in items2" :key="rowIndex">
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
    <TestPaginationComponent :id="2" />
  </div>
  <div class="wrapper">
    <h2>List 2</h2>
    <SortComponent :id="3" />
    <br />
    <FilterComponent :id="3" />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage3" />
    <button @click="listTools3.setItemsPerPage(itemsPerPage3)">Set items per page</button>
    <br />
    <span @click="listTools3.sortUtils.sortBy({ key: `L12.L21`, event: $event })">Sort by Country</span>
    <ol>
      <li v-for="(row, rowIndex) in items3" :key="rowIndex">
        Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City: {{ row.L12.L23.L31 }};
        Boolean: {{ row.L12.L23.L32 }}; R-string: {{ row.L12.L23.L33 }}; R-dates: {{ row.L12.L23.L34 }}; R-booleans:
        {{ row.L12.L23.L35 }}; R-nums : {{ row.L12.L23.L36 }}
      </li>
    </ol>
    <hr />
    <br />
    <TestPaginationComponent :id="3" />
  </div>
  <div class="wrapper">
    <h1>Table 2</h1>
    <SortComponentV2 :id="4" />
    <br />
    <FilterComponent :id="4" />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage4" />
    <button @click="listTools4.paginationUtils.setItemsPerPage(itemsPerPage4)">Set items per page</button>

    <table>
      <thead>
        <th @click="listTools4.sortUtils.sortBy({ key: `L11`, event: $event })">Number</th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L12.L21`, event: $event })">Country</th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L12.L22`, event: $event })">Recent Date</th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L12.L23.L31`, event: $event })">City</th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L12.L23.L32`, event: $event })">Boolean</th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L12.L23.L33`, event: $event })">R-string</th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L12.L23.L34`, event: $event })">R-dates</th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L12.L23.L35`, event: $event })">R-booleans</th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L12.L23.L36`, event: $event })">R-nums</th>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in items4" :key="rowIndex">
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
    <TestPaginationComponent :id="4" />
  </div>
  <div class="wrapper">
    <h2>List 3</h2>
    <SortComponentV2 :id="5" />
    <br />
    <FilterComponent :id="5" />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage5" />
    <button @click="listTools5.paginationUtils.setItemsPerPage(itemsPerPage5)">Set items per page</button>
    <br />
    <span @click="listTools5.sortUtils.sortBy({ key: `L12.L22`, event: $event })">Sort by Recent Date</span>
    <ol>
      <li v-for="(row, rowIndex) in items5" :key="rowIndex">
        Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City: {{ row.L12.L23.L31 }};
        Boolean: {{ row.L12.L23.L32 }}; R-string: {{ row.L12.L23.L33 }}; R-dates: {{ row.L12.L23.L34 }}; R-booleans:
        {{ row.L12.L23.L35 }}; R-nums : {{ row.L12.L23.L36 }}
      </li>
    </ol>
    <br />
    <hr />
    <TestPaginationComponent :id="5" />
  </div>

  <div class="wrapper">
    <h1>Table 3</h1>
    <SortComponent :id="6" />
    <br />
    <FilterComponent :id="6" />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage6" />
    <button @click="listTools6.paginationUtils.setItemsPerPage(itemsPerPage6)">Set items per page</button>

    <table>
      <thead>
        <th @click="listTools6.sortUtils.sortBy({ key: `L11`, event: $event })">Number</th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L12.L21`, event: $event })">Country</th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L12.L22`, event: $event })">Recent Date</th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L12.L23.L31`, event: $event })">City</th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L12.L23.L32`, event: $event })">Boolean</th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L12.L23.L33`, event: $event })">R-string</th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L12.L23.L34`, event: $event })">R-dates</th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L12.L23.L35`, event: $event })">R-booleans</th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L12.L23.L36`, event: $event })">R-nums</th>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in items6" :key="rowIndex">
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
    <TestPaginationComponent :id="6" />
  </div>
  <div class="wrapper">
    <h2>List 4</h2>
    <SortComponent :id="7" />
    <br />
    <FilterComponent :id="7" />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage7" />
    <button @click="listTools7.setItemsPerPage(itemsPerPage7)">Set items per page</button>
    <br />
    <span @click="listTools7.sortUtils.sortBy({ key: `L12.L23.L31`, event: $event })">Sort by City</span>
    <ol>
      <li v-for="(row, rowIndex) in items7" :key="rowIndex">
        Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City: {{ row.L12.L23.L31 }};
        Boolean: {{ row.L12.L23.L32 }}; R-string: {{ row.L12.L23.L33 }}; R-dates: {{ row.L12.L23.L34 }}; R-booleans:
        {{ row.L12.L23.L35 }}; R-nums : {{ row.L12.L23.L36 }}
      </li>
    </ol>
    <hr />
    <br />
    <TestPaginationComponent :id="7" />
  </div>
  <div class="wrapper">
    <h1>Table 4</h1>
    <SortComponentV2 :id="8" />
    <br />
    <FilterComponent :id="8" />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage8" />
    <button @click="listTools8.paginationUtils.setItemsPerPage(itemsPerPage8)">Set items per page</button>

    <table>
      <thead>
        <th @click="listTools8.sortUtils.sortBy({ key: `L11`, event: $event })">Number</th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L12.L21`, event: $event })">Country</th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L12.L22`, event: $event })">Recent Date</th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L12.L23.L31`, event: $event })">City</th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L12.L23.L32`, event: $event })">Boolean</th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L12.L23.L33`, event: $event })">R-string</th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L12.L23.L34`, event: $event })">R-dates</th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L12.L23.L35`, event: $event })">R-booleans</th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L12.L23.L36`, event: $event })">R-nums</th>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in items8" :key="rowIndex">
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
    <TestPaginationComponent :id="8" />
  </div>
  <div class="wrapper">
    <h2>List 5</h2>
    <SortComponentV2 :id="9" />
    <br />
    <FilterComponent :id="9" />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage9" />
    <button @click="listTools9.setItemsPerPage(itemsPerPage9)">Set items per page</button>
    <br />
    <span @click="listTools9.sortUtils.sortBy({ key: `L12.L23.L32`, event: $event })">Sort by Boolean</span>
    <ol>
      <li v-for="(row, rowIndex) in items9" :key="rowIndex">
        Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City: {{ row.L12.L23.L31 }};
        Boolean: {{ row.L12.L23.L32 }}; R-string: {{ row.L12.L23.L33 }}; R-dates: {{ row.L12.L23.L34 }}; R-booleans:
        {{ row.L12.L23.L35 }}; R-nums : {{ row.L12.L23.L36 }}
      </li>
    </ol>
    <hr />
    <br />
    <TestPaginationComponent :id="9" />
  </div>
  <div class="wrapper">
    <h1>Table 5</h1>
    <SortComponent :id="10" />
    <br />
    <FilterComponent :id="10" />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage10" />
    <button @click="listTools10.paginationUtils.setItemsPerPage(itemsPerPage10)">Set items per page</button>

    <table>
      <thead>
        <th @click="listTools10.sortUtils.sortBy({ key: `L11`, event: $event })">Number</th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L12.L21`, event: $event })">Country</th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L12.L22`, event: $event })">Recent Date</th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L12.L23.L31`, event: $event })">City</th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L12.L23.L32`, event: $event })">Boolean</th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L12.L23.L33`, event: $event })">R-string</th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L12.L23.L34`, event: $event })">R-dates</th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L12.L23.L35`, event: $event })">R-booleans</th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L12.L23.L36`, event: $event })">R-nums</th>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in items10" :key="rowIndex">
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
    <TestPaginationComponent :id="10" />
  </div>
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
  width: 100px;
}

table {
  width: 1400px !important;
}

.sort-asc {
  background-color: blue;
}

.sort-desc {
  background-color: green;
}

.sort {
  background-color: yellow;
}
</style>
