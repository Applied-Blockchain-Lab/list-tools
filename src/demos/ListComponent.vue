<!-- <script setup>
import { computed, watch } from "vue";
import { ref } from "vue";
import SortComponent from "../components/SortComponent.vue";
import usePaginationComponent from "../utils/paginationUtils";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const { bus } = useEventBus();
const sortedOrder = ref("sort");

const paginationComponent = usePaginationComponent(props.id);

const rows = computed(() => paginationComponent.paginate());


watch(
  () => bus.value.get("sortOrder"),
  (val) => {
    sortedOrder.value = val[0];
  },
);
</script>

<template>
  <SortComponent :id="props.id" />

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
</style> -->
