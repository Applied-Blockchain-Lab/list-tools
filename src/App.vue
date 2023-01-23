<script setup>
import { ref, computed } from "vue";

import RangeFilter1 from "./components/filters/RangeFilter.vue?listId=1";
import RangeFilter2 from "./components/filters/RangeFilter.vue?listId=2";
import RangeFilter3 from "./components/filters/RangeFilter.vue?listId=3";
import RangeFilter4 from "./components/filters/RangeFilter.vue?listId=4";
import RangeFilter5 from "./components/filters/RangeFilter.vue?listId=5";
import RangeFilter6 from "./components/filters/RangeFilter.vue?listId=6";
import RangeFilter7 from "./components/filters/RangeFilter.vue?listId=7";
import RangeFilter8 from "./components/filters/RangeFilter.vue?listId=8";
import RangeFilter9 from "./components/filters/RangeFilter.vue?listId=9";
import RangeFilter10 from "./components/filters/RangeFilter.vue?listId=10";

import InputFilter1 from "./components/filters/InputFilter.vue?listId=1";
import InputFilter2 from "./components/filters/InputFilter.vue?listId=2";
import InputFilter3 from "./components/filters/InputFilter.vue?listId=3";
import InputFilter4 from "./components/filters/InputFilter.vue?listId=4";
import InputFilter5 from "./components/filters/InputFilter.vue?listId=5";
import InputFilter6 from "./components/filters/InputFilter.vue?listId=6";
import InputFilter7 from "./components/filters/InputFilter.vue?listId=7";
import InputFilter8 from "./components/filters/InputFilter.vue?listId=8";
import InputFilter9 from "./components/filters/InputFilter.vue?listId=9";
import InputFilter10 from "./components/filters/InputFilter.vue?listId=10";

import BulkItemsSelector1 from "./components/selectors/BulkItemsSelector.vue?listId=1";
import BulkItemsSelector2 from "./components/selectors/BulkItemsSelector.vue?listId=2";
import BulkItemsSelector3 from "./components/selectors/BulkItemsSelector.vue?listId=3";
import BulkItemsSelector4 from "./components/selectors/BulkItemsSelector.vue?listId=4";
import BulkItemsSelector5 from "./components/selectors/BulkItemsSelector.vue?listId=5";
import BulkItemsSelector6 from "./components/selectors/BulkItemsSelector.vue?listId=6";
import BulkItemsSelector7 from "./components/selectors/BulkItemsSelector.vue?listId=7";
import BulkItemsSelector8 from "./components/selectors/BulkItemsSelector.vue?listId=8";
import BulkItemsSelector9 from "./components/selectors/BulkItemsSelector.vue?listId=9";
import BulkItemsSelector10 from "./components/selectors/BulkItemsSelector.vue?listId=10";

import ItemSelector1 from "./components/selectors/ItemSelector.vue?listId=1";
import ItemSelector2 from "./components/selectors/ItemSelector.vue?listId=2";
import ItemSelector3 from "./components/selectors/ItemSelector.vue?listId=3";
import ItemSelector4 from "./components/selectors/ItemSelector.vue?listId=4";
import ItemSelector5 from "./components/selectors/ItemSelector.vue?listId=5";
import ItemSelector6 from "./components/selectors/ItemSelector.vue?listId=6";
import ItemSelector7 from "./components/selectors/ItemSelector.vue?listId=7";
import ItemSelector8 from "./components/selectors/ItemSelector.vue?listId=8";
import ItemSelector9 from "./components/selectors/ItemSelector.vue?listId=9";
import ItemSelector10 from "./components/selectors/ItemSelector.vue?listId=10";

