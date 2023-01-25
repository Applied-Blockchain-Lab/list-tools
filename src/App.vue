// buddy ignore:start
<script setup>
import { ref, computed } from "vue";

import SingleSelectSort1 from "./components/sorters/SingleSelectSort.vue?listId=1";
import SingleSelectSort3 from "./components/sorters/SingleSelectSort.vue?listId=3";
import SingleSelectSort5 from "./components/sorters/SingleSelectSort.vue?listId=5";
import SingleSelectSort7 from "./components/sorters/SingleSelectSort.vue?listId=7";
import SingleSelectSort9 from "./components/sorters/SingleSelectSort.vue?listId=9";
import DoubleSelectSort1 from "./components/sorters/DoubleSelectSort.vue?listId=1";
import DoubleSelectSort3 from "./components/sorters/DoubleSelectSort.vue?listId=3";
import DoubleSelectSort5 from "./components/sorters/DoubleSelectSort.vue?listId=5";
import DoubleSelectSort7 from "./components/sorters/DoubleSelectSort.vue?listId=7";
import DoubleSelectSort9 from "./components/sorters/DoubleSelectSort.vue?listId=9";
import SortComponentV2 from "./components/SortComponentV2.vue";

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

import Pagination1 from "./components/pagination/PaginationComponent.vue?listId=1";
import Pagination2 from "./components/pagination/PaginationComponent.vue?listId=2";
import Pagination3 from "./components/pagination/PaginationComponent.vue?listId=3";
import Pagination4 from "./components/pagination/PaginationComponent.vue?listId=4";
import Pagination5 from "./components/pagination/PaginationComponent.vue?listId=5";
import Pagination6 from "./components/pagination/PaginationComponent.vue?listId=6";
import Pagination7 from "./components/pagination/PaginationComponent.vue?listId=7";
import Pagination8 from "./components/pagination/PaginationComponent.vue?listId=8";
import Pagination9 from "./components/pagination/PaginationComponent.vue?listId=9";
import Pagination10 from "./components/pagination/PaginationComponent.vue?listId=10";

import demoData from "../demo-data/demoData1.json";
import demoData2 from "../demo-data/demoData2.json";
import useGlobalComposable from "./composables/globalComposable";

const listTools1 = useGlobalComposable(1, 5, true);
const listTools2 = useGlobalComposable(2, 10, true);
const listTools3 = useGlobalComposable(3, 7, false);
const listTools4 = useGlobalComposable(4, 7, false);
const listTools5 = useGlobalComposable(5, 7, true);
const listTools6 = useGlobalComposable(6, 7, true);
const listTools7 = useGlobalComposable(7, 7, false);
const listTools8 = useGlobalComposable(8, 7, false);
const listTools9 = useGlobalComposable(9, 7, true);
const listTools10 = useGlobalComposable(10, 7, true);

listTools1.init(demoData);
listTools2.init(demoData);
listTools3.init(demoData);
listTools4.init(demoData);
listTools5.init(demoData);
listTools6.init(demoData);
listTools7.init(demoData);
listTools8.init(demoData);
listTools9.init(demoData);
listTools10.init(demoData);

const items1 = computed(() => listTools1.paginationUtils.getItems());
const items2 = computed(() => listTools2.paginationUtils.getItems());
const items3 = computed(() => listTools3.paginationUtils.getItems());
const items4 = computed(() => listTools4.paginationUtils.getItems());
const items5 = computed(() => listTools5.paginationUtils.getItems());
const items6 = computed(() => listTools6.paginationUtils.getItems());
const items7 = computed(() => listTools7.paginationUtils.getItems());
const items8 = computed(() => listTools8.paginationUtils.getItems());
const items9 = computed(() => listTools9.paginationUtils.getItems());
const items10 = computed(() => listTools10.paginationUtils.getItems());

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

function changeData(listTools) {
  listTools.setAllItems(demoData2);
}
</script>

