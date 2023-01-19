<script setup>
import { ListStore } from "../../listStore";

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

const listStore = ListStore(props.id);
</script>

<template>
  <input type="checkbox" :value="props.item" v-model="listStore.selectedItems" />
</template>
