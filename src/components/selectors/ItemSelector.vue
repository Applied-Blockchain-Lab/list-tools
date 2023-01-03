<script setup>
import { useListStore } from "../../listStore";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  item: {
    type: Object,
    required: true,
  },
});

const listStore = useListStore(props.id);
</script>
<template>
  <input type="checkbox" :value="props.item" v-model="listStore.selectedItems" />
</template>
<style scoped></style>
