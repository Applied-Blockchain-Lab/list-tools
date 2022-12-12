<script setup>
import { computed, watch } from "vue";
import { ref } from "vue";
import useSortComponent from "../components/sortComponent";
import usePaginationComponent from "../components/paginationComponent";
import useEventBus from "../composables/eventBus";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const { bus } = useEventBus();
const sortedOrder = ref("sort");

const sortComponent = useSortComponent(props.id);
const paginationComponent = usePaginationComponent(props.id);

const rows = computed(() => paginationComponent.paginate());

const sortableKeys = ref(sortComponent.keyify(rows.value[0]));
const selectedSortKey = ref("");
const selectedSortOrder = ref("");

watch(
  () => bus.value.get("sortOrder"),
  (val) => {
    sortedOrder.value = val[0];
  },
);
</script>

<template>
  <select name="" id="" v-model="selectedSortKey">
    <option value="" selected disabled hidden>Choose key</option>
    <option :value="key" v-for="(key, i) in sortableKeys" :key="i">{{ key }}</option>
  </select>
  <select name="" id="" v-model="selectedSortOrder">
    <option value="" selected disabled hidden>Choose order</option>
    <option value="asc">Ascending</option>
    <option value="desc">Descending</option>
  </select>

  <button @click="sortComponent.sortBy(selectedSortKey, selectedSortOrder)">sort</button>

  <ol :class="sortedOrder" v-for="(row, rowIndex) in rows" :key="rowIndex">
    <li>
      Number: {{ row.L11 }}; Country: {{ row.L12.L21 }}; Recent Date: {{ row.L12.L22 }}; City: {{ row.L12.L23.L31 }};
      Boolean: {{ row.L12.L23.L32 }}; R-num-string: {{ row.L12.L23.L33 }}; R-dates: {{ row.L12.L23.L34 }}; R-booleans:
      {{ row.L12.L23.L35 }}
    </li>
    <br />
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

ol {
  width: 100%;
}
</style>