import NumberOfSelectedItems1 from "./components/selectors/NumberOfSelectedItems.vue?listId=1";
import NumberOfSelectedItems2 from "./components/selectors/NumberOfSelectedItems.vue?listId=2";
import NumberOfSelectedItems3 from "./components/selectors/NumberOfSelectedItems.vue?listId=3";
import NumberOfSelectedItems4 from "./components/selectors/NumberOfSelectedItems.vue?listId=4";
import NumberOfSelectedItems5 from "./components/selectors/NumberOfSelectedItems.vue?listId=5";
import NumberOfSelectedItems6 from "./components/selectors/NumberOfSelectedItems.vue?listId=6";
import NumberOfSelectedItems7 from "./components/selectors/NumberOfSelectedItems.vue?listId=7";
import NumberOfSelectedItems8 from "./components/selectors/NumberOfSelectedItems.vue?listId=8";
import NumberOfSelectedItems9 from "./components/selectors/NumberOfSelectedItems.vue?listId=9";
import NumberOfSelectedItems10 from "./components/selectors/NumberOfSelectedItems.vue?listId=10";

import TestPaginationComponent1 from "./demos/TestPaginationComponent.vue?listId=1";
import TestPaginationComponent2 from "./demos/TestPaginationComponent.vue?listId=2";
import TestPaginationComponent3 from "./demos/TestPaginationComponent.vue?listId=3";
import TestPaginationComponent4 from "./demos/TestPaginationComponent.vue?listId=4";
import TestPaginationComponent5 from "./demos/TestPaginationComponent.vue?listId=5";
import TestPaginationComponent6 from "./demos/TestPaginationComponent.vue?listId=6";
import TestPaginationComponent7 from "./demos/TestPaginationComponent.vue?listId=7";
import TestPaginationComponent8 from "./demos/TestPaginationComponent.vue?listId=8";
import TestPaginationComponent9 from "./demos/TestPaginationComponent.vue?listId=9";
import TestPaginationComponent10 from "./demos/TestPaginationComponent.vue?listId=10";

import Pagination1 from "./demos/PaginationComponent.vue?listId=1";
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