<template>
  <div class="wrapper">
    <h2>List 1</h2>
    <p><label>Text:</label> <SortComponentV21 /></p>
    <button @click="changeData(listTools1)">Change data</button>
    <p><label>Single select sort:</label> <SingleSelectSort1 /></p>
    <p><label>Double select sort:</label> <DoubleSelectSort1 /></p>

    <p><span v-sort:[1]="'L11'">sort d1 (Number)</span></p>
    <p><span v-sort:[1]="'L12.L21'">sort d2 (Country)</span></p>
    <p><span v-sort:[1]="'L12.L22'">sort d3 (Date)</span></p>
    <p><span v-sort:[1]="'L12.L23.L31'">sort d4 (Place)</span></p>
    <p><span v-sort:[1]="'L12.L23.L32'">sort d5 (Boolean)</span></p>
    <p><span v-sort:[1]="'L12.L23.L33'">sort d6 (Array strings)</span></p>
    <p><span v-sort:[1]="'L12.L23.L34'">sort d7 (Array dates)</span></p>
    <p><span v-sort:[1]="'L12.L23.L35'">sort d8 (Array boolean)</span></p>
    <p><span v-sort:[1]="'L12.L23.L36'">sort d9 (Array numbers)</span></p>

    <p><label>Sort component 2 (TODO):</label> <SortComponentV2 :id="1" /></p>
    <p>
      <label>Items per page:</label>
      <input type="text" name="" id="" v-model="itemsPerPage1" />
      <button @click="listTools1.paginationUtils.setItemsPerPage(itemsPerPage1)">Set items per page</button>
    </p>

    <p><label>Input filter by number: (Number)</label> <InputFilter1 filterKey="L11" compare="num" /></p>
    <p>
      <label>Input filter by day of the month: (Recent Date)</label> <InputFilter1 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month: (Recent Date)</label> <InputFilter1 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year: (Recent Date)</label> <InputFilter1 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array: (Arr-string)</label>
      <InputFilter1 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings: (Arr-string)</label>
      <InputFilter1 filterKey="L12.L23.L33" compare="stringInArr" />
    </p>
    <p>
      <label>Input filter by string in string: (Country)</label>
      <InputFilter1 filterKey="L12.L21" compare="stringInString" />
    </p>
    <p><label>Input filter by exact string: (Country)</label> <InputFilter1 filterKey="L12.L21" compare="string" /></p>
    <p><label>Range filter by number: (Number)</label> <RangeFilter1 filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month: (Recent Date)</label> <RangeFilter1 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month: (Recent Date)</label> <RangeFilter1 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year: (Recent Date)</label> <RangeFilter1 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array: (Arr-string)</label>
      <RangeFilter1 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers: (Arr-nums)</label>
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
    <Pagination1 />
  </div>
  <div class="wrapper">
    <h1>Table 1</h1>
    <SortComponent2 />
    <button @click="changeData(listTools2)">Change data</button>
    <br />
    <SortComponent2 />
    <br />
    <FilterComponent2 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage2" />
    <button @click="listTools2.paginationUtils.setItemsPerPage(itemsPerPage2)">Set items per page</button>
    <p><label>Input filter by number: (Number)</label> <InputFilter2 filterKey="L11" compare="num" /></p>
    <p>
      <label>Input filter by day of the month: (Recent Date)</label> <InputFilter2 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month: (Recent Date)</label> <InputFilter2 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year: (Recent Date)</label> <InputFilter2 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array: (Arr-string)</label>
      <InputFilter2 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings: (Arr-string)</label>
      <InputFilter2 filterKey="L12.L23.L33" compare="stringInArr" />
    </p>
    <p>
      <label>Input filter by string in string: (Country)</label>
      <InputFilter2 filterKey="L12.L21" compare="stringInString" />
    </p>
    <p><label>Input filter by exact string: (Country)</label> <InputFilter2 filterKey="L12.L21" compare="string" /></p>
    <p><label>Range filter by number: (Number)</label> <RangeFilter2 filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month: (Recent Date)</label> <RangeFilter2 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month: (Recent Date)</label> <RangeFilter2 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year: (Recent Date)</label> <RangeFilter2 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array: (Arr-string)</label>
      <RangeFilter2 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers: (Arr-nums)</label>
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
        <th v-sort:[2]="'L11'">Number</th>
        <th v-sort:[2]="'L12.L21'">Country</th>
        <th v-sort:[2]="'L12.L22'">Recent Date</th>
        <th v-sort:[2]="'L12.L23.L31'">City</th>
        <th v-sort:[2]="'L12.L23.L32'">Boolean</th>
        <th v-sort:[2]="'L12.L23.L33'">Array of strings</th>
        <th v-sort:[2]="'L12.L23.L34'">Array of dates</th>
        <th v-sort:[2]="'L12.L23.L35'">Array of booleans</th>
        <th v-sort:[2]="'L12.L23.L36'">Array of numbers</th>
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
    <Pagination2 />
  </div>
  <div class="wrapper">
    <h2>List 2</h2>
    <button @click="changeData(listTools3)">Change data</button>
    <SingleSelectSort3 />
    <DoubleSelectSort3 />

    <p><span v-sort:[3]="'L11'">sort d1 (Number)</span></p>
    <p><span v-sort:[3]="'L12.L21'">sort d2 (Country)</span></p>
    <p><span v-sort:[3]="'L12.L22'">sort d3 (Date)</span></p>
    <p><span v-sort:[3]="'L12.L23.L31'">sort d4 (Place)</span></p>
    <p><span v-sort:[3]="'L12.L23.L32'">sort d5 (Boolean)</span></p>
    <p><span v-sort:[3]="'L12.L23.L33'">sort d6 (Array strings)</span></p>
    <p><span v-sort:[3]="'L12.L23.L34'">sort d7 (Array dates)</span></p>
    <p><span v-sort:[3]="'L12.L23.L35'">sort d8 (Array boolean)</span></p>
    <p><span v-sort:[3]="'L12.L23.L36'">sort d9 (Array numbers)</span></p>

    <p><label>Sort component (TODO):</label> <SortComponent3 /></p>
    <br />
    <FilterComponent3 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage3" />
    <button @click="listTools3.setItemsPerPage(itemsPerPage3)">Set items per page</button>
    <br />
    <span @click="listTools3.sortUtils.sortBy({ key: `L12.L21`, event: $event })">Sort by Country</span>
    <p><label>Input filter by number: (Number)</label> <InputFilter3 filterKey="L11" compare="num" /></p>
    <p>
      <label>Input filter by day of the month: (Recent Date)</label> <InputFilter3 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month: (Recent Date)</label> <InputFilter3 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year: (Recent Date)</label> <InputFilter3 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array: (Arr-string)</label>
      <InputFilter3 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings: (Arr-string)</label>
      <InputFilter3 filterKey="L12.L23.L33" compare="stringInArr" />
    </p>
    <p>
      <label>Input filter by string in string: (Country)</label>
      <InputFilter3 filterKey="L12.L21" compare="stringInString" />
    </p>
    <p><label>Input filter by exact string: (Country)</label> <InputFilter3 filterKey="L12.L21" compare="string" /></p>
    <p><label>Range filter by number: (Number)</label> <RangeFilter3 filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month: (Recent Date)</label> <RangeFilter3 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month: (Recent Date)</label> <RangeFilter3 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year: (Recent Date)</label> <RangeFilter3 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array: (Arr-string)</label>
      <RangeFilter3 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers: (Arr-nums)</label>
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
    <Pagination3 />
  </div>
  <div class="wrapper">
    <h1>Table 2</h1>
    <button @click="changeData(listTools4)">Change data</button>
    <br />
    <SortComponentV24 />
    <br />
    <FilterComponent4 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage4" />
    <button @click="listTools4.paginationUtils.setItemsPerPage(itemsPerPage4)">Set items per page</button>
    <p><label>Input filter by number: (Number)</label> <InputFilter4 filterKey="L11" compare="num" /></p>
    <p>
      <label>Input filter by day of the month: (Recent Date)</label> <InputFilter4 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month: (Recent Date)</label> <InputFilter4 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year: (Recent Date)</label> <InputFilter4 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array: (Arr-string)</label>
      <InputFilter4 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings: (Arr-string)</label>
      <InputFilter4 filterKey="L12.L23.L33" compare="stringInArr" />
    </p>
    <p>
      <label>Input filter by string in string: (Country)</label>
      <InputFilter4 filterKey="L12.L21" compare="stringInString" />
    </p>
    <p><label>Input filter by exact string: (Country)</label> <InputFilter4 filterKey="L12.L21" compare="string" /></p>
    <p><label>Range filter by number: (Number)</label> <RangeFilter4 filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month: (Recent Date)</label> <RangeFilter4 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month: (Recent Date)</label> <RangeFilter4 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year: (Recent Date)</label> <RangeFilter4 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array: (Arr-string)</label>
      <RangeFilter4 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers: (Arr-nums)</label>
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
        <th v-sort:[4]="'L11'">Number</th>
        <th v-sort:[4]="'L12.L21'">Country</th>
        <th v-sort:[4]="'L12.L22'">Recent Date</th>
        <th v-sort:[4]="'L12.L23.L31'">City</th>
        <th v-sort:[4]="'L12.L23.L32'">Boolean</th>
        <th v-sort:[4]="'L12.L23.L33'">Array of strings</th>
        <th v-sort:[4]="'L12.L23.L34'">Array of dates</th>
        <th v-sort:[4]="'L12.L23.L35'">Array of booleans</th>
        <th v-sort:[4]="'L12.L23.L36'">Array of numbers</th>
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
    <Pagination4 />
  </div>
  <div class="wrapper">
    <h2>List 3</h2>
    <button @click="changeData(listTools5)">Change data</button>
    <SingleSelectSort5 />
    <DoubleSelectSort5 />
    <p><span v-sort:[5]="'L11'">sort d1 (Number)</span></p>
    <p><span v-sort:[5]="'L12.L21'">sort d2 (Country)</span></p>
    <p><span v-sort:[5]="'L12.L22'">sort d3 (Date)</span></p>
    <p><span v-sort:[5]="'L12.L23.L31'">sort d4 (Place)</span></p>
    <p><span v-sort:[5]="'L12.L23.L32'">sort d5 (Boolean)</span></p>
    <p><span v-sort:[5]="'L12.L23.L33'">sort d6 (Array strings)</span></p>
    <p><span v-sort:[5]="'L12.L23.L34'">sort d7 (Array dates)</span></p>
    <p><span v-sort:[5]="'L12.L23.L35'">sort d8 (Array boolean)</span></p>
    <p><span v-sort:[5]="'L12.L23.L36'">sort d9 (Array numbers)</span></p>

    <p><label>Sort component (TODO):</label> <SortComponentV25 /></p>
    <br />
    <FilterComponent5 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage5" />
    <button @click="listTools5.paginationUtils.setItemsPerPage(itemsPerPage5)">Set items per page</button>
    <br />
    <span @click="listTools5.sortUtils.sortBy({ key: `L12.L22`, event: $event })">Sort by Recent Date</span>
    <p><label>Input filter by number: (Number)</label> <InputFilter5 filterKey="L11" compare="num" /></p>
    <p>
      <label>Input filter by day of the month: (Recent Date)</label> <InputFilter5 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month: (Recent Date)</label> <InputFilter5 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year: (Recent Date)</label> <InputFilter5 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array: (Arr-string)</label>
      <InputFilter5 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings: (Arr-string)</label>
      <InputFilter5 filterKey="L12.L23.L33" compare="stringInArr" />
    </p>
    <p>
      <label>Input filter by string in string: (Country)</label>
      <InputFilter5 filterKey="L12.L21" compare="stringInString" />
    </p>
    <p><label>Input filter by exact string: (Country)</label> <InputFilter5 filterKey="L12.L21" compare="string" /></p>
    <p><label>Range filter by number: (Number)</label> <RangeFilter5 filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month: (Recent Date)</label> <RangeFilter5 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month: (Recent Date)</label> <RangeFilter5 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year: (Recent Date)</label> <RangeFilter5 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array: (Arr-string)</label>
      <RangeFilter5 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers: (Arr-nums)</label>
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
    <Pagination5 />
  </div>

  <div class="wrapper">
    <h1>Table 3</h1>
    <button @click="changeData(listTools6)">Change data</button>
    <br />
    <SortComponent6 />
    <br />
    <FilterComponent6 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage6" />
    <button @click="listTools6.paginationUtils.setItemsPerPage(itemsPerPage6)">Set items per page</button>
    <p><label>Input filter by number: (Number)</label> <InputFilter6 filterKey="L11" compare="num" /></p>
    <p>
      <label>Input filter by day of the month: (Recent Date)</label> <InputFilter6 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month: (Recent Date)</label> <InputFilter6 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year: (Recent Date)</label> <InputFilter6 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array: (Arr-string)</label>
      <InputFilter6 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings: (Arr-string)</label>
      <InputFilter6 filterKey="L12.L23.L33" compare="stringInArr" />
    </p>
    <p>
      <label>Input filter by string in string: (Country)</label>
      <InputFilter6 filterKey="L12.L21" compare="stringInString" />
    </p>
    <p><label>Input filter by exact string: (Country)</label> <InputFilter6 filterKey="L12.L21" compare="string" /></p>
    <p><label>Range filter by number: (Number)</label> <RangeFilter6 filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month: (Recent Date)</label> <RangeFilter6 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month: (Recent Date)</label> <RangeFilter6 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year: (Recent Date)</label> <RangeFilter6 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array: (Arr-string)</label>
      <RangeFilter6 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers: (Arr-nums)</label>
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
        <th v-sort:[6]="'L11'">Number</th>
        <th v-sort:[6]="'L12.L21'">Country</th>
        <th v-sort:[6]="'L12.L22'">Recent Date</th>
        <th v-sort:[6]="'L12.L23.L31'">City</th>
        <th v-sort:[6]="'L12.L23.L32'">Boolean</th>
        <th v-sort:[6]="'L12.L23.L33'">Array of strings</th>
        <th v-sort:[6]="'L12.L23.L34'">Array of dates</th>
        <th v-sort:[6]="'L12.L23.L35'">Array of booleans</th>
        <th v-sort:[6]="'L12.L23.L36'">Array of numbers</th>
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
    <Pagination6 />
  </div>
  <div class="wrapper">
    <h2>List 4</h2>
    <button @click="changeData(listTools7)">Change data</button>
    <SingleSelectSort7 />
    <DoubleSelectSort7 />
    <p><span v-sort:[7]="'L11'">sort d1 (Number)</span></p>
    <p><span v-sort:[7]="'L12.L21'">sort d2 (Country)</span></p>
    <p><span v-sort:[7]="'L12.L22'">sort d3 (Date)</span></p>
    <p><span v-sort:[7]="'L12.L23.L31'">sort d4 (Place)</span></p>
    <p><span v-sort:[7]="'L12.L23.L32'">sort d5 (Boolean)</span></p>
    <p><span v-sort:[7]="'L12.L23.L33'">sort d6 (Array strings)</span></p>
    <p><span v-sort:[7]="'L12.L23.L34'">sort d7 (Array dates)</span></p>
    <p><span v-sort:[7]="'L12.L23.L35'">sort d8 (Array boolean)</span></p>
    <p><span v-sort:[7]="'L12.L23.L36'">sort d9 (Array numbers)</span></p>

    <p><label>Sort component (TODO):</label> <SortComponent7 /></p>
    <br />
    <FilterComponent7 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage7" />
    <button @click="listTools7.setItemsPerPage(itemsPerPage7)">Set items per page</button>
    <br />
    <span @click="listTools7.sortUtils.sortBy({ key: `L12.L23.L31`, event: $event })">Sort by City</span>
    <p><label>Input filter by number: (Number)</label> <InputFilter7 filterKey="L11" compare="num" /></p>
    <p>
      <label>Input filter by day of the month: (Recent Date)</label> <InputFilter7 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month: (Recent Date)</label> <InputFilter7 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year: (Recent Date)</label> <InputFilter7 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array: (Arr-string)</label>
      <InputFilter7 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings: (Arr-string)</label>
      <InputFilter7 filterKey="L12.L23.L33" compare="stringInArr" />
    </p>
    <p>
      <label>Input filter by string in string: (Country)</label>
      <InputFilter7 filterKey="L12.L21" compare="stringInString" />
    </p>
    <p><label>Input filter by exact string: (Country)</label> <InputFilter7 filterKey="L12.L21" compare="string" /></p>
    <p><label>Range filter by number: (Number)</label> <RangeFilter7 filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month: (Recent Date)</label> <RangeFilter7 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month: (Recent Date)</label> <RangeFilter7 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year: (Recent Date)</label> <RangeFilter7 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array: (Arr-string)</label>
      <RangeFilter7 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers: (Arr-nums)</label>
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
    <Pagination7 />
  </div>
  <div class="wrapper">
    <h1>Table 4</h1>
    <button @click="changeData(listTools8)">Change data</button>
    <br />
    <SortComponentV28 />
    <br />
    <FilterComponent8 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage8" />
    <button @click="listTools8.paginationUtils.setItemsPerPage(itemsPerPage8)">Set items per page</button>
    <p><label>Input filter by number: (Number)</label> <InputFilter8 filterKey="L11" compare="num" /></p>
    <p>
      <label>Input filter by day of the month: (Recent Date)</label> <InputFilter8 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month: (Recent Date)</label> <InputFilter8 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year: (Recent Date)</label> <InputFilter8 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array: (Arr-string)</label>
      <InputFilter8 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings: (Arr-string)</label>
      <InputFilter8 filterKey="L12.L23.L33" compare="stringInArr" />
    </p>
    <p>
      <label>Input filter by string in string: (Country)</label>
      <InputFilter8 filterKey="L12.L21" compare="stringInString" />
    </p>
    <p><label>Input filter by exact string: (Country)</label> <InputFilter8 filterKey="L12.L21" compare="string" /></p>
    <p><label>Range filter by number: (Number)</label> <RangeFilter8 filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month: (Recent Date)</label> <RangeFilter8 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month: (Recent Date)</label> <RangeFilter8 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year: (Recent Date)</label> <RangeFilter8 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array: (Arr-string)</label>
      <RangeFilter8 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers: (Arr-nums)</label>
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
        <th v-sort:[8]="'L11'">Number</th>
        <th v-sort:[8]="'L12.L21'">Country</th>
        <th v-sort:[8]="'L12.L22'">Recent Date</th>
        <th v-sort:[8]="'L12.L23.L31'">City</th>
        <th v-sort:[8]="'L12.L23.L32'">Boolean</th>
        <th v-sort:[8]="'L12.L23.L33'">Array of strings</th>
        <th v-sort:[8]="'L12.L23.L34'">Array of dates</th>
        <th v-sort:[8]="'L12.L23.L35'">Array of booleans</th>
        <th v-sort:[8]="'L12.L23.L36'">Array of numbers</th>
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
    <Pagination8 />
  </div>
  <div class="wrapper">
    <h2>List 5</h2>
    <button @click="changeData(listTools9)">Change data</button>
    <SingleSelectSort9 />
    <DoubleSelectSort9 />
    <p><span v-sort:[9]="'L11'">sort d1 (Number)</span></p>
    <p><span v-sort:[9]="'L12.L21'">sort d2 (Country)</span></p>
    <p><span v-sort:[9]="'L12.L22'">sort d3 (Date)</span></p>
    <p><span v-sort:[9]="'L12.L23.L31'">sort d4 (Place)</span></p>
    <p><span v-sort:[9]="'L12.L23.L32'">sort d5 (Boolean)</span></p>
    <p><span v-sort:[9]="'L12.L23.L33'">sort d6 (Array strings)</span></p>
    <p><span v-sort:[9]="'L12.L23.L34'">sort d7 (Array dates)</span></p>
    <p><span v-sort:[9]="'L12.L23.L35'">sort d8 (Array boolean)</span></p>
    <p><span v-sort:[9]="'L12.L23.L36'">sort d9 (Array numbers)</span></p>
    <p><label>Sort component (TODO):</label> <SortComponentV29 /></p>
    <br />
    <FilterComponent9 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage9" />
    <button @click="listTools9.setItemsPerPage(itemsPerPage9)">Set items per page</button>
    <br />
    <span @click="listTools9.sortUtils.sortBy({ key: `L12.L23.L32`, event: $event })">Sort by Boolean</span>
    <p><label>Input filter by number: (Number)</label> <InputFilter9 filterKey="L11" compare="num" /></p>
    <p>
      <label>Input filter by day of the month: (Recent Date)</label> <InputFilter9 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month: (Recent Date)</label> <InputFilter9 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year: (Recent Date)</label> <InputFilter9 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array: (Arr-string)</label>
      <InputFilter9 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings: (Arr-string)</label>
      <InputFilter9 filterKey="L12.L23.L33" compare="stringInArr" />
    </p>
    <p>
      <label>Input filter by string in string: (Country)</label>
      <InputFilter9 filterKey="L12.L21" compare="stringInString" />
    </p>
    <p><label>Input filter by exact string: (Country)</label> <InputFilter9 filterKey="L12.L21" compare="string" /></p>
    <p><label>Range filter by number: (Number)</label> <RangeFilter9 filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month: (Recent Date)</label> <RangeFilter9 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month: (Recent Date)</label> <RangeFilter9 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year: (Recent Date)</label> <RangeFilter9 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array: (Arr-string)</label>
      <RangeFilter9 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers: (Arr-nums)</label>
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
    <Pagination9 />
  </div>
  <div class="wrapper">
    <h1>Table 5</h1>
    <button @click="changeData(listTools10)">Change data</button>
    <br />
    <SortComponent10 />
    <br />
    <InputFilterComponent10 />
    <br />
    <input type="text" name="" id="" v-model="itemsPerPage10" />
    <button @click="listTools10.paginationUtils.setItemsPerPage(itemsPerPage10)">Set items per page</button>
    <p><label>Input filter by number: (Number)</label> <InputFilter10 filterKey="L11" compare="num" /></p>
    <p>
      <label>Input filter by day of the month: (Recent Date)</label> <InputFilter10 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Input filter by month: (Recent Date)</label> <InputFilter10 filterKey="L12.L22" compare="month" /></p>
    <p><label>Input filter by year: (Recent Date)</label> <InputFilter10 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Input filter by number of elements in array: (Arr-string)</label>
      <InputFilter10 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Input filter by having an exact string in array of strings: (Arr-string)</label>
      <InputFilter10 filterKey="L12.L23.L33" compare="stringInArr" />
    </p>
    <p>
      <label>Input filter by string in string: (Country)</label>
      <InputFilter10 filterKey="L12.L21" compare="stringInString" />
    </p>
    <p><label>Input filter by exact string: (Country)</label> <InputFilter10 filterKey="L12.L21" compare="string" /></p>
    <p><label>Range filter by number: (Number)</label> <RangeFilter10 filterKey="L11" compare="num" /></p>
    <p>
      <label>Range filter by day of the month: (Recent Date)</label> <RangeFilter10 filterKey="L12.L22" compare="day" />
    </p>
    <p><label>Range filter by month: (Recent Date)</label> <RangeFilter10 filterKey="L12.L22" compare="month" /></p>
    <p><label>Range filter by year: (Recent Date)</label> <RangeFilter10 filterKey="L12.L22" compare="year" /></p>
    <p>
      <label>Range filter by number of elements in array: (Arr-string)</label>
      <RangeFilter10 filterKey="L12.L23.L33" compare="numEl" />
    </p>
    <p>
      <label>Range filter by having a number in array of numbers: (Arr-nums)</label>
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
        <th v-sort:[10]="'L11'">Number</th>
        <th v-sort:[10]="'L12.L21'">Country</th>
        <th v-sort:[10]="'L12.L22'">Recent Date</th>
        <th v-sort:[10]="'L12.L23.L31'">City</th>
        <th v-sort:[10]="'L12.L23.L32'">Boolean</th>
        <th v-sort:[10]="'L12.L23.L33'">Array of strings</th>
        <th v-sort:[10]="'L12.L23.L34'">Array of dates</th>
        <th v-sort:[10]="'L12.L23.L35'">Array of booleans</th>
        <th v-sort:[10]="'L12.L23.L36'">Array of numbers</th>
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
    <Pagination10 />
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
// buddy ignore:end
