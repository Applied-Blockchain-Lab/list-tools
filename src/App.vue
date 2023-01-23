<script setup>
import { ref, computed } from "vue";
import SingleSort from "./components/sorters/SingleSort.vue?listId=1";
import MultipleSort from "./components/sorters/MultipleSort.vue?listId=1";
import SortComponent from "./components/SortComponent.vue";
import SortComponentV2 from "./components/SortComponentV2.vue";
import InputFilter from "./components/filters/InputFilter.vue";
import RangeFilter from "./components/filters/RangeFilter.vue";
import SelectionFilter from "./components/filters/SelectionFilter.vue";
import ValuesFilter from "./components/filters/ValuesFilter.vue";
import VueSelectFilter from "./components/filters/VueSelectFilter.vue";
import ItemSelector from "./components/selectors/ItemSelector.vue";
import BulkItemsSelector from "./components/selectors/BulkItemsSelector.vue";
import NumberOfSelectedItems from "./components/selectors/NumberOfSelectedItems.vue";

import RangeFilter1 from "./components/filters/RangeFilter.vue?listId=1";
import InputFilter1 from "./components/filters/InputFilter.vue?listId=1";

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

listTools1.init(demoData, 5, false);
listTools2.init(demoData, 10, true);
listTools3.init(demoData, 7, true);
listTools4.init(demoData, 7, true);
listTools5.init(demoData, 7, true);
listTools6.init(demoData, 7, true);
listTools7.init(demoData, 7, true);
listTools8.init(demoData, 7, true);
listTools9.init(demoData, 7, true);
listTools10.init(demoData, 7, true);

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
    <p><label>Single sort:</label> <SingleSort /></p>
    <p><label>Single sort:</label> <SingleSort /></p>

    <p><label>Multiple sort:</label> <MultipleSort /></p>

    <p><span v-sort:[1]="'L11'">sort d1</span></p>
    <p><span v-sort:[1]="'L12.L21'">sort d2</span></p>
    <p><span v-sort:[1]="'L12.L23.L32'">sort d3</span></p>
    <p><span>sort d4</span></p>
    <p><span>sort d5</span></p>

    <p><label>Sort component 2 (TODO):</label> <SortComponentV2 :id="1" /></p>
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

    <p><label>Selection filter:</label> <SelectionFilter /></p>
    <p><label>Values filter:</label> <ValuesFilter /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector :id="1" /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems :id="1" /></p>
    <p>
      <label>Sorter with means at hand: </label>
      <span @click="listTools1.sortUtils.sortBy({ key: `L11`, event: $event })">Sort by Number</span>
    </p>
    <p><label>Sorter with custom directive:</label> <span>Sort by Number</span></p>

    <ol>
      <li v-for="(row, rowIndex) in items1" :key="rowIndex">
        <ItemSelector :id="1" :item="row" />
        Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City: {{ row.L12.L23.L31 }};
        Boolean: {{ row.L12.L23.L32 }}; Arr-string: {{ row.L12.L23.L33 }}; Arr-dates: {{ row.L12.L23.L34 }};
        Arr-booleans: {{ row.L12.L23.L35 }}; Arr-nums : {{ row.L12.L23.L36 }}
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
    <p><label>Input filter by number:</label> <InputFilter :listId="2" filterKey="L11" compare="Number" /></p>
    <p>
      <label>Input filter by day of the month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by string in string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" />
    </p>
    <p><label>Input filter by exact string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter :listId="2" filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter /></p>
    <p><label>Values filter:</label> <ValuesFilter /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector :id="2" /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems :id="2" /></p>
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
          <td><ItemSelector :id="2" :item="row" /></td>
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
    <p><label>Input filter by number:</label> <InputFilter :listId="2" filterKey="L11" compare="Number" /></p>
    <p>
      <label>Input filter by day of the month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by string in string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" />
    </p>
    <p><label>Input filter by exact string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter :listId="2" filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter /></p>
    <p><label>Values filter:</label> <ValuesFilter /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector :id="2" /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems :id="2" /></p>
    <p>
      <label>Sorter with means at hand: </label>
      <span @click="listTools1.sortUtils.sortBy({ key: `L11`, event: $event })">Sort by Number</span>
    </p>
    <p><label>Sorter with custom directive:</label> <span>Sort by Number</span></p>
    <ol>
      <li v-for="(row, rowIndex) in items3" :key="rowIndex">
        <ItemSelector :id="3" :item="row" />
        Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City: {{ row.L12.L23.L31 }};
        Boolean: {{ row.L12.L23.L32 }}; Arr-string: {{ row.L12.L23.L33 }}; Arr-dates: {{ row.L12.L23.L34 }};
        Arr-booleans: {{ row.L12.L23.L35 }}; Arr-nums : {{ row.L12.L23.L36 }}
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
    <p><label>Input filter by number:</label> <InputFilter :listId="2" filterKey="L11" compare="Number" /></p>
    <p>
      <label>Input filter by day of the month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by string in string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" />
    </p>
    <p><label>Input filter by exact string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter :listId="2" filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter /></p>
    <p><label>Values filter:</label> <ValuesFilter /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector :id="2" /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems :id="2" /></p>
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
          <td><ItemSelector :id="4" :item="row" /></td>
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
    <p><label>Input filter by number:</label> <InputFilter :listId="2" filterKey="L11" compare="Number" /></p>
    <p>
      <label>Input filter by day of the month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by string in string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" />
    </p>
    <p><label>Input filter by exact string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter :listId="2" filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter /></p>
    <p><label>Values filter:</label> <ValuesFilter /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector :id="2" /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems :id="2" /></p>
    <p>
      <label>Sorter with means at hand: </label>
      <span @click="listTools1.sortUtils.sortBy({ key: `L11`, event: $event })">Sort by Number</span>
    </p>
    <p><label>Sorter with custom directive:</label> <span>Sort by Number</span></p>
    <ol>
      <li v-for="(row, rowIndex) in items5" :key="rowIndex">
        <ItemSelector :id="5" :item="row" />
        Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City: {{ row.L12.L23.L31 }};
        Boolean: {{ row.L12.L23.L32 }}; Arr-string: {{ row.L12.L23.L33 }}; Arr-dates: {{ row.L12.L23.L34 }};
        Arr-booleans: {{ row.L12.L23.L35 }}; Arr-nums : {{ row.L12.L23.L36 }}
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
    <p><label>Input filter by number:</label> <InputFilter :listId="2" filterKey="L11" compare="Number" /></p>
    <p>
      <label>Input filter by day of the month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by string in string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" />
    </p>
    <p><label>Input filter by exact string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter :listId="2" filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter /></p>
    <p><label>Values filter:</label> <ValuesFilter /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector :id="2" /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems :id="2" /></p>
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
          <td><ItemSelector :id="6" :item="row" /></td>
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
    <p><label>Input filter by number:</label> <InputFilter :listId="2" filterKey="L11" compare="Number" /></p>
    <p>
      <label>Input filter by day of the month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by string in string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" />
    </p>
    <p><label>Input filter by exact string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter :listId="2" filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter /></p>
    <p><label>Values filter:</label> <ValuesFilter /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector :id="2" /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems :id="2" /></p>
    <p>
      <label>Sorter with means at hand: </label>
      <span @click="listTools1.sortUtils.sortBy({ key: `L11`, event: $event })">Sort by Number</span>
    </p>
    <p><label>Sorter with custom directive:</label> <span>Sort by Number</span></p>
    <ol>
      <li v-for="(row, rowIndex) in items7" :key="rowIndex">
        <ItemSelector :id="7" :item="row" />
        Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City: {{ row.L12.L23.L31 }};
        Boolean: {{ row.L12.L23.L32 }}; Arr-string: {{ row.L12.L23.L33 }}; Arr-dates: {{ row.L12.L23.L34 }};
        Arr-booleans: {{ row.L12.L23.L35 }}; Arr-nums : {{ row.L12.L23.L36 }}
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
    <p><label>Input filter by number:</label> <InputFilter :listId="2" filterKey="L11" compare="Number" /></p>
    <p>
      <label>Input filter by day of the month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by string in string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" />
    </p>
    <p><label>Input filter by exact string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter :listId="2" filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter /></p>
    <p><label>Values filter:</label> <ValuesFilter /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector :id="2" /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems :id="2" /></p>
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
          <ItemSelector :id="8" :item="row" />
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
    <p><label>Input filter by number:</label> <InputFilter :listId="2" filterKey="L11" compare="Number" /></p>
    <p>
      <label>Input filter by day of the month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by string in string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" />
    </p>
    <p><label>Input filter by exact string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter :listId="2" filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter /></p>
    <p><label>Values filter:</label> <ValuesFilter /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector :id="2" /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems :id="2" /></p>
    <p>
      <label>Sorter with means at hand: </label>
      <span @click="listTools1.sortUtils.sortBy({ key: `L11`, event: $event })">Sort by Number</span>
    </p>
    <p><label>Sorter with custom directive:</label> <span>Sort by Number</span></p>
    <ol>
      <li v-for="(row, rowIndex) in items9" :key="rowIndex">
        <ItemSelector :id="9" :item="row" />
        Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City: {{ row.L12.L23.L31 }};
        Boolean: {{ row.L12.L23.L32 }}; Arr-string: {{ row.L12.L23.L33 }}; Arr-dates: {{ row.L12.L23.L34 }};
        Arr-booleans: {{ row.L12.L23.L35 }}; Arr-nums : {{ row.L12.L23.L36 }}
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
    <InputFilterComponent :id="10" />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage10" />
    <button @click="listTools10.paginationUtils.setItemsPerPage(itemsPerPage10)">Set items per page</button>
    <p><label>Input filter by number:</label> <InputFilter :listId="2" filterKey="L11" compare="Number" /></p>
    <p>
      <label>Input filter by day of the month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year:</label> <InputFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings:</label>
      <InputFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by string in string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" />
    </p>
    <p><label>Input filter by exact string:</label> <InputFilter :listId="2" filterKey="L12.L21" compare="num" /></p>

    <p><label>Range filter by number:</label> <RangeFilter :listId="2" filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year:</label> <RangeFilter :listId="2" filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers:</label>
      <RangeFilter :listId="2" filterKey="L12.L23.L36" compare="numInArr" />
    </p>

    <p><label>Selection filter:</label> <SelectionFilter /></p>
    <p><label>Values filter:</label> <ValuesFilter /></p>
    <p><label>Vue-Select filter:</label> <VueSelectFilter /></p>
    <p><label>Bulk items selector:</label> <BulkItemsSelector :id="2" /></p>
    <p><label>Number of selected items:</label> <NumberOfSelectedItems :id="2" /></p>
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
          <td><ItemSelector :id="10" :item="row" /></td>
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