// const items1 = computed(() => listTools1.paginationUtils.paginate());
const items1 = computed(() => listTools1.paginationUtils.getItems());
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
    <p><label>Text:</label> <SortComponentV21 /></p>
    <p>
      <label>Items per page:</label>
      <input type="text" name="" id="" v-model="itemsPerPage1" />
      <button @click="listTools1.paginationUtils.setItemsPerPage(itemsPerPage1)">Set items per page</button>
    </p>

    <p><label>Input filter by number:</label> <InputFilter1 filterKey="L11" compare="num" /></p>
    <p><label>Input filter by day of the month:</label> <InputFilter1 filterKey="L12.L22" compare="day" /></p>
    <p><label>Input filter by month:</label> <InputFilter1 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter1 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter1 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter1 filterKey="L12.L23.L33" compare="stringInArr" />
    </p>
    <p>
      <label>Input filter by string in string:</label>
      <InputFilter1 filterKey="L12.L21" compare="stringInString" />
    </p>
    <p><label>Input filter by exact string:</label> <InputFilter1 filterKey="L12.L21" compare="string" /></p>
    <p><label>Range filter by number:</label> <RangeFilter1 filterKey="L11" compare="num" /></p>
    <p><label>Range filter by day of the month:</label> <RangeFilter1 filterKey="L12.L22" compare="day" /></p>
    <p><label>Range filter by month:</label> <RangeFilter1 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter1 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter1 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter1 filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter1 /></p>
    <p><label>Values filter:</label> <ValuesFilter1 /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter1 /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector1 /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems1 /></p>
    <p>
      <label>Sorter with means at hand: </label>
      <span @click="listTools1.sortUtils.sortBy({ key: `L11`, event: $event })">Sort by Number</span>
    </p>
    <p><label>Sorter with custom directive:</label> <span>Sort by Number</span></p>

    <ol>
      <li v-for="(row, rowIndex) in items1" :key="rowIndex">
        <ItemSelector1 :item="row" />
        Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City: {{ row.L12.L23.L31 }};
        Boolean: {{ row.L12.L23.L32 }}; Arr-string: {{ row.L12.L23.L33 }}; Arr-dates: {{ row.L12.L23.L34 }};
        Arr-booleans: {{ row.L12.L23.L35 }}; Arr-nums : {{ row.L12.L23.L36 }}
      </li>
    </ol>
    <br />
    <hr />
    <TestPaginationComponent1 />
    <Pagination1 />
  </div>
  <div class="wrapper">
    <h1>Table 1</h1>
    <SortComponent2 />
    <br />
    <FilterComponent2 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage2" />
    <button @click="listTools2.paginationUtils.setItemsPerPage(itemsPerPage2)">Set items per page</button>
    <p><label>Input filter by number:</label> <InputFilter2 filterKey="L11" compare="Number" /></p>
    <p><label>Input filter by day of the month:</label> <InputFilter2 filterKey="L12.L22" compare="day" /></p>
    <p><label>Input filter by month:</label> <InputFilter2 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter2 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter2 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter2 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p><label>Input filter by string in string:</label> <InputFilter2 filterKey="L12.L21" compare="num" /></p>
    <p><label>Input filter by exact string:</label> <InputFilter2 filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter2 filterKey="L11" compare="num" /></p>
    <p><label>Range filter by day of the month:</label> <RangeFilter2 filterKey="L12.L22" compare="day" /></p>
    <p><label>Range filter by month:</label> <RangeFilter2 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter2 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter2 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter2 filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter2 /></p>
    <p><label>Values filter:</label> <ValuesFilter2 /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter2 /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector2 /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems2 /></p>
    <p>
      <label>Sorter with means at hand: </label>
      <span @click="listTools1.sortUtils.sortBy({ key: `L11`, event: $event })">Sort by Number</span>
    </p>
    <p><label>Sorter with custom directive:</label> <span>Sort by Number</span></p>
    <table>
      <thead>
        <th></th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L11`, event: $event })">Number</th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L12.L21`, event: $event })">Country</th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L12.L22`, event: $event })">Recent Date</th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L12.L23.L31`, event: $event })">City</th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L12.L23.L32`, event: $event })">Boolean</th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L12.L23.L33`, event: $event })">Array of strings</th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L12.L23.L34`, event: $event })">Array of dates</th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L12.L23.L35`, event: $event })">Array of booleans</th>
        <th @click="listTools2.sortUtils.sortBy({ key: `L12.L23.L36`, event: $event })">Array of numbers</th>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in items2" :key="rowIndex">
          <td><ItemSelector2 :item="row" /></td>
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
    <TestPaginationComponent2 />
  </div>
  <div class="wrapper">
    <h2>List 2</h2>
    <SortComponent3 />
    <br />
    <FilterComponent3 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage3" />
    <button @click="listTools3.setItemsPerPage(itemsPerPage3)">Set items per page</button>
    <br />
    <span @click="listTools3.sortUtils.sortBy({ key: `L12.L21`, event: $event })">Sort by Country</span>
    <p><label>Input filter by number:</label> <InputFilter3 filterKey="L11" compare="Number" /></p>
    <p><label>Input filter by day of the month:</label> <InputFilter3 filterKey="L12.L22" compare="day" /></p>
    <p><label>Input filter by month:</label> <InputFilter3 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter3 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter3 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter3 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p><label>Input filter by string in string:</label> <InputFilter3 filterKey="L12.L21" compare="num" /></p>
    <p><label>Input filter by exact string:</label> <InputFilter3 filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter3 filterKey="L11" compare="num" /></p>
    <p><label>Range filter by day of the month:</label> <RangeFilter3 filterKey="L12.L22" compare="day" /></p>
    <p><label>Range filter by month:</label> <RangeFilter3 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter3 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter3 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter3 filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter3 /></p>
    <p><label>Values filter:</label> <ValuesFilter3 /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter3 /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector3 /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems3 /></p>
    <p>
      <label>Sorter with means at hand: </label>
      <span @click="listTools1.sortUtils.sortBy({ key: `L11`, event: $event })">Sort by Number</span>
    </p>
    <p><label>Sorter with custom directive:</label> <span>Sort by Number</span></p>
    <ol>
      <li v-for="(row, rowIndex) in items3" :key="rowIndex">
        <ItemSelector3 :item="row" />
        Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City: {{ row.L12.L23.L31 }};
        Boolean: {{ row.L12.L23.L32 }}; Arr-string: {{ row.L12.L23.L33 }}; Arr-dates: {{ row.L12.L23.L34 }};
        Arr-booleans: {{ row.L12.L23.L35 }}; Arr-nums : {{ row.L12.L23.L36 }}
      </li>
    </ol>
    <hr />
    <br />
    <TestPaginationComponent3 />
  </div>
  <div class="wrapper">
    <h1>Table 2</h1>
    <SortComponentV24 />
    <br />
    <FilterComponent4 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage4" />
    <button @click="listTools4.paginationUtils.setItemsPerPage(itemsPerPage4)">Set items per page</button>
    <p><label>Input filter by number:</label> <InputFilter4 filterKey="L11" compare="Number" /></p>
    <p><label>Input filter by day of the month:</label> <InputFilter4 filterKey="L12.L22" compare="day" /></p>
    <p><label>Input filter by month:</label> <InputFilter4 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter4 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter4 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter4 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p><label>Input filter by string in string:</label> <InputFilter4 filterKey="L12.L21" compare="num" /></p>
    <p><label>Input filter by exact string:</label> <InputFilter4 filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter4 filterKey="L11" compare="num" /></p>
    <p><label>Range filter by day of the month:</label> <RangeFilter4 filterKey="L12.L22" compare="day" /></p>
    <p><label>Range filter by month:</label> <RangeFilter4 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter4 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter4 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter4 filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter4 /></p>
    <p><label>Values filter:</label> <ValuesFilter4 /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter4 /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector4 /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems4 /></p>
    <p>
      <label>Sorter with means at hand: </label>
      <span @click="listTools1.sortUtils.sortBy({ key: `L11`, event: $event })">Sort by Number</span>
    </p>
    <p><label>Sorter with custom directive:</label> <span>Sort by Number</span></p>
    <table>
      <thead>
        <th></th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L11`, event: $event })">Number</th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L12.L21`, event: $event })">Country</th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L12.L22`, event: $event })">Recent Date</th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L12.L23.L31`, event: $event })">City</th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L12.L23.L32`, event: $event })">Boolean</th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L12.L23.L33`, event: $event })">Array of strings</th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L12.L23.L34`, event: $event })">Array of dates</th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L12.L23.L35`, event: $event })">Array of booleans</th>
        <th @click="listTools4.sortUtils.sortBy({ key: `L12.L23.L36`, event: $event })">Array of numbers</th>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in items4" :key="rowIndex">
          <td><ItemSelector4 :item="row" /></td>
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
    <TestPaginationComponent4 />
  </div>
  <div class="wrapper">
    <h2>List 3</h2>
    <SortComponentV25 />
    <br />
    <FilterComponent5 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage5" />
    <button @click="listTools5.paginationUtils.setItemsPerPage(itemsPerPage5)">Set items per page</button>
    <br />
    <span @click="listTools5.sortUtils.sortBy({ key: `L12.L22`, event: $event })">Sort by Recent Date</span>
    <p><label>Input filter by number:</label> <InputFilter4 filterKey="L11" compare="Number" /></p>
    <p><label>Input filter by day of the month:</label> <InputFilter4 filterKey="L12.L22" compare="day" /></p>
    <p><label>Input filter by month:</label> <InputFilter5 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter5 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter5 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter5 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p><label>Input filter by string in string:</label> <InputFilter5 filterKey="L12.L21" compare="num" /></p>
    <p><label>Input filter by exact string:</label> <InputFilter5 filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter5 filterKey="L11" compare="num" /></p>
    <p><label>Range filter by day of the month:</label> <RangeFilter5 filterKey="L12.L22" compare="day" /></p>
    <p><label>Range filter by month:</label> <RangeFilter5 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter5 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter5 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter5 filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter5 /></p>
    <p><label>Values filter:</label> <ValuesFilter5 /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter5 /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector5 /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems5 /></p>
    <p>
      <label>Sorter with means at hand: </label>
      <span @click="listTools1.sortUtils.sortBy({ key: `L11`, event: $event })">Sort by Number</span>
    </p>
    <p><label>Sorter with custom directive:</label> <span>Sort by Number</span></p>
    <ol>
      <li v-for="(row, rowIndex) in items5" :key="rowIndex">
        <ItemSelector5 :item="row" />
        Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City: {{ row.L12.L23.L31 }};
        Boolean: {{ row.L12.L23.L32 }}; Arr-string: {{ row.L12.L23.L33 }}; Arr-dates: {{ row.L12.L23.L34 }};
        Arr-booleans: {{ row.L12.L23.L35 }}; Arr-nums : {{ row.L12.L23.L36 }}
      </li>
    </ol>
    <br />
    <hr />
    <TestPaginationComponent5 />
  </div>

  <div class="wrapper">
    <h1>Table 3</h1>
    <SortComponent6 />
    <br />
    <FilterComponent6 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage6" />
    <button @click="listTools6.paginationUtils.setItemsPerPage(itemsPerPage6)">Set items per page</button>
    <p><label>Input filter by number:</label> <InputFilter6 filterKey="L11" compare="Number" /></p>
    <p><label>Input filter by day of the month:</label> <InputFilter6 filterKey="L12.L22" compare="day" /></p>
    <p><label>Input filter by month:</label> <InputFilter6 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter6 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter6 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter6 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p><label>Input filter by string in string:</label> <InputFilter6 filterKey="L12.L21" compare="num" /></p>
    <p><label>Input filter by exact string:</label> <InputFilter6 filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter10 filterKey="L11" compare="num" /></p>
    <p><label>Range filter by day of the month:</label> <RangeFilter6 filterKey="L12.L22" compare="day" /></p>
    <p><label>Range filter by month:</label> <RangeFilter6 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter6 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter6 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter6 filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter6 /></p>
    <p><label>Values filter:</label> <ValuesFilter6 /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter6 /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector6 /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems6 /></p>
    <p>
      <label>Sorter with means at hand: </label>
      <span @click="listTools1.sortUtils.sortBy({ key: `L11`, event: $event })">Sort by Number</span>
    </p>
    <p><label>Sorter with custom directive:</label> <span>Sort by Number</span></p>
    <table>
      <thead>
        <th></th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L11`, event: $event })">Number</th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L12.L21`, event: $event })">Country</th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L12.L22`, event: $event })">Recent Date</th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L12.L23.L31`, event: $event })">City</th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L12.L23.L32`, event: $event })">Boolean</th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L12.L23.L33`, event: $event })">Array of strings</th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L12.L23.L34`, event: $event })">Array of dates</th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L12.L23.L35`, event: $event })">Array of booleans</th>
        <th @click="listTools6.sortUtils.sortBy({ key: `L12.L23.L36`, event: $event })">Array of numbers</th>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in items6" :key="rowIndex">
          <td><ItemSelector6 :item="row" /></td>
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
    <TestPaginationComponent6 />
  </div>
  <div class="wrapper">
    <h2>List 4</h2>
    <SortComponent7 />
    <br />
    <FilterComponent7 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage7" />
    <button @click="listTools7.setItemsPerPage(itemsPerPage7)">Set items per page</button>
    <br />
    <span @click="listTools7.sortUtils.sortBy({ key: `L12.L23.L31`, event: $event })">Sort by City</span>
    <p><label>Input filter by number:</label> <InputFilter7 filterKey="L11" compare="Number" /></p>
    <p><label>Input filter by day of the month:</label> <InputFilter7 filterKey="L12.L22" compare="day" /></p>
    <p><label>Input filter by month:</label> <InputFilter7 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter7 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter7 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter7 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p><label>Input filter by string in string:</label> <InputFilter7 filterKey="L12.L21" compare="num" /></p>
    <p><label>Input filter by exact string:</label> <InputFilter7 filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter7 filterKey="L11" compare="num" /></p>
    <p><label>Range filter by day of the month:</label> <RangeFilter7 filterKey="L12.L22" compare="day" /></p>
    <p><label>Range filter by month:</label> <RangeFilter7 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter7 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter7 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter7 filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter7 /></p>
    <p><label>Values filter:</label> <ValuesFilter7 /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter7 /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector7 /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems7 /></p>
    <p>
      <label>Sorter with means at hand: </label>
      <span @click="listTools1.sortUtils.sortBy({ key: `L11`, event: $event })">Sort by Number</span>
    </p>
    <p><label>Sorter with custom directive:</label> <span>Sort by Number</span></p>
    <ol>
      <li v-for="(row, rowIndex) in items7" :key="rowIndex">
        <ItemSelector7 :item="row" />
        Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City: {{ row.L12.L23.L31 }};
        Boolean: {{ row.L12.L23.L32 }}; Arr-string: {{ row.L12.L23.L33 }}; Arr-dates: {{ row.L12.L23.L34 }};
        Arr-booleans: {{ row.L12.L23.L35 }}; Arr-nums : {{ row.L12.L23.L36 }}
      </li>
    </ol>
    <hr />
    <br />
    <TestPaginationComponent7 />
  </div>
  <div class="wrapper">
    <h1>Table 4</h1>
    <SortComponentV28 />
    <br />
    <FilterComponent8 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage8" />
    <button @click="listTools8.paginationUtils.setItemsPerPage(itemsPerPage8)">Set items per page</button>
    <p><label>Input filter by number:</label> <InputFilter7 filterKey="L11" compare="Number" /></p>
    <p><label>Input filter by day of the month:</label> <InputFilter8 filterKey="L12.L22" compare="day" /></p>
    <p><label>Input filter by month:</label> <InputFilter8 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter8 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter8 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter8 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p><label>Input filter by string in string:</label> <InputFilter8 filterKey="L12.L21" compare="num" /></p>
    <p><label>Input filter by exact string:</label> <InputFilter8 filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter8 filterKey="L11" compare="num" /></p>
    <p><label>Range filter by day of the month:</label> <RangeFilter8 filterKey="L12.L22" compare="day" /></p>
    <p><label>Range filter by month:</label> <RangeFilter8 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter8 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter8 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter8 filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter8 /></p>
    <p><label>Values filter:</label> <ValuesFilter8 /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter8 /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector8 /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems8 /></p>
    <p>
      <label>Sorter with means at hand: </label>
      <span @click="listTools1.sortUtils.sortBy({ key: `L11`, event: $event })">Sort by Number</span>
    </p>
    <p><label>Sorter with custom directive:</label> <span>Sort by Number</span></p>
    <table>
      <thead>
        <th></th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L11`, event: $event })">Number</th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L12.L21`, event: $event })">Country</th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L12.L22`, event: $event })">Recent Date</th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L12.L23.L31`, event: $event })">City</th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L12.L23.L32`, event: $event })">Boolean</th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L12.L23.L33`, event: $event })">Array of strings</th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L12.L23.L34`, event: $event })">Array of dates</th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L12.L23.L35`, event: $event })">Array of booleans</th>
        <th @click="listTools8.sortUtils.sortBy({ key: `L12.L23.L36`, event: $event })">Array of numbers</th>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in items8" :key="rowIndex">
          <ItemSelector8 :item="row" />
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
    <TestPaginationComponent8 />
  </div>
  <div class="wrapper">
    <h2>List 5</h2>
    <SortComponentV29 />
    <br />
    <FilterComponent9 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage9" />
    <button @click="listTools9.setItemsPerPage(itemsPerPage9)">Set items per page</button>
    <br />
    <span @click="listTools9.sortUtils.sortBy({ key: `L12.L23.L32`, event: $event })">Sort by Boolean</span>
    <p><label>Input filter by number:</label> <InputFilter9 filterKey="L11" compare="Number" /></p>
    <p><label>Input filter by day of the month:</label> <InputFilter9 filterKey="L12.L22" compare="day" /></p>
    <p><label>Input filter by month:</label> <InputFilter9 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter9 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter9 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter9 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p><label>Input filter by string in string:</label> <InputFilter9 filterKey="L12.L21" compare="num" /></p>
    <p><label>Input filter by exact string:</label> <InputFilter9 filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter9 filterKey="L11" compare="num" /></p>
    <p><label>Range filter by day of the month:</label> <RangeFilter9 filterKey="L12.L22" compare="day" /></p>
    <p><label>Range filter by month:</label> <RangeFilter9 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter9 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter9 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter9 filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter9 /></p>
    <p><label>Values filter:</label> <ValuesFilter9 /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter9 /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector9 /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems9 /></p>
    <p>
      <label>Sorter with means at hand: </label>
      <span @click="listTools1.sortUtils.sortBy({ key: `L11`, event: $event })">Sort by Number</span>
    </p>
    <p><label>Sorter with custom directive:</label> <span>Sort by Number</span></p>
    <ol>
      <li v-for="(row, rowIndex) in items9" :key="rowIndex">
        <ItemSelector9 :item="row" />
        Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City: {{ row.L12.L23.L31 }};
        Boolean: {{ row.L12.L23.L32 }}; Arr-string: {{ row.L12.L23.L33 }}; Arr-dates: {{ row.L12.L23.L34 }};
        Arr-booleans: {{ row.L12.L23.L35 }}; Arr-nums : {{ row.L12.L23.L36 }}
      </li>
    </ol>
    <hr />
    <br />
    <TestPaginationComponent9 />
  </div>
  <div class="wrapper">
    <h1>Table 5</h1>
    <SortComponent10 />
    <br />
    <InputFilterComponent10 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage10" />
    <button @click="listTools10.paginationUtils.setItemsPerPage(itemsPerPage10)">Set items per page</button>
    <p><label>Input filter by number:</label> <InputFilter10 filterKey="L11" compare="Number" /></p>
    <p><label>Input filter by day of the month:</label> <InputFilter10 filterKey="L12.L22" compare="day" /></p>
    <p><label>Input filter by month:</label> <InputFilter10 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter10 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter10 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter10 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p><label>Input filter by string in string:</label> <InputFilter10 filterKey="L12.L21" compare="num" /></p>
    <p><label>Input filter by exact string:</label> <InputFilter10 filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter10 filterKey="L11" compare="num" /></p>
    <p><label>Range filter by day of the month:</label> <RangeFilter10 filterKey="L12.L22" compare="day" /></p>
    <p><label>Range filter by month:</label> <RangeFilter10 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter10 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter10 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter10 filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter10 /></p>
    <p><label>Values filter:</label> <ValuesFilter10 /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter10 /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector10 /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems10 /></p>
    <p>
      <label>Sorter with means at hand: </label>
      <span @click="listTools1.sortUtils.sortBy({ key: `L11`, event: $event })">Sort by Number</span>
    </p>
    <p><label>Sorter with custom directive:</label> <span>Sort by Number</span></p>
    <table>
      <thead>
        <th></th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L11`, event: $event })">Number</th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L12.L21`, event: $event })">Country</th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L12.L22`, event: $event })">Recent Date</th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L12.L23.L31`, event: $event })">City</th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L12.L23.L32`, event: $event })">Boolean</th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L12.L23.L33`, event: $event })">Array of strings</th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L12.L23.L34`, event: $event })">Array of dates</th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L12.L23.L35`, event: $event })">Array of booleans</th>
        <th @click="listTools10.sortUtils.sortBy({ key: `L12.L23.L36`, event: $event })">Array of numbers</th>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in items10" :key="rowIndex">
          <td><ItemSelector10 :item="row" /></td>
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
    <TestPaginationComponent10 />
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
